import { expect, Locator, Page } from "@playwright/test";
import { waitForDebugger } from "node:inspector";
import { runInThisContext } from "node:vm";

export class SuppliersPage{
page:Page
readonly ClickSuppliersLink:Locator
readonly ClickAddIcon:Locator
readonly SupplierNumber:Locator
readonly SupplierName:Locator 
readonly Supplieraddress:Locator
readonly SupplierCity:Locator
readonly SupplierCountry:Locator
readonly SupplierContactPerson:Locator
readonly SupplierPhoneNumber:Locator
readonly SupplierEmail:Locator
readonly SupplierMobileNumber:Locator
readonly SupplierNotes:Locator
readonly ClickAdddButton:Locator
readonly ConformOk:Locator
readonly AlertOk:Locator
readonly SerchPanel:Locator
readonly SearchTextBox:Locator
readonly SerchButton:Locator
//read only
private expNumber!:string
constructor(page:Page)
{
    this.page=page
    this.ClickSuppliersLink=page.getByRole('link',{name:'Suppliers',exact:true})
    this.ClickAddIcon=page.getByRole('link',{name:'+',exact:true}).first()
    this.SupplierNumber=page.getByLabel('Supplier Number')
    this.SupplierName=page.getByPlaceholder('Supplier Name')
    this.Supplieraddress=page.getByPlaceholder('Address')
    this.SupplierCity=page.getByPlaceholder('City')
    this.SupplierCountry=page.getByPlaceholder('Country')
    this.SupplierContactPerson=page.getByPlaceholder('Contact Person')
    this.SupplierPhoneNumber=page.getByPlaceholder('Phone Number')
    this.SupplierEmail=page.getByPlaceholder('Email')
    this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
    this.SupplierNotes=page.getByPlaceholder('Notes')
    this.ClickAdddButton=page.locator('#btnAction')
    this.ConformOk=page.getByText('OK!')
    this.AlertOk=page.getByRole('button',{name:'OK',exact:true})
    this.SerchPanel=page.locator('[data-phrase="SearchBtn"]')
    this.SearchTextBox=page.locator('#psearch')
    this.SerchButton=page.locator('#btnsubmit')
}
//Method for navigate to supplier and page
async NavigateToSupliers()
 {
   await this.ClickSuppliersLink.waitFor()
   await this.ClickSuppliersLink.click()
  await this.ClickAddIcon.click()
 }

 async AddSupplierDetails(sname :string,address:string,city:string,country:string,cperson:string,
  pnumber:string,email:string,mnumber:string,notes:string)
  {
    await this.SupplierNumber.waitFor()
    this.expNumber=await this.SupplierNumber.inputValue();
    await this.SupplierName.fill(sname)
    await this.Supplieraddress.fill(address)
    await this.SupplierCity.fill(city)
    await this.SupplierCountry.fill(country)
    await this.SupplierContactPerson.fill(cperson)
    await this.SupplierPhoneNumber.fill(pnumber)
    await this.SupplierEmail.fill(email)
    await this.SupplierMobileNumber.fill(mnumber)
    await this.SupplierNotes.fill(notes)
    await this.ClickAdddButton.click()
 }

 async HandleAlerts(){

  await this.ConformOk.waitFor()
  await this.ConformOk.click()
  await this.AlertOk.waitFor()
  await this.AlertOk.click()

 }
 async supplierTable(){

  await this.SerchPanel.waitFor()
  if (await this.SerchPanel.isVisible()){
    await this .SerchPanel.click()
  }
  await this.SearchTextBox.waitFor()
  await this.SearchTextBox.clear()
  await this.SearchTextBox.fill(this.expNumber)
  await this.SerchButton.click()
 const supplierrow=this.page.locator('#el1_a_suppliers_Supplier_Number',
  {
    hasText:this.expNumber
  })

  await expect(supplierrow).toBeVisible()
  console.log(`supplier number found in table:${this.expNumber}`)
   await expect(supplierrow).toContainText(this.expNumber)
 

 }

 
} 
