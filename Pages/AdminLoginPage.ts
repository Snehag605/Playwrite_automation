import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage{
    //declares properties and Locaters for login
    page:Page
    readonly Usernameinput:Locator
    readonly passwordinput:Locator
    readonly loginbutton:Locator
    HomePageIdetifier:Locator
    //create a constructor to intialize values for properties
   constructor(page:Page)
   {
    this.page=page
    this.Usernameinput=page.getByRole('textbox',{name:'User Name'})
    this.passwordinput=page.getByRole('textbox',{name:'Password'})
    this.loginbutton=page.getByRole('button',{name:'Login',exact:true})
    this.HomePageIdetifier=page.locator('#ewBreadcrumb2')
   }
   //write method for action
   async launchUrl(Url:string)
   {
    await this.page.goto(Url)
   }
  //method for login
  async ERPLogin(User:string,pass:string)
  {
    await this.Usernameinput.waitFor()
    await this.Usernameinput.clear()
    await this.Usernameinput.fill(User)
    await this.passwordinput.waitFor()
    await this.passwordinput.fill(pass)
    await this.loginbutton.click()
    await expect(this.HomePageIdetifier).toBeVisible()
  }
}