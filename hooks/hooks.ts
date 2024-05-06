import {After, AfterAll, AfterStep, Before, BeforeAll, setDefaultTimeout} from '@cucumber/cucumber'
import {Browser, BrowserContext, chromium, Page} from '@playwright/test'
import * as TestData from '../TestData/TestData.json'
// import fs from 'fs'
// import path from 'path'

let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(100000);

BeforeAll(async () => {
    browser = await chromium.launch(({ headless: TestData.CommonData.HEADLESS }))
    console.log('browser launched')
})

Before(async function ({pickle}) {
    try{
        const scenarioName = pickle.id
        context = await browser.newContext({
            recordVideo: {
                dir: "test-results/videos/"+ pickle.name
            }
        });
        await context.tracing.start({
            name: scenarioName,
            title: pickle.name,
            sources: true,
            screenshots: true,
            snapshots: true
        })
        context.setDefaultTimeout(TestData.CommonData.DEFAULT_TIMEOUT)
        page = await context.newPage();

    }catch(error){
        throw new Error(`chrome navigation error failed due to ${error}`)
    }
    return page
})

AfterStep(async function ({pickle}) {
    const img =  await page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
    await this.attach(img, "image/png")
})

After(async function ({pickle}) {
    let videopath: any
    videopath = await page.video()?.path()
    const path = `test-results/trace/${pickle.name + pickle.id}.zip`
    await context.tracing.stop({path: path})
    //await this.attach(fs.readFileSync(videopath),'video/webm')
    await page.close()
    await context.close()
})

AfterAll(async () => {
    await browser.close(); 
})

export {page, browser};