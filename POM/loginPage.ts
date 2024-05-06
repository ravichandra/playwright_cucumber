import {type Page} from '@playwright/test'
import * as TestLocators from '../POM/TestLocators.json'
import * as TestData from '../TestData/TestData.json'
import CommonPage from '../Common/common'


export default class LoginPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async loginOrangeHRM(UserName: string, Password: string){
        let common = new CommonPage(this.page)

        await common.enterText(TestLocators.Login.txtUserName, "User Name", UserName)
       // await common.enterText(TestLocators.Login.txtPassword, "Password", Password)
        await common.clickObject(TestLocators.Login.btnLogin, "Login")


    }
}