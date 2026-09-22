import { expect, Locator, Page } from "@playwright/test"

export class CustomerPage{
    page:Page
    readonly ClickCustomerLink:Locator
    readonly ClickAddIcon:Locator
    readonly CustomerNumber:Locator
    readonly CustomerName:Locator 
    readonly Customeraddress:Locator
    readonly CustomerCity:Locator
    readonly CustomerCountry:Locator
    readonly CustomerContactPerson:Locator
    readonly CustomerPhoneNumber:Locator
    readonly CustomerEmail:Locator
    readonly CustomerMobileNumber:Locator
    readonly CustomerNotes:Locator
    readonly ClickAdddButton:Locator
    readonly ConformOk:Locator
    readonly AlertOk:Locator
    readonly SerchPanel:Locator
    readonly SearchTextBox:Locator
    readonly SerchButton:Locator
    //read only
    private cusNumber!:string
    constructor(page:Page)
    {
        this.page=page
        this.ClickCustomerLink=page.locator('#mi_a_customers')
        this.ClickAddIcon=page.getByRole('link',{name:'+',exact:true}).first()
        this.CustomerNumber=page.getByLabel('Customer Number')
        this.CustomerName=page.getByPlaceholder('Customer Name')
        this.Customeraddress=page.getByPlaceholder('Address')
        this.CustomerCity=page.getByPlaceholder('City')
        this.CustomerCountry=page.getByPlaceholder('Country')
        this.CustomerContactPerson=page.getByPlaceholder('Contact Person')
        this.CustomerPhoneNumber=page.getByPlaceholder('Phone Number')
        this.CustomerEmail=page.getByPlaceholder('Email')
        this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
        this.CustomerNotes=page.getByPlaceholder('Notes')
        this.ClickAdddButton=page.locator('#btnAction')
        this.ConformOk=page.getByText('OK!')
        this.AlertOk=page.getByRole('button',{name:'OK',exact:true})
        this.SerchPanel=page.locator('[data-phrase="SearchBtn"]')
        this.SearchTextBox=page.locator('#psearch')
        this.SerchButton=page.locator('#btnsubmit')
    }
    //Method for navigate to supplier and page
    async NavigateToCustomer()
     {
       await this.ClickCustomerLink.waitFor()
       await this.ClickCustomerLink.click()
       await this.ClickAddIcon.click()
     }
    
     async CustomerDetails(sname :string,address:string,city:string,country:string,cperson:string,
      pnumber:string,email:string,mnumber:string,notes:string)
      {
        await this.CustomerNumber.waitFor()
        this.cusNumber=await this.CustomerNumber.inputValue();
        await this.CustomerName.fill(sname)
        await this.Customeraddress.fill(address)
        await this.CustomerCity.fill(city)
        await this.CustomerCountry.fill(country)
        await this.CustomerContactPerson.fill(cperson)
        await this.CustomerPhoneNumber.fill(pnumber)
        await this.CustomerEmail.fill(email)
        await this.CustomerMobileNumber.fill(mnumber)
        await this.CustomerNotes.fill(notes)
        await this.ClickAdddButton.click()
     }
    
     async HandleAlerts(){
    
      await this.ConformOk.waitFor()
      await this.ConformOk.click()
      await this.AlertOk.waitFor()
      await this.AlertOk.click()
    
     }
     async customerTable(){
    
     await this.SerchPanel.waitFor()
    if (await this.SerchPanel.isVisible()){
    await this .SerchPanel.click()
  }
    await this.SearchTextBox.waitFor()
    await this.SearchTextBox.clear()
    await this.SearchTextBox.fill(this.cusNumber)
    await this.SerchButton.click()
     const supplierrow=this.page.locator('#el1_a_customers_Customer_Number',
      {
        hasText:this.cusNumber
      })
      await expect(supplierrow).toBeVisible()
      console.log(`supplier number found in table:${this.cusNumber}`)
       await expect(supplierrow).toContainText(this.cusNumber)
     
    
     }
}