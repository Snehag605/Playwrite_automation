# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Manage >> customer module
- Location: tests\ERPSingleData.spec.ts:25:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('el1_a_customers_Customer_Number').filter({ hasText: 'Customer-00000000670' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('el1_a_customers_Customer_Number').filter({ hasText: 'Customer-00000000670' }) with timeout 5000ms
  - waiting for locator('el1_a_customers_Customer_Number').filter({ hasText: 'Customer-00000000670' })

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
  - listitem: / Customers
  - link "":
    - /url: javascript:void(0);
- button ""
- button ""
- link "":
  - /url: a_customerslist.php?cmd=reset
- link "":
  - /url: a_customerssrch.php
- button ""
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- textbox "Search": Customer-00000000670
- button
- button "Search"
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
  - /url: a_customersadd.php?showdetail=
- button ""
- table:
  - rowgroup:
    - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
      - cell "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
        - table:
          - rowgroup:
            - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
              - columnheader:
                - checkbox
              - columnheader
              - columnheader
              - columnheader
              - columnheader "Customer Number"
              - columnheader "Customer Name"
              - columnheader "Contact Person"
              - columnheader "Phone Number"
              - columnheader "Mobile Number"
              - columnheader "Balance"
- table:
  - rowgroup:
    - row " Sale Now    Sales Customer-00000000670 Srini Qedgetech 32525252 2424234 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000670&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=671
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=671
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=671
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000670
      - cell "Customer-00000000670"
      - cell "Srini"
      - cell "Qedgetech"
      - cell "32525252"
      - cell "2424234"
      - cell "Rp 0.00"
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
      - cell "Rp 0.00"
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
  - /url: a_customersadd.php?showdetail=
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
- text: Your session will expire in 178 seconds.
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test"
  2   | 
  3   | export class CustomerPage{
  4   |     page:Page
  5   |     readonly ClickCustomerLink:Locator
  6   |     readonly ClickAddIcon:Locator
  7   |     readonly CustomerNumber:Locator
  8   |     readonly CustomerName:Locator 
  9   |     readonly Customeraddress:Locator
  10  |     readonly CustomerCity:Locator
  11  |     readonly CustomerCountry:Locator
  12  |     readonly CustomerContactPerson:Locator
  13  |     readonly CustomerPhoneNumber:Locator
  14  |     readonly CustomerEmail:Locator
  15  |     readonly CustomerMobileNumber:Locator
  16  |     readonly CustomerNotes:Locator
  17  |     readonly ClickAdddButton:Locator
  18  |     readonly ConformOk:Locator
  19  |     readonly AlertOk:Locator
  20  |     readonly SerchPanel:Locator
  21  |     readonly SearchTextBox:Locator
  22  |     readonly SerchButton:Locator
  23  |     //read only
  24  |     private cusNumber!:string
  25  |     constructor(page:Page)
  26  |     {
  27  |         this.page=page
  28  |         this.ClickCustomerLink=page.locator('#mi_a_customers')
  29  |         this.ClickAddIcon=page.getByRole('link',{name:'+',exact:true}).first()
  30  |         this.CustomerNumber=page.getByLabel('Customer Number')
  31  |         this.CustomerName=page.getByPlaceholder('Customer Name')
  32  |         this.Customeraddress=page.getByPlaceholder('Address')
  33  |         this.CustomerCity=page.getByPlaceholder('City')
  34  |         this.CustomerCountry=page.getByPlaceholder('Country')
  35  |         this.CustomerContactPerson=page.getByPlaceholder('Contact Person')
  36  |         this.CustomerPhoneNumber=page.getByPlaceholder('Phone Number')
  37  |         this.CustomerEmail=page.getByPlaceholder('Email')
  38  |         this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
  39  |         this.CustomerNotes=page.getByPlaceholder('Notes')
  40  |         this.ClickAdddButton=page.locator('#btnAction')
  41  |         this.ConformOk=page.getByText('OK!')
  42  |         this.AlertOk=page.getByRole('button',{name:'OK',exact:true})
  43  |         this.SerchPanel=page.locator('[data-phrase="SearchBtn"]')
  44  |         this.SearchTextBox=page.locator('#psearch')
  45  |         this.SerchButton=page.locator('#btnsubmit')
  46  |     }
  47  |     //Method for navigate to supplier and page
  48  |     async NavigateToCustomer()
  49  |      {
  50  |        await this.ClickCustomerLink.waitFor()
  51  |        await this.ClickCustomerLink.click()
  52  |        await this.ClickAddIcon.click()
  53  |      }
  54  |     
  55  |      async CustomerDetails(sname :string,address:string,city:string,country:string,cperson:string,
  56  |       pnumber:string,email:string,mnumber:string,notes:string)
  57  |       {
  58  |         await this.CustomerNumber.waitFor()
  59  |         this.cusNumber=await this.CustomerNumber.inputValue();
  60  |         await this.CustomerName.fill(sname)
  61  |         await this.Customeraddress.fill(address)
  62  |         await this.CustomerCity.fill(city)
  63  |         await this.CustomerCountry.fill(country)
  64  |         await this.CustomerContactPerson.fill(cperson)
  65  |         await this.CustomerPhoneNumber.fill(pnumber)
  66  |         await this.CustomerEmail.fill(email)
  67  |         await this.CustomerMobileNumber.fill(mnumber)
  68  |         await this.CustomerNotes.fill(notes)
  69  |         await this.ClickAdddButton.click()
  70  |      }
  71  |     
  72  |      async HandleAlerts(){
  73  |     
  74  |       await this.ConformOk.waitFor()
  75  |       await this.ConformOk.click()
  76  |       await this.AlertOk.waitFor()
  77  |       await this.AlertOk.click()
  78  |     
  79  |      }
  80  |      async customerTable(){
  81  |     
  82  |      await this.SerchPanel.waitFor()
  83  |     if (await this.SerchPanel.isVisible()){
  84  |     await this .SerchPanel.click()
  85  |   }
  86  |     await this.SearchTextBox.waitFor()
  87  |     await this.SearchTextBox.clear()
  88  |     await this.SearchTextBox.fill(this.cusNumber)
  89  |     await this.SerchButton.click()
  90  |      const supplierrow=this.page.locator('el1_a_customers_Customer_Number',
  91  |       {
  92  |         hasText:this.cusNumber
  93  |       })
> 94  |       await expect(supplierrow).toBeVisible()
      |                                 ^ Error: expect(locator).toBeVisible() failed
  95  |       console.log(`supplier number found in table:${this.cusNumber}`)
  96  |        await expect(supplierrow).toContainText(this.cusNumber)
  97  |      
  98  |     
  99  |      }
  100 | }
```