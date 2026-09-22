import { Locator, Page } from "@playwright/test";

export class adminLogOut{
    page:Page
    readonly clickLogOut:Locator

    constructor(page:Page){
      this.page=page
      this.clickLogOut =page.getByRole('link',{name:'Logout',exact:true}).first()
    }

    async ERPlogout(){

        await this.clickLogOut.waitFor()
        await this.clickLogOut.click();
    }
    
}