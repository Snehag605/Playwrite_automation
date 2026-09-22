# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Manage >> customer module
- Location: tests\ERPSingleData.spec.ts:25:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByText('OK') resolved to 6 elements:
    1) <button class="ajs-button btn btn-primary">OK</button> aka getByRole('button', { name: 'OK' })
    2) <button type="button" aria-hidden="true" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#msTACDialog').getByText('OK')
    3) <button type="button" aria-hidden="true" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#msAboutDialog').getByText('OK')
    4) <button type="button" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka getByText('OK').nth(3)
    5) <button type="button" class="btn btn-primary ewButton">OK</button> aka locator('#ewPrompt').getByText('OK')
    6) <button type="button" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#ewTimer').getByText('OK')

Call log:
  - waiting for getByText('OK') to be visible

```

# Page snapshot

```yaml
- generic [ref=f4e1]:
  - generic [ref=f4e2]:
    - generic [ref=f4e3]:
      - link "Stock Accounting" [ref=f4e6] [cursor=pointer]:
        - /url: .
      - strong [ref=f4e9]: Stock Accounting
      - generic [ref=f4e12]:
        - text: "User Name:"
        - strong [ref=f4e13]: Administrator
        - text: "|"
        - link "Logout" [active] [ref=f4e14] [cursor=pointer]:
          - /url: javascript:void(0);
    - text:                             
    - generic [ref=f4e17]:
      - list [ref=f4e18]:
        - listitem [ref=f4e19]:
          - link "Dashboard" [ref=f4e20] [cursor=pointer]:
            - /url: dashboard.php
        - listitem [ref=f4e21]:
          - link "Stock Items" [ref=f4e22] [cursor=pointer]:
            - /url: a_stock_itemslist.php?cmd=resetall
        - listitem [ref=f4e24]:
          - link "Suppliers" [ref=f4e25] [cursor=pointer]:
            - /url: a_supplierslist.php
        - listitem [ref=f4e26]:
          - link "Purchases" [ref=f4e27] [cursor=pointer]:
            - /url: a_purchaseslist.php?cmd=resetall
        - listitem [ref=f4e28]:
          - link "Customers" [ref=f4e29] [cursor=pointer]:
            - /url: a_customerslist.php
        - listitem [ref=f4e30]:
          - link "Sales" [ref=f4e31] [cursor=pointer]:
            - /url: a_saleslist.php?cmd=resetall
        - listitem [ref=f4e32]:
          - link "Outstandings" [ref=f4e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f4e35]:
          - link "Administrator" [ref=f4e36] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f4e38]:
          - link " Help (Categories)" [ref=f4e39] [cursor=pointer]:
            - /url: help_categorieslist.php
            - generic [ref=f4e40]: 
            - text: Help (Categories)
          - text:   
        - listitem [ref=f4e42]:
          - link " Settings" [ref=f4e43] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f4e44]: 
            - text: Settings
          - text:          
        - listitem [ref=f4e46]:
          - link " Logout" [ref=f4e47] [cursor=pointer]:
            - /url: logout.php
            - generic [ref=f4e48]: 
            - text: Logout
      - list
    - generic [ref=f4e51]:
      - generic [ref=f4e52]:
        - list [ref=f4e53]:
          - listitem [ref=f4e54]:
            - link "" [ref=f4e55] [cursor=pointer]:
              - /url: index.php
          - listitem [ref=f4e57]: / Customers
          - link "" [ref=f4e58] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=f4e61]:
          - button "" [ref=f4e62] [cursor=pointer]
          - text:       
        - generic [ref=f4e66]:
          - button "" [ref=f4e67] [cursor=pointer]
          - link "" [ref=f4e69] [cursor=pointer]:
            - /url: a_customerssrch.php
        - button "" [ref=f4e73] [cursor=pointer]
        - generic [ref=f4e77]:
          - generic [ref=f4e78] [cursor=pointer]:
            - radio "en" [checked]
            - text: en
          - generic [ref=f4e79] [cursor=pointer]:
            - radio "id"
            - text: id
      - generic [ref=f4e81]:
        - generic [ref=f4e82]:
          - generic:
            - generic [ref=f4e83]:
              - generic [ref=f4e84]: Page Size
              - combobox [ref=f4e85]:
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
            - generic [ref=f4e86]:
              - generic [ref=f4e87]: Page
              - generic [ref=f4e89]:
                - generic [ref=f4e90]:
                  - generic: 
                  - generic: 
                - textbox [ref=f4e91]: "1"
                - generic [ref=f4e92]:
                  - link "" [ref=f4e93] [cursor=pointer]:
                    - /url: a_customerslist.php?start=11
                  - link "" [ref=f4e95] [cursor=pointer]:
                    - /url: a_customerslist.php?start=661
              - generic [ref=f4e97]: of 67
            - generic [ref=f4e98]: Records 1 to 10 of 669
          - generic [ref=f4e100]:
            - link "+" [ref=f4e103] [cursor=pointer]:
              - /url: a_customersadd.php?showdetail=
            - generic [ref=f4e106]:
              - button "" [ref=f4e107] [cursor=pointer]
              - text:  
        - generic [ref=f4e112]:
          - table [ref=f4e114]:
            - rowgroup [ref=f4e115]:
              - row [ref=f4e116]:
                - cell [ref=f4e117]:
                  - table [ref=f4e118]:
                    - rowgroup [ref=f4e119]:
                      - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance" [ref=f4e120]:
                        - columnheader [ref=f4e121]:
                          - checkbox [ref=f4e124]
                        - columnheader [ref=f4e125]
                        - columnheader [ref=f4e127]
                        - columnheader [ref=f4e129]
                        - columnheader "Customer Number" [ref=f4e131]
                        - columnheader "Customer Name" [ref=f4e136]
                        - columnheader "Contact Person" [ref=f4e141]
                        - columnheader "Phone Number" [ref=f4e146]
                        - columnheader "Mobile Number" [ref=f4e151]
                        - columnheader "Balance" [ref=f4e156]
          - table [ref=f4e162]:
            - rowgroup [ref=f4e163]:
              - row [ref=f4e164]:
                - cell [ref=f4e165]:
                  - checkbox [ref=f4e168]
                - cell "" [ref=f4e169]:
                  - generic [ref=f4e171]:
                    - generic [ref=f4e172] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e173]:
                  - generic [ref=f4e175]:
                    - link "Sale Now" [ref=f4e176] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000001&showdetail=a_sales_detail
                    - link "" [ref=f4e178] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=1
                    - link "" [ref=f4e180] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=1
                    - link "" [ref=f4e182] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=1
                - cell [ref=f4e184]:
                  - generic [ref=f4e186]:
                    - link "Sales 3" [ref=f4e188] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000001
                      - text: Sales
                      - generic [ref=f4e189]: "3"
                    - text: 
                - cell "Customer-00000000001" [ref=f4e190]
                - cell "First Customer" [ref=f4e193]
                - cell "CP First Customer" [ref=f4e196]
                - cell "021323235232" [ref=f4e199]
                - cell "08123242490" [ref=f4e202]
                - cell "Rp 720,000.00" [ref=f4e205]
              - row [ref=f4e208]:
                - cell [ref=f4e209]:
                  - checkbox [ref=f4e212]
                - cell "" [ref=f4e213]:
                  - generic [ref=f4e215]:
                    - generic [ref=f4e216] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e217]:
                  - generic [ref=f4e219]:
                    - link "Sale Now" [ref=f4e220] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000002&showdetail=a_sales_detail
                    - link "" [ref=f4e222] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=2
                    - link "" [ref=f4e224] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=2
                    - link "" [ref=f4e226] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=2
                - cell [ref=f4e228]:
                  - generic [ref=f4e230]:
                    - link "Sales 2" [ref=f4e232] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000002
                      - text: Sales
                      - generic [ref=f4e233]: "2"
                    - text: 
                - cell "Customer-00000000002" [ref=f4e234]
                - cell "Second Customer" [ref=f4e237]
                - cell "CP Second Customer" [ref=f4e240]
                - cell "0214982008" [ref=f4e243]
                - cell "08124242422" [ref=f4e246]
                - cell "Rp 150,000.00" [ref=f4e249]
              - row [ref=f4e252]:
                - cell [ref=f4e253]:
                  - checkbox [ref=f4e256]
                - cell "" [ref=f4e257]:
                  - generic [ref=f4e259]:
                    - generic [ref=f4e260] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e261]:
                  - generic [ref=f4e263]:
                    - link "Sale Now" [ref=f4e264] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000003&showdetail=a_sales_detail
                    - link "" [ref=f4e266] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=3
                    - link "" [ref=f4e268] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=3
                    - link "" [ref=f4e270] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=3
                - cell [ref=f4e272]:
                  - generic [ref=f4e274]:
                    - link "Sales 1" [ref=f4e276] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000003
                      - text: Sales
                      - generic [ref=f4e277]: "1"
                    - text: 
                - cell "Customer-00000000003" [ref=f4e278]
                - cell "Third Customer" [ref=f4e281]
                - cell "CP Third Customer" [ref=f4e284]
                - cell "0215800823" [ref=f4e287]
                - cell "0812482092300" [ref=f4e290]
                - cell "Rp 280,000.00" [ref=f4e293]
              - row [ref=f4e296]:
                - cell [ref=f4e297]:
                  - checkbox [ref=f4e300]
                - cell "" [ref=f4e301]:
                  - generic [ref=f4e303]:
                    - generic [ref=f4e304] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e305]:
                  - generic [ref=f4e307]:
                    - link "Sale Now" [ref=f4e308] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000004&showdetail=a_sales_detail
                    - link "" [ref=f4e310] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=4
                    - link "" [ref=f4e312] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=4
                    - link "" [ref=f4e314] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=4
                - cell [ref=f4e316]:
                  - generic [ref=f4e318]:
                    - link "Sales 2" [ref=f4e320] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000004
                      - text: Sales
                      - generic [ref=f4e321]: "2"
                    - text: 
                - cell "Customer-00000000004" [ref=f4e322]
                - cell "Fourth Customer" [ref=f4e325]
                - cell "CP Fourth Customer" [ref=f4e328]
                - cell "02183204800" [ref=f4e331]
                - cell "081282084902" [ref=f4e334]
                - cell "Rp 900,000.00" [ref=f4e337]
              - row [ref=f4e340]:
                - cell [ref=f4e341]:
                  - checkbox [ref=f4e344]
                - cell "" [ref=f4e345]:
                  - generic [ref=f4e347]:
                    - generic [ref=f4e348] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e349]:
                  - generic [ref=f4e351]:
                    - link "Sale Now" [ref=f4e352] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000005&showdetail=a_sales_detail
                    - link "" [ref=f4e354] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=5
                    - link "" [ref=f4e356] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=5
                    - link "" [ref=f4e358] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=5
                - cell [ref=f4e360]:
                  - generic [ref=f4e362]:
                    - link "Sales" [ref=f4e364] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000005
                    - text: 
                - cell "Customer-00000000005" [ref=f4e365]
                - cell "Test123" [ref=f4e368]
                - cell "Ranga" [ref=f4e371]
                - cell "98765" [ref=f4e374]
                - cell "76543" [ref=f4e377]
                - cell "Rp 0.00" [ref=f4e380]
              - row [ref=f4e383]:
                - cell [ref=f4e384]:
                  - checkbox [ref=f4e387]
                - cell "" [ref=f4e388]:
                  - generic [ref=f4e390]:
                    - generic [ref=f4e391] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e392]:
                  - generic [ref=f4e394]:
                    - link "Sale Now" [ref=f4e395] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000006&showdetail=a_sales_detail
                    - link "" [ref=f4e397] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=6
                    - link "" [ref=f4e399] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=6
                    - link "" [ref=f4e401] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=6
                - cell [ref=f4e403]:
                  - generic [ref=f4e405]:
                    - link "Sales 1" [ref=f4e407] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000006
                      - text: Sales
                      - generic [ref=f4e408]: "1"
                    - text: 
                - cell "Customer-00000000006" [ref=f4e409]
                - cell "Test123" [ref=f4e412]
                - cell "Ranga" [ref=f4e415]
                - cell "98765" [ref=f4e418]
                - cell "76543" [ref=f4e421]
                - cell "Rp 109,000.00" [ref=f4e424]
              - row [ref=f4e427]:
                - cell [ref=f4e428]:
                  - checkbox [ref=f4e431]
                - cell "" [ref=f4e432]:
                  - generic [ref=f4e434]:
                    - generic [ref=f4e435] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e436]:
                  - generic [ref=f4e438]:
                    - link "Sale Now" [ref=f4e439] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000007&showdetail=a_sales_detail
                    - link "" [ref=f4e441] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=7
                    - link "" [ref=f4e443] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=7
                    - link "" [ref=f4e445] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=7
                - cell [ref=f4e447]:
                  - generic [ref=f4e449]:
                    - link "Sales 1" [ref=f4e451] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000007
                      - text: Sales
                      - generic [ref=f4e452]: "1"
                    - text: 
                - cell "Customer-00000000007" [ref=f4e453]
                - cell "Test123" [ref=f4e456]
                - cell "Ranga" [ref=f4e459]
                - cell "98765" [ref=f4e462]
                - cell "76543" [ref=f4e465]
                - cell "Rp 2,200.00" [ref=f4e468]
              - row [ref=f4e471]:
                - cell [ref=f4e472]:
                  - checkbox [ref=f4e475]
                - cell "" [ref=f4e476]:
                  - generic [ref=f4e478]:
                    - generic [ref=f4e479] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e480]:
                  - generic [ref=f4e482]:
                    - link "Sale Now" [ref=f4e483] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000008&showdetail=a_sales_detail
                    - link "" [ref=f4e485] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=8
                    - link "" [ref=f4e487] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=8
                    - link "" [ref=f4e489] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=8
                - cell [ref=f4e491]:
                  - generic [ref=f4e493]:
                    - link "Sales" [ref=f4e495] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000008
                    - text: 
                - cell "Customer-00000000008" [ref=f4e496]
                - cell "Kumar" [ref=f4e499]
                - cell "Mahesh" [ref=f4e502]
                - cell "99999999" [ref=f4e505]
                - cell "88888888" [ref=f4e508]
                - cell "Rp 0.00" [ref=f4e511]
              - row [ref=f4e514]:
                - cell [ref=f4e515]:
                  - checkbox [ref=f4e518]
                - cell "" [ref=f4e519]:
                  - generic [ref=f4e521]:
                    - generic [ref=f4e522] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e523]:
                  - generic [ref=f4e525]:
                    - link "Sale Now" [ref=f4e526] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000009&showdetail=a_sales_detail
                    - link "" [ref=f4e528] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=9
                    - link "" [ref=f4e530] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=9
                    - link "" [ref=f4e532] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=9
                - cell [ref=f4e534]:
                  - generic [ref=f4e536]:
                    - link "Sales 1" [ref=f4e538] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000009
                      - text: Sales
                      - generic [ref=f4e539]: "1"
                    - text: 
                - cell "Customer-00000000009" [ref=f4e540]
                - cell "Test123" [ref=f4e543]
                - cell "Ranga" [ref=f4e546]
                - cell "98765" [ref=f4e549]
                - cell "76543" [ref=f4e552]
                - cell "Rp 108,890.00" [ref=f4e555]
              - row [ref=f4e558]:
                - cell [ref=f4e559]:
                  - checkbox [ref=f4e562]
                - cell "" [ref=f4e563]:
                  - generic [ref=f4e565]:
                    - generic [ref=f4e566] [cursor=pointer]: 
                    - text: 
                - cell [ref=f4e567]:
                  - generic [ref=f4e569]:
                    - link "Sale Now" [ref=f4e570] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000010&showdetail=a_sales_detail
                    - link "" [ref=f4e572] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=10
                    - link "" [ref=f4e574] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=10
                    - link "" [ref=f4e576] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=10
                - cell [ref=f4e578]:
                  - generic [ref=f4e580]:
                    - link "Sales" [ref=f4e582] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000010
                    - text: 
                - cell "Customer-00000000010" [ref=f4e583]
                - cell "Test123" [ref=f4e586]
                - cell "Ranga" [ref=f4e589]
                - cell "98765" [ref=f4e592]
                - cell "76543" [ref=f4e595]
                - cell "Rp 0.00" [ref=f4e598]
            - rowgroup [ref=f4e601]:
              - row "Rp 2,270,090.00" [ref=f4e602]:
                - cell [ref=f4e603]
                - cell [ref=f4e605]
                - cell [ref=f4e607]
                - cell [ref=f4e609]
                - cell [ref=f4e611]
                - cell [ref=f4e613]
                - cell [ref=f4e615]
                - cell [ref=f4e617]
                - cell [ref=f4e619]
                - cell "Rp 2,270,090.00" [ref=f4e621]:
                  - generic [ref=f4e623]:
                    - text: ":"
                    - generic [ref=f4e624]: Rp 2,270,090.00
        - generic [ref=f4e625]:
          - generic:
            - generic [ref=f4e626]:
              - generic [ref=f4e627]: Page Size
              - combobox [ref=f4e628]:
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
            - generic [ref=f4e629]:
              - generic [ref=f4e630]: Page
              - generic [ref=f4e632]:
                - generic [ref=f4e633]:
                  - generic: 
                  - generic: 
                - textbox [ref=f4e634]: "1"
                - generic [ref=f4e635]:
                  - link "" [ref=f4e636] [cursor=pointer]:
                    - /url: a_customerslist.php?start=11
                  - link "" [ref=f4e638] [cursor=pointer]:
                    - /url: a_customerslist.php?start=661
              - generic [ref=f4e640]: of 67
            - generic [ref=f4e641]: Records 1 to 10 of 669
          - generic [ref=f4e643]:
            - link "+" [ref=f4e646] [cursor=pointer]:
              - /url: a_customersadd.php?showdetail=
            - generic [ref=f4e649]:
              - button "" [ref=f4e650] [cursor=pointer]
              - text:  
    - generic [ref=f4e655]:
      - text: ©2015
      - link "Masino Sinaga" [ref=f4e656] [cursor=pointer]:
        - /url: http://www.ilovephpmaker.com
      - text: . All rights reserved. |
      - link "Terms and Conditions" [ref=f4e657] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "About Us" [ref=f4e658] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "Back to Top" [ref=f4e659] [cursor=pointer]:
        - /url: javascript:void(0);
  - generic [ref=f4e660]:
    - button [ref=f4e661] [cursor=pointer]
    - generic [ref=f4e662]:
      - button [ref=f4e663] [cursor=pointer]
      - button [ref=f4e664] [cursor=pointer]
    - generic [ref=f4e665]: Alert
    - generic [ref=f4e666]: Add succeeded
    - button "OK" [ref=f4e672] [cursor=pointer]
    - button [ref=f4e673] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test"
  2  | 
  3  | export class CustomerPage{
  4  |     page:Page
  5  |     readonly ClickCustomerLink:Locator
  6  |     readonly ClickAddIcon:Locator
  7  |     readonly CustomerNumber:Locator
  8  |     readonly CustomerName:Locator 
  9  |     readonly Customeraddress:Locator
  10 |     readonly CustomerCity:Locator
  11 |     readonly CustomerCountry:Locator
  12 |     readonly CustomerContactPerson:Locator
  13 |     readonly CustomerPhoneNumber:Locator
  14 |     readonly CustomerEmail:Locator
  15 |     readonly CustomerMobileNumber:Locator
  16 |     readonly CustomerNotes:Locator
  17 |     readonly ClickAdddButton:Locator
  18 |     readonly ConformOk:Locator
  19 |     readonly AlertOk:Locator
  20 |     readonly SerchPanel:Locator
  21 |     readonly SearchTextBox:Locator
  22 |     readonly SerchButton:Locator
  23 |     //read only
  24 |     private cusNumber!:string
  25 |     constructor(page:Page)
  26 |     {
  27 |         this.page=page
  28 |         this.ClickCustomerLink=page.locator('#mi_a_customers')
  29 |         this.ClickAddIcon=page.getByRole('link',{name:'+',exact:true}).first()
  30 |         this.CustomerNumber=page.getByLabel('Customer Number')
  31 |         this.CustomerName=page.getByPlaceholder('Customer Name')
  32 |         this.Customeraddress=page.getByPlaceholder('Address')
  33 |         this.CustomerCity=page.getByPlaceholder('City')
  34 |         this.CustomerCountry=page.getByPlaceholder('Country')
  35 |         this.CustomerContactPerson=page.getByPlaceholder('Contact Person')
  36 |         this.CustomerPhoneNumber=page.getByPlaceholder('Phone Number')
  37 |         this.CustomerEmail=page.getByPlaceholder('Email')
  38 |         this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
  39 |         this.CustomerNotes=page.getByPlaceholder('Notes')
  40 |         this.ClickAdddButton=page.locator('#btnAction')
  41 |         this.ConformOk=page.getByText('OK!')
  42 |         this.AlertOk=page.getByText('OK')
  43 |         this.SerchPanel=page.locator('[data-phrase="SearchBtn"]')
  44 |         this.SearchTextBox=page.getByPlaceholder('Search')
  45 |         this.SerchButton=page.locator('#btnsubmit')
  46 |     }
  47 |     //Method for navigate to supplier and page
  48 |     async NavigateToCustomer()
  49 |      {
  50 |        await this.ClickCustomerLink.waitFor()
  51 |        await this.ClickCustomerLink.click()
  52 |        await this.ClickAddIcon.click()
  53 |      }
  54 |     
  55 |      async CustomerDetails(sname :string,address:string,city:string,country:string,cperson:string,
  56 |       pnumber:string,email:string,mnumber:string,notes:string)
  57 |       {
  58 |         await this.CustomerNumber.waitFor()
  59 |         this.cusNumber=await this.CustomerNumber.inputValue();
  60 |         await this.CustomerName.fill(sname)
  61 |         await this.Customeraddress.fill(address)
  62 |         await this.CustomerCity.fill(city)
  63 |         await this.CustomerCountry.fill(country)
  64 |         await this.CustomerContactPerson.fill(cperson)
  65 |         await this.CustomerPhoneNumber.fill(pnumber)
  66 |         await this.CustomerEmail.fill(email)
  67 |         await this.CustomerMobileNumber.fill(mnumber)
  68 |         await this.CustomerNotes.fill(notes)
  69 |         await this.ClickAdddButton.click()
  70 |      }
  71 |     
  72 |      async HandleAlerts(){
  73 |     
  74 |       await this.ConformOk.waitFor()
  75 |       await this.ConformOk.click()
> 76 |       await this.AlertOk.waitFor()
     |                          ^ Error: locator.waitFor: Error: strict mode violation: getByText('OK') resolved to 6 elements:
  77 |       await this.AlertOk.click()
  78 |     
  79 |      }
  80 |      async customerTable(){
  81 |     
  82 |       if (!await this.SerchButton.isVisible()){
  83 |         await this .SerchButton.click()
  84 |       }
  85 |     
  86 |       await this.SearchTextBox.clear()
  87 |       await this.SearchTextBox.fill(this.cusNumber)
  88 |       await this.SerchButton.click()
  89 |      const supplierrow=this.page.locator('el1_a_customers_Customer_Number',
  90 |       {
  91 |         hasText:this.cusNumber
  92 |       })
  93 |       await expect(supplierrow).toBeVisible()
  94 |       console.log(`supplier number found in table:${this.cusNumber}`)
  95 |        await expect(supplierrow).toContainText(this.cusNumber)
  96 |      
  97 |     
  98 |      }
  99 | }
```