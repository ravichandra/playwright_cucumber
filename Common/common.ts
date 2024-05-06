import {expect, type Page} from '@playwright/test'
import * as TestLocators from '../POM/TestLocators.json'
import * as TestData from '../TestData/TestData.json'


export default class Util {
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async launchApplication(){
        try{
            let url = ""
            if(TestData.CommonData.ENV == "DEV"){
                url = TestData.CommonData.URL.DEV
            }

            console.log("URL is: " +url)

            await this.page?.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 60000})
            await this.page?.waitForTimeout(5000)
        }catch(error){
            throw new Error(`Launch application failed with an error: ${error}`)
        };
    }

    async enterText(selector: string, fieldName: string, fieldValue: string){
        try{
           await this.page?.waitForSelector(selector)
           await this.page?.fill(selector, fieldValue)
           console.log("Entered: "+fieldName)

        }catch(error){
            throw new Error(`Enter text in field ${fieldName} failed with an error: : ${error}`)
        }
    }

    async clickObject(selector: string, objectName: string){
        try{
           await this.page?.waitForSelector(selector)
           await this.page?.click(selector)
           console.log("Clicked on: "+objectName)

        }catch(error){
            throw new Error(`Clicking on the obhect: ${objectName} failed with an error: : ${error}`)
        };
    }




}