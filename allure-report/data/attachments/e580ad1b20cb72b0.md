# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Manage >> customer module
- Location: tests\ERPSingleData.spec.ts:25:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('btnAction')

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - generic [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "Stock Accounting" [ref=f2e6] [cursor=pointer]:
        - /url: .
      - strong [ref=f2e9]: Stock Accounting
      - generic [ref=f2e12]:
        - text: "User Name:"
        - strong [ref=f2e13]: Administrator
        - text: "|"
        - link "Logout" [active] [ref=f2e14] [cursor=pointer]:
          - /url: javascript:void(0);
    - text:                             
    - generic [ref=f2e17]:
      - list [ref=f2e18]:
        - listitem [ref=f2e19]:
          - link "Dashboard" [ref=f2e20] [cursor=pointer]:
            - /url: dashboard.php
        - listitem [ref=f2e21]:
          - link "Stock Items" [ref=f2e22] [cursor=pointer]:
            - /url: a_stock_itemslist.php?cmd=resetall
        - listitem [ref=f2e24]:
          - link "Suppliers" [ref=f2e25] [cursor=pointer]:
            - /url: a_supplierslist.php
        - listitem [ref=f2e26]:
          - link "Purchases" [ref=f2e27] [cursor=pointer]:
            - /url: a_purchaseslist.php?cmd=resetall
        - listitem [ref=f2e28]:
          - link "Customers" [ref=f2e29] [cursor=pointer]:
            - /url: a_customerslist.php
        - listitem [ref=f2e30]:
          - link "Sales" [ref=f2e31] [cursor=pointer]:
            - /url: a_saleslist.php?cmd=resetall
        - listitem [ref=f2e32]:
          - link "Outstandings" [ref=f2e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e35]:
          - link "Administrator" [ref=f2e36] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e38]:
          - link " Help (Categories)" [ref=f2e39] [cursor=pointer]:
            - /url: help_categorieslist.php
            - generic [ref=f2e40]: 
            - text: Help (Categories)
          - text:   
        - listitem [ref=f2e42]:
          - link " Settings" [ref=f2e43] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f2e44]: 
            - text: Settings
          - text:          
        - listitem [ref=f2e46]:
          - link " Logout" [ref=f2e47] [cursor=pointer]:
            - /url: logout.php
            - generic [ref=f2e48]: 
            - text: Logout
      - list
    - generic [ref=f2e51]:
      - generic [ref=f2e52]:
        - list [ref=f2e53]:
          - listitem [ref=f2e54]:
            - link "" [ref=f2e55] [cursor=pointer]:
              - /url: index.php
          - listitem [ref=f2e57]: / Customers
          - link "" [ref=f2e58] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=f2e61]:
          - button "" [ref=f2e62] [cursor=pointer]
          - text:       
        - generic [ref=f2e66]:
          - button "" [ref=f2e67] [cursor=pointer]
          - link "" [ref=f2e69] [cursor=pointer]:
            - /url: a_customerssrch.php
        - button "" [ref=f2e73] [cursor=pointer]
        - generic [ref=f2e77]:
          - generic [ref=f2e78] [cursor=pointer]:
            - radio "en" [checked]
            - text: en
          - generic [ref=f2e79] [cursor=pointer]:
            - radio "id"
            - text: id
      - generic [ref=f2e81]:
        - generic [ref=f2e82]:
          - generic:
            - generic [ref=f2e83]:
              - generic [ref=f2e84]: Page Size
              - combobox [ref=f2e85]:
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
            - generic [ref=f2e86]:
              - generic [ref=f2e87]: Page
              - generic [ref=f2e89]:
                - generic [ref=f2e90]:
                  - generic: 
                  - generic: 
                - textbox [ref=f2e91]: "1"
                - generic [ref=f2e92]:
                  - link "" [ref=f2e93] [cursor=pointer]:
                    - /url: a_customerslist.php?start=11
                  - link "" [ref=f2e95] [cursor=pointer]:
                    - /url: a_customerslist.php?start=661
              - generic [ref=f2e97]: of 67
            - generic [ref=f2e98]: Records 1 to 10 of 668
          - generic [ref=f2e100]:
            - link "+" [ref=f2e103] [cursor=pointer]:
              - /url: a_customersadd.php?showdetail=
            - generic [ref=f2e106]:
              - button "" [ref=f2e107] [cursor=pointer]
              - text:  
        - generic [ref=f2e112]:
          - table [ref=f2e114]:
            - rowgroup [ref=f2e115]:
              - row [ref=f2e116]:
                - cell [ref=f2e117]:
                  - table [ref=f2e118]:
                    - rowgroup [ref=f2e119]:
                      - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance" [ref=f2e120]:
                        - columnheader [ref=f2e121]:
                          - checkbox [ref=f2e124]
                        - columnheader [ref=f2e125]
                        - columnheader [ref=f2e127]
                        - columnheader [ref=f2e129]
                        - columnheader "Customer Number" [ref=f2e131]
                        - columnheader "Customer Name" [ref=f2e136]
                        - columnheader "Contact Person" [ref=f2e141]
                        - columnheader "Phone Number" [ref=f2e146]
                        - columnheader "Mobile Number" [ref=f2e151]
                        - columnheader "Balance" [ref=f2e156]
          - table [ref=f2e162]:
            - rowgroup [ref=f2e163]:
              - row [ref=f2e164]:
                - cell [ref=f2e165]:
                  - checkbox [ref=f2e168]
                - cell "" [ref=f2e169]:
                  - generic [ref=f2e171]:
                    - generic [ref=f2e172] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e173]:
                  - generic [ref=f2e175]:
                    - link "Sale Now" [ref=f2e176] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000001&showdetail=a_sales_detail
                    - link "" [ref=f2e178] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=1
                    - link "" [ref=f2e180] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=1
                    - link "" [ref=f2e182] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=1
                - cell [ref=f2e184]:
                  - generic [ref=f2e186]:
                    - link "Sales 3" [ref=f2e188] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000001
                      - text: Sales
                      - generic [ref=f2e189]: "3"
                    - text: 
                - cell "Customer-00000000001" [ref=f2e190]
                - cell "First Customer" [ref=f2e193]
                - cell "CP First Customer" [ref=f2e196]
                - cell "021323235232" [ref=f2e199]
                - cell "08123242490" [ref=f2e202]
                - cell "Rp 720,000.00" [ref=f2e205]
              - row [ref=f2e208]:
                - cell [ref=f2e209]:
                  - checkbox [ref=f2e212]
                - cell "" [ref=f2e213]:
                  - generic [ref=f2e215]:
                    - generic [ref=f2e216] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e217]:
                  - generic [ref=f2e219]:
                    - link "Sale Now" [ref=f2e220] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000002&showdetail=a_sales_detail
                    - link "" [ref=f2e222] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=2
                    - link "" [ref=f2e224] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=2
                    - link "" [ref=f2e226] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=2
                - cell [ref=f2e228]:
                  - generic [ref=f2e230]:
                    - link "Sales 2" [ref=f2e232] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000002
                      - text: Sales
                      - generic [ref=f2e233]: "2"
                    - text: 
                - cell "Customer-00000000002" [ref=f2e234]
                - cell "Second Customer" [ref=f2e237]
                - cell "CP Second Customer" [ref=f2e240]
                - cell "0214982008" [ref=f2e243]
                - cell "08124242422" [ref=f2e246]
                - cell "Rp 150,000.00" [ref=f2e249]
              - row [ref=f2e252]:
                - cell [ref=f2e253]:
                  - checkbox [ref=f2e256]
                - cell "" [ref=f2e257]:
                  - generic [ref=f2e259]:
                    - generic [ref=f2e260] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e261]:
                  - generic [ref=f2e263]:
                    - link "Sale Now" [ref=f2e264] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000003&showdetail=a_sales_detail
                    - link "" [ref=f2e266] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=3
                    - link "" [ref=f2e268] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=3
                    - link "" [ref=f2e270] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=3
                - cell [ref=f2e272]:
                  - generic [ref=f2e274]:
                    - link "Sales 1" [ref=f2e276] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000003
                      - text: Sales
                      - generic [ref=f2e277]: "1"
                    - text: 
                - cell "Customer-00000000003" [ref=f2e278]
                - cell "Third Customer" [ref=f2e281]
                - cell "CP Third Customer" [ref=f2e284]
                - cell "0215800823" [ref=f2e287]
                - cell "0812482092300" [ref=f2e290]
                - cell "Rp 280,000.00" [ref=f2e293]
              - row [ref=f2e296]:
                - cell [ref=f2e297]:
                  - checkbox [ref=f2e300]
                - cell "" [ref=f2e301]:
                  - generic [ref=f2e303]:
                    - generic [ref=f2e304] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e305]:
                  - generic [ref=f2e307]:
                    - link "Sale Now" [ref=f2e308] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000004&showdetail=a_sales_detail
                    - link "" [ref=f2e310] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=4
                    - link "" [ref=f2e312] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=4
                    - link "" [ref=f2e314] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=4
                - cell [ref=f2e316]:
                  - generic [ref=f2e318]:
                    - link "Sales 2" [ref=f2e320] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000004
                      - text: Sales
                      - generic [ref=f2e321]: "2"
                    - text: 
                - cell "Customer-00000000004" [ref=f2e322]
                - cell "Fourth Customer" [ref=f2e325]
                - cell "CP Fourth Customer" [ref=f2e328]
                - cell "02183204800" [ref=f2e331]
                - cell "081282084902" [ref=f2e334]
                - cell "Rp 900,000.00" [ref=f2e337]
              - row [ref=f2e340]:
                - cell [ref=f2e341]:
                  - checkbox [ref=f2e344]
                - cell "" [ref=f2e345]:
                  - generic [ref=f2e347]:
                    - generic [ref=f2e348] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e349]:
                  - generic [ref=f2e351]:
                    - link "Sale Now" [ref=f2e352] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000005&showdetail=a_sales_detail
                    - link "" [ref=f2e354] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=5
                    - link "" [ref=f2e356] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=5
                    - link "" [ref=f2e358] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=5
                - cell [ref=f2e360]:
                  - generic [ref=f2e362]:
                    - link "Sales" [ref=f2e364] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000005
                    - text: 
                - cell "Customer-00000000005" [ref=f2e365]
                - cell "Test123" [ref=f2e368]
                - cell "Ranga" [ref=f2e371]
                - cell "98765" [ref=f2e374]
                - cell "76543" [ref=f2e377]
                - cell "Rp 0.00" [ref=f2e380]
              - row [ref=f2e383]:
                - cell [ref=f2e384]:
                  - checkbox [ref=f2e387]
                - cell "" [ref=f2e388]:
                  - generic [ref=f2e390]:
                    - generic [ref=f2e391] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e392]:
                  - generic [ref=f2e394]:
                    - link "Sale Now" [ref=f2e395] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000006&showdetail=a_sales_detail
                    - link "" [ref=f2e397] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=6
                    - link "" [ref=f2e399] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=6
                    - link "" [ref=f2e401] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=6
                - cell [ref=f2e403]:
                  - generic [ref=f2e405]:
                    - link "Sales 1" [ref=f2e407] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000006
                      - text: Sales
                      - generic [ref=f2e408]: "1"
                    - text: 
                - cell "Customer-00000000006" [ref=f2e409]
                - cell "Test123" [ref=f2e412]
                - cell "Ranga" [ref=f2e415]
                - cell "98765" [ref=f2e418]
                - cell "76543" [ref=f2e421]
                - cell "Rp 109,000.00" [ref=f2e424]
              - row [ref=f2e427]:
                - cell [ref=f2e428]:
                  - checkbox [ref=f2e431]
                - cell "" [ref=f2e432]:
                  - generic [ref=f2e434]:
                    - generic [ref=f2e435] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e436]:
                  - generic [ref=f2e438]:
                    - link "Sale Now" [ref=f2e439] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000007&showdetail=a_sales_detail
                    - link "" [ref=f2e441] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=7
                    - link "" [ref=f2e443] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=7
                    - link "" [ref=f2e445] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=7
                - cell [ref=f2e447]:
                  - generic [ref=f2e449]:
                    - link "Sales 1" [ref=f2e451] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000007
                      - text: Sales
                      - generic [ref=f2e452]: "1"
                    - text: 
                - cell "Customer-00000000007" [ref=f2e453]
                - cell "Test123" [ref=f2e456]
                - cell "Ranga" [ref=f2e459]
                - cell "98765" [ref=f2e462]
                - cell "76543" [ref=f2e465]
                - cell "Rp 2,200.00" [ref=f2e468]
              - row [ref=f2e471]:
                - cell [ref=f2e472]:
                  - checkbox [ref=f2e475]
                - cell "" [ref=f2e476]:
                  - generic [ref=f2e478]:
                    - generic [ref=f2e479] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e480]:
                  - generic [ref=f2e482]:
                    - link "Sale Now" [ref=f2e483] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000008&showdetail=a_sales_detail
                    - link "" [ref=f2e485] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=8
                    - link "" [ref=f2e487] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=8
                    - link "" [ref=f2e489] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=8
                - cell [ref=f2e491]:
                  - generic [ref=f2e493]:
                    - link "Sales" [ref=f2e495] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000008
                    - text: 
                - cell "Customer-00000000008" [ref=f2e496]
                - cell "Kumar" [ref=f2e499]
                - cell "Mahesh" [ref=f2e502]
                - cell "99999999" [ref=f2e505]
                - cell "88888888" [ref=f2e508]
                - cell "Rp 0.00" [ref=f2e511]
              - row [ref=f2e514]:
                - cell [ref=f2e515]:
                  - checkbox [ref=f2e518]
                - cell "" [ref=f2e519]:
                  - generic [ref=f2e521]:
                    - generic [ref=f2e522] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e523]:
                  - generic [ref=f2e525]:
                    - link "Sale Now" [ref=f2e526] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000009&showdetail=a_sales_detail
                    - link "" [ref=f2e528] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=9
                    - link "" [ref=f2e530] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=9
                    - link "" [ref=f2e532] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=9
                - cell [ref=f2e534]:
                  - generic [ref=f2e536]:
                    - link "Sales 1" [ref=f2e538] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000009
                      - text: Sales
                      - generic [ref=f2e539]: "1"
                    - text: 
                - cell "Customer-00000000009" [ref=f2e540]
                - cell "Test123" [ref=f2e543]
                - cell "Ranga" [ref=f2e546]
                - cell "98765" [ref=f2e549]
                - cell "76543" [ref=f2e552]
                - cell "Rp 108,890.00" [ref=f2e555]
              - row [ref=f2e558]:
                - cell [ref=f2e559]:
                  - checkbox [ref=f2e562]
                - cell "" [ref=f2e563]:
                  - generic [ref=f2e565]:
                    - generic [ref=f2e566] [cursor=pointer]: 
                    - text: 
                - cell [ref=f2e567]:
                  - generic [ref=f2e569]:
                    - link "Sale Now" [ref=f2e570] [cursor=pointer]:
                      - /url: a_salesadd.php?Customer_Number=Customer-00000000010&showdetail=a_sales_detail
                    - link "" [ref=f2e572] [cursor=pointer]:
                      - /url: a_customersview.php?showdetail=&Customer_ID=10
                    - link "" [ref=f2e574] [cursor=pointer]:
                      - /url: a_customersedit.php?showdetail=&Customer_ID=10
                    - link "" [ref=f2e576] [cursor=pointer]:
                      - /url: a_customersadd.php?showdetail=&Customer_ID=10
                - cell [ref=f2e578]:
                  - generic [ref=f2e580]:
                    - link "Sales" [ref=f2e582] [cursor=pointer]:
                      - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000010
                    - text: 
                - cell "Customer-00000000010" [ref=f2e583]
                - cell "Test123" [ref=f2e586]
                - cell "Ranga" [ref=f2e589]
                - cell "98765" [ref=f2e592]
                - cell "76543" [ref=f2e595]
                - cell "Rp 0.00" [ref=f2e598]
            - rowgroup [ref=f2e601]:
              - row "Rp 2,270,090.00" [ref=f2e602]:
                - cell [ref=f2e603]
                - cell [ref=f2e605]
                - cell [ref=f2e607]
                - cell [ref=f2e609]
                - cell [ref=f2e611]
                - cell [ref=f2e613]
                - cell [ref=f2e615]
                - cell [ref=f2e617]
                - cell [ref=f2e619]
                - cell "Rp 2,270,090.00" [ref=f2e621]:
                  - generic [ref=f2e623]:
                    - text: ":"
                    - generic [ref=f2e624]: Rp 2,270,090.00
        - generic [ref=f2e625]:
          - generic:
            - generic [ref=f2e626]:
              - generic [ref=f2e627]: Page Size
              - combobox [ref=f2e628]:
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
            - generic [ref=f2e629]:
              - generic [ref=f2e630]: Page
              - generic [ref=f2e632]:
                - generic [ref=f2e633]:
                  - generic: 
                  - generic: 
                - textbox [ref=f2e634]: "1"
                - generic [ref=f2e635]:
                  - link "" [ref=f2e636] [cursor=pointer]:
                    - /url: a_customerslist.php?start=11
                  - link "" [ref=f2e638] [cursor=pointer]:
                    - /url: a_customerslist.php?start=661
              - generic [ref=f2e640]: of 67
            - generic [ref=f2e641]: Records 1 to 10 of 668
          - generic [ref=f2e643]:
            - link "+" [ref=f2e646] [cursor=pointer]:
              - /url: a_customersadd.php?showdetail=
            - generic [ref=f2e649]:
              - button "" [ref=f2e650] [cursor=pointer]
              - text:  
    - generic [ref=f2e655]:
      - text: ©2015
      - link "Masino Sinaga" [ref=f2e656] [cursor=pointer]:
        - /url: http://www.ilovephpmaker.com
      - text: . All rights reserved. |
      - link "Terms and Conditions" [ref=f2e657] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "About Us" [ref=f2e658] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "Back to Top" [ref=f2e659] [cursor=pointer]:
        - /url: javascript:void(0);
      - generic [ref=f2e660]: Your session will expire in 157 seconds.
  - generic [ref=f2e661]:
    - button [ref=f2e662] [cursor=pointer]
    - generic [ref=f2e663]:
      - button [ref=f2e664] [cursor=pointer]
      - button [ref=f2e665] [cursor=pointer]
    - generic [ref=f2e666]: Logout
    - generic [ref=f2e667]: Are you sure you want to logout?
    - generic [ref=f2e671]:
      - button "OK!" [ref=f2e672] [cursor=pointer]
      - button "Cancel" [ref=f2e673] [cursor=pointer]
    - button [ref=f2e674] [cursor=pointer]
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
  29 |         this.ClickAddIcon=page.locator('[data-caption="Add"]').first()
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
  40 |         this.ClickAdddButton=page.locator('btnAction')
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
> 52 |        await this.ClickAdddButton.click()
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  76 |       await this.AlertOk.waitFor()
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