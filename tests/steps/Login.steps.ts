import { Given, Then } from "@cucumber/cucumber";
import CommonPage from '../../Common/common'
import LoginPage from '../../POM/loginPage'
import { page } from '../../hooks/hooks'

Given('I launch the OrangeHRM application', async() => {
    const common = new CommonPage(page)
    await common.launchApplication()
})

Then('I enter {string} and {string} and sign in to the Orange HRM application', async(UserName: string, Password: string) => {
    const login = new LoginPage(page)
    login.loginOrangeHRM(UserName, Password)
})