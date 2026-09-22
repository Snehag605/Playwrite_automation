# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Manage >> suplier with single data
- Location: tests\ERPSingleData.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('el1_a_suppliers_Supplier_Number').filter({ hasText: 'Supplier-00000000915' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('el1_a_suppliers_Supplier_Number').filter({ hasText: 'Supplier-00000000915' }) with timeout 5000ms
  - waiting for locator('el1_a_suppliers_Supplier_Number').filter({ hasText: 'Supplier-00000000915' })
  - Test timeout of 30000ms exceeded.

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- text: "User Name:"
- strong: Administrator
- text: "|"
- link "Logout":
  - /url: javascript:void(0);
- list:
  - listitem:
    - link "Dashboard":
      - /url: dashboard.php
  - listitem:
    - link "Stock Items":
      - /url: a_stock_itemslist.php?cmd=resetall
  - listitem:
    - link "Suppliers":
      - /url: a_supplierslist.php
  - listitem:
    - link "Purchases":
      - /url: a_purchaseslist.php?cmd=resetall
  - listitem:
    - link "Customers":
      - /url: a_customerslist.php
  - listitem:
    - link "Sales":
      - /url: a_saleslist.php?cmd=resetall
  - listitem:
    - link "Outstandings":
      - /url: "#"
  - listitem:
    - link "Administrator":
      - /url: "#"
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Settings":
      - /url: "#"
  - listitem:
    - link " Logout":
      - /url: logout.php
- list
- list:
  - listitem:
    - link "":
      - /url: index.php
  - listitem: / Suppliers
  - link "":
    - /url: javascript:void(0);
- button ""
- button ""
- link "":
  - /url: a_supplierslist.php?cmd=reset
- link "":
  - /url: a_supplierssrch.php
- button ""
- radio "en" [checked]
- text: en
- radio "id"
- text: id Page Size
- combobox:
  - option "1"
  - option "2"
  - option "3"
  - option "5"
  - option "7"
  - option "10" [selected]
  - option "15"
  - option "20"
  - option "50"
  - option "100"
  - option "500"
  - option "1000"
- text: Records 1 to 1 of 1
- link "+":
  - /url: a_suppliersadd.php?showdetail=
- button ""
- table:
  - rowgroup:
    - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
      - cell "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
        - table:
          - rowgroup:
            - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
              - columnheader:
                - checkbox
              - columnheader
              - columnheader
              - columnheader
              - columnheader
              - columnheader "Supplier Number"
              - columnheader "Supplier Name"
              - columnheader "Contact Person"
              - columnheader "Phone Number"
              - columnheader "Mobile Number"
              - columnheader "Balance"
              - columnheader "Is Stock Available?"
- table:
  - rowgroup:
    - row " Purchase Now    Purchases Stock Items Supplier-00000000915 Srini Qedgetech 32525252 2424234 Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000915&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=915
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=915
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=915
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000915
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000915
      - cell "Supplier-00000000915"
      - cell "Srini"
      - cell "Qedgetech"
      - cell "32525252"
      - cell "2424234"
      - cell "Rp 0.00"
      - cell "No"
  - rowgroup:
    - row "Rp 0.00":
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell "Rp 0.00"
      - cell
- text: Page Size
- combobox:
  - option "1"
  - option "2"
  - option "3"
  - option "5"
  - option "7"
  - option "10" [selected]
  - option "15"
  - option "20"
  - option "50"
  - option "100"
  - option "500"
  - option "1000"
- text: Records 1 to 1 of 1
- link "+":
  - /url: a_suppliersadd.php?showdetail=
- button ""
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
- text: Your session will expire in 180 seconds.
- tooltip "Search Panel"
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | import { waitForDebugger } from "node:inspector";
  3   | import { runInThisContext } from "node:vm";
  4   | 
  5   | export class SuppliersPage{
  6   | page:Page
  7   | readonly ClickSuppliersLink:Locator
  8   | readonly ClickAddIcon:Locator
  9   | readonly SupplierNumber:Locator
  10  | readonly SupplierName:Locator 
  11  | readonly Supplieraddress:Locator
  12  | readonly SupplierCity:Locator
  13  | readonly SupplierCountry:Locator
  14  | readonly SupplierContactPerson:Locator
  15  | readonly SupplierPhoneNumber:Locator
  16  | readonly SupplierEmail:Locator
  17  | readonly SupplierMobileNumber:Locator
  18  | readonly SupplierNotes:Locator
  19  | readonly ClickAdddButton:Locator
  20  | readonly ConformOk:Locator
  21  | readonly AlertOk:Locator
  22  | readonly SerchPanel:Locator
  23  | readonly SearchTextBox:Locator
  24  | readonly SerchButton:Locator
  25  | //read only
  26  | private expNumber!:string
  27  | constructor(page:Page)
  28  | {
  29  |     this.page=page
  30  |     this.ClickSuppliersLink=page.getByRole('link',{name:'Suppliers',exact:true})
  31  |     this.ClickAddIcon=page.getByRole('link',{name:'+',exact:true}).first()
  32  |     this.SupplierNumber=page.getByLabel('Supplier Number')
  33  |     this.SupplierName=page.getByPlaceholder('Supplier Name')
  34  |     this.Supplieraddress=page.getByPlaceholder('Address')
  35  |     this.SupplierCity=page.getByPlaceholder('City')
  36  |     this.SupplierCountry=page.getByPlaceholder('Country')
  37  |     this.SupplierContactPerson=page.getByPlaceholder('Contact Person')
  38  |     this.SupplierPhoneNumber=page.getByPlaceholder('Phone Number')
  39  |     this.SupplierEmail=page.getByPlaceholder('Email')
  40  |     this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
  41  |     this.SupplierNotes=page.getByPlaceholder('Notes')
  42  |     this.ClickAdddButton=page.locator('#btnAction')
  43  |     this.ConformOk=page.getByText('OK!')
  44  |     this.AlertOk=page.getByRole('button',{name:'OK',exact:true})
  45  |     this.SerchPanel=page.locator('[data-phrase="SearchBtn"]')
  46  |     this.SearchTextBox=page.getByPlaceholder('Search')
  47  |     this.SerchButton=page.locator('#btnsubmit')
  48  | }
  49  | //Method for navigate to supplier and page
  50  | async NavigateToSupliers()
  51  |  {
  52  |    await this.ClickSuppliersLink.waitFor()
  53  |    await this.ClickSuppliersLink.click()
  54  |   await this.ClickAddIcon.click()
  55  |  }
  56  | 
  57  |  async AddSupplierDetails(sname :string,address:string,city:string,country:string,cperson:string,
  58  |   pnumber:string,email:string,mnumber:string,notes:string)
  59  |   {
  60  |     await this.SupplierNumber.waitFor()
  61  |     this.expNumber=await this.SupplierNumber.inputValue();
  62  |     await this.SupplierName.fill(sname)
  63  |     await this.Supplieraddress.fill(address)
  64  |     await this.SupplierCity.fill(city)
  65  |     await this.SupplierCountry.fill(country)
  66  |     await this.SupplierContactPerson.fill(cperson)
  67  |     await this.SupplierPhoneNumber.fill(pnumber)
  68  |     await this.SupplierEmail.fill(email)
  69  |     await this.SupplierMobileNumber.fill(mnumber)
  70  |     await this.SupplierNotes.fill(notes)
  71  |     await this.ClickAdddButton.click()
  72  |  }
  73  | 
  74  |  async HandleAlerts(){
  75  | 
  76  |   await this.ConformOk.waitFor()
  77  |   await this.ConformOk.click()
  78  |   await this.AlertOk.waitFor()
  79  |   await this.AlertOk.click()
  80  | 
  81  |  }
  82  |  async supplierTable(){
  83  | 
  84  |   if (!await this.SerchButton.isVisible()){
  85  |     await this .SerchButton.click()
  86  |   }
  87  | 
  88  |   await this.SearchTextBox.clear()
  89  |   await this.SearchTextBox.fill(this.expNumber)
  90  |   await this.SerchButton.click()
  91  |  const supplierrow=this.page.locator('el1_a_suppliers_Supplier_Number',
  92  |   {
  93  |     hasText:this.expNumber
  94  |   })
> 95  |   await expect(supplierrow).toBeVisible()
      |                             ^ Error: expect(locator).toBeVisible() failed
  96  |   console.log(`supplier number found in table:${this.expNumber}`)
  97  |    await expect(supplierrow).toContainText(this.expNumber)
  98  |  
  99  | 
  100 |  }
  101 | 
  102 |  
  103 | } 
  104 | 
```