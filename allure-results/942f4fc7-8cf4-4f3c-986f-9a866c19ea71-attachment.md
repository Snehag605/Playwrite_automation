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
Error: locator.clear: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('#psearch')

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
          - listitem [ref=f4e57]: / Suppliers
          - link "" [ref=f4e58] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=f4e61]:
          - button "" [ref=f4e62] [cursor=pointer]
          - text:       
        - generic [ref=f4e66]:
          - button "" [pressed] [ref=f4e67] [cursor=pointer]
          - link "" [ref=f4e69] [cursor=pointer]:
            - /url: a_supplierssrch.php
        - button "" [ref=f4e73] [cursor=pointer]
        - generic [ref=f4e77]:
          - generic [ref=f4e78] [cursor=pointer]:
            - radio "en" [checked]
            - text: en
          - generic [ref=f4e79] [cursor=pointer]:
            - radio "id"
            - text: id
      - generic [ref=f4e85]:
        - textbox "Search" [ref=f4e86]
        - generic [ref=f4e87]:
          - button [ref=f4e88] [cursor=pointer]
          - button "Search" [ref=f4e90] [cursor=pointer]
      - generic [ref=f4e91]:
        - generic [ref=f4e92]:
          - generic:
            - generic [ref=f4e93]:
              - generic [ref=f4e94]: Page Size
              - combobox [ref=f4e95]:
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
            - generic [ref=f4e96]:
              - generic [ref=f4e97]: Page
              - generic [ref=f4e99]:
                - generic [ref=f4e100]:
                  - generic: 
                  - generic: 
                - textbox [ref=f4e101]: "1"
                - generic [ref=f4e102]:
                  - link "" [ref=f4e103] [cursor=pointer]:
                    - /url: a_supplierslist.php?start=11
                  - link "" [ref=f4e105] [cursor=pointer]:
                    - /url: a_supplierslist.php?start=911
              - generic [ref=f4e107]: of 92
            - generic [ref=f4e108]: Records 1 to 10 of 917
          - generic [ref=f4e110]:
            - link "+" [ref=f4e113] [cursor=pointer]:
              - /url: a_suppliersadd.php?showdetail=
            - generic [ref=f4e116]:
              - button "" [ref=f4e117] [cursor=pointer]
              - text:  
        - generic [ref=f4e122]:
          - table [ref=f4e124]:
            - rowgroup [ref=f4e125]:
              - row [ref=f4e126]:
                - cell [ref=f4e127]:
                  - table [ref=f4e128]:
                    - rowgroup [ref=f4e129]:
                      - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?" [ref=f4e130]:
                        - columnheader [ref=f4e131]:
                          - checkbox [ref=f4e134]
                        - columnheader [ref=f4e135]
                        - columnheader [ref=f4e137]
                        - columnheader [ref=f4e139]
                        - columnheader [ref=f4e141]
                        - columnheader "Supplier Number" [ref=f4e143]
                        - columnheader "Supplier Name" [ref=f4e148]
                        - columnheader "Contact Person" [ref=f4e153]
                        - columnheader "Phone Number" [ref=f4e158]
                        - columnheader "Mobile Number" [ref=f4e163]
                        - columnheader "Balance" [ref=f4e168]
                        - columnheader "Is Stock Available?" [ref=f4e173]
                - cell [ref=f4e178]
          - table [ref=f4e180]:
            - rowgroup [ref=f4e181]:
              - row [ref=f4e182]:
                - cell [ref=f4e183]:
                  - checkbox [ref=f4e186]
                - cell "" [ref=f4e187]:
                  - generic [ref=f4e189]:
                    - generic [ref=f4e190] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e191]:
                  - generic [ref=f4e193]:
                    - link "Purchase Now" [ref=f4e194] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000001&showdetail=a_purchases_detail
                    - link "" [ref=f4e196] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=1
                    - link "" [ref=f4e198] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=1
                    - link "" [ref=f4e200] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=1
                - cell [ref=f4e202]:
                  - generic [ref=f4e204]:
                    - link "Purchases 3" [ref=f4e206] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
                      - text: Purchases
                      - generic [ref=f4e207]: "3"
                    - text: 
                - cell [ref=f4e208]:
                  - generic [ref=f4e210]:
                    - link "Stock Items 2" [ref=f4e212] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
                      - text: Stock Items
                      - generic [ref=f4e213]: "2"
                    - text: 
                - cell "Supplier-00000000001" [ref=f4e214]
                - cell "First Supplier" [ref=f4e217]
                - cell "John Mc. Enroe" [ref=f4e220]
                - cell "022124415093" [ref=f4e223]
                - cell "0824132048929" [ref=f4e226]
                - cell "Rp 16,040,000.00" [ref=f4e229]
                - cell "Yes" [ref=f4e232]
              - row [ref=f4e235]:
                - cell [ref=f4e236]:
                  - checkbox [ref=f4e239]
                - cell "" [ref=f4e240]:
                  - generic [ref=f4e242]:
                    - generic [ref=f4e243] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e244]:
                  - generic [ref=f4e246]:
                    - link "Purchase Now" [ref=f4e247] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000002&showdetail=a_purchases_detail
                    - link "" [ref=f4e249] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=2
                    - link "" [ref=f4e251] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=2
                    - link "" [ref=f4e253] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=2
                - cell [ref=f4e255]:
                  - generic [ref=f4e257]:
                    - link "Purchases 2" [ref=f4e259] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000002
                      - text: Purchases
                      - generic [ref=f4e260]: "2"
                    - text: 
                - cell [ref=f4e261]:
                  - generic [ref=f4e263]:
                    - link "Stock Items 4" [ref=f4e265] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000002
                      - text: Stock Items
                      - generic [ref=f4e266]: "4"
                    - text: 
                - cell "Supplier-00000000002" [ref=f4e267]
                - cell "Second Supplier" [ref=f4e270]
                - cell "Martina Navatrilova" [ref=f4e273]
                - cell "02148272080" [ref=f4e276]
                - cell "081232442840" [ref=f4e279]
                - cell "Rp 7,750,000.00" [ref=f4e282]
                - cell "Yes" [ref=f4e285]
              - row [ref=f4e288]:
                - cell [ref=f4e289]:
                  - checkbox [ref=f4e292]
                - cell "" [ref=f4e293]:
                  - generic [ref=f4e295]:
                    - generic [ref=f4e296] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e297]:
                  - generic [ref=f4e299]:
                    - link "Purchase Now" [ref=f4e300] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000003&showdetail=a_purchases_detail
                    - link "" [ref=f4e302] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=3
                    - link "" [ref=f4e304] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=3
                    - link "" [ref=f4e306] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=3
                - cell [ref=f4e308]:
                  - generic [ref=f4e310]:
                    - link "Purchases 1" [ref=f4e312] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
                      - text: Purchases
                      - generic [ref=f4e313]: "1"
                    - text: 
                - cell [ref=f4e314]:
                  - generic [ref=f4e316]:
                    - link "Stock Items 3" [ref=f4e318] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
                      - text: Stock Items
                      - generic [ref=f4e319]: "3"
                    - text: 
                - cell "Supplier-00000000003" [ref=f4e320]
                - cell "Third Supplier" [ref=f4e323]
                - cell "Joko Sentul" [ref=f4e326]
                - cell "03142348293" [ref=f4e329]
                - cell "081242009827" [ref=f4e332]
                - cell "Rp 3,600,000.00" [ref=f4e335]
                - cell "Yes" [ref=f4e338]
              - row [ref=f4e341]:
                - cell [ref=f4e342]:
                  - checkbox [ref=f4e345]
                - cell "" [ref=f4e346]:
                  - generic [ref=f4e348]:
                    - generic [ref=f4e349] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e350]:
                  - generic [ref=f4e352]:
                    - link "Purchase Now" [ref=f4e353] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000004&showdetail=a_purchases_detail
                    - link "" [ref=f4e355] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=4
                    - link "" [ref=f4e357] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=4
                    - link "" [ref=f4e359] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=4
                - cell [ref=f4e361]:
                  - generic [ref=f4e363]:
                    - link "Purchases 1" [ref=f4e365] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
                      - text: Purchases
                      - generic [ref=f4e366]: "1"
                    - text: 
                - cell [ref=f4e367]:
                  - generic [ref=f4e369]:
                    - link "Stock Items 1" [ref=f4e371] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
                      - text: Stock Items
                      - generic [ref=f4e372]: "1"
                    - text: 
                - cell "Supplier-00000000004" [ref=f4e373]
                - cell "Fourth Supplier" [ref=f4e376]
                - cell "Siapa Sajalah" [ref=f4e379]
                - cell "0213248290" [ref=f4e382]
                - cell "081242932890" [ref=f4e385]
                - cell "Rp 1,700,000.00" [ref=f4e388]
                - cell "Yes" [ref=f4e391]
              - row [ref=f4e394]:
                - cell [ref=f4e395]:
                  - checkbox [ref=f4e398]
                - cell "" [ref=f4e399]:
                  - generic [ref=f4e401]:
                    - generic [ref=f4e402] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e403]:
                  - generic [ref=f4e405]:
                    - link "Purchase Now" [ref=f4e406] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000005&showdetail=a_purchases_detail
                    - link "" [ref=f4e408] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=5
                    - link "" [ref=f4e410] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=5
                    - link "" [ref=f4e412] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=5
                - cell [ref=f4e414]:
                  - generic [ref=f4e416]:
                    - link "Purchases" [ref=f4e418] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
                    - text: 
                - cell [ref=f4e419]:
                  - generic [ref=f4e421]:
                    - link "Stock Items" [ref=f4e423] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
                    - text: 
                - cell "Supplier-00000000005" [ref=f4e424]
                - cell "bbcfgb" [ref=f4e427]
                - cell "bcv" [ref=f4e430]
                - cell "bcv" [ref=f4e433]
                - cell "bcv" [ref=f4e436]
                - cell "Rp 0.00" [ref=f4e439]
                - cell "No" [ref=f4e442]
              - row [ref=f4e445]:
                - cell [ref=f4e446]:
                  - checkbox [ref=f4e449]
                - cell "" [ref=f4e450]:
                  - generic [ref=f4e452]:
                    - generic [ref=f4e453] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e454]:
                  - generic [ref=f4e456]:
                    - link "Purchase Now" [ref=f4e457] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000006&showdetail=a_purchases_detail
                    - link "" [ref=f4e459] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=6
                    - link "" [ref=f4e461] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=6
                    - link "" [ref=f4e463] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=6
                - cell [ref=f4e465]:
                  - generic [ref=f4e467]:
                    - link "Purchases" [ref=f4e469] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
                    - text: 
                - cell [ref=f4e470]:
                  - generic [ref=f4e472]:
                    - link "Stock Items" [ref=f4e474] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
                    - text: 
                - cell "Supplier-00000000006" [ref=f4e475]
                - cell "hfghgf" [ref=f4e478]
                - cell "hgf" [ref=f4e481]
                - cell "hgf" [ref=f4e484]
                - cell "hg" [ref=f4e487]
                - cell "Rp 0.00" [ref=f4e490]
                - cell "No" [ref=f4e493]
              - row [ref=f4e496]:
                - cell [ref=f4e497]:
                  - checkbox [ref=f4e500]
                - cell "" [ref=f4e501]:
                  - generic [ref=f4e503]:
                    - generic [ref=f4e504] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e505]:
                  - generic [ref=f4e507]:
                    - link "Purchase Now" [ref=f4e508] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000007&showdetail=a_purchases_detail
                    - link "" [ref=f4e510] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=7
                    - link "" [ref=f4e512] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=7
                    - link "" [ref=f4e514] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=7
                - cell [ref=f4e516]:
                  - generic [ref=f4e518]:
                    - link "Purchases" [ref=f4e520] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
                    - text: 
                - cell [ref=f4e521]:
                  - generic [ref=f4e523]:
                    - link "Stock Items" [ref=f4e525] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
                    - text: 
                - cell "Supplier-00000000007" [ref=f4e526]
                - cell "bb" [ref=f4e529]
                - cell "vxc" [ref=f4e532]
                - cell "vxc" [ref=f4e535]
                - cell "vxc" [ref=f4e538]
                - cell "Rp 0.00" [ref=f4e541]
                - cell "No" [ref=f4e544]
              - row [ref=f4e547]:
                - cell [ref=f4e548]:
                  - checkbox [ref=f4e551]
                - cell "" [ref=f4e552]:
                  - generic [ref=f4e554]:
                    - generic [ref=f4e555] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e556]:
                  - generic [ref=f4e558]:
                    - link "Purchase Now" [ref=f4e559] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000008&showdetail=a_purchases_detail
                    - link "" [ref=f4e561] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=8
                    - link "" [ref=f4e563] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=8
                    - link "" [ref=f4e565] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=8
                - cell [ref=f4e567]:
                  - generic [ref=f4e569]:
                    - link "Purchases 1" [ref=f4e571] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
                      - text: Purchases
                      - generic [ref=f4e572]: "1"
                    - text: 
                - cell [ref=f4e573]:
                  - generic [ref=f4e575]:
                    - link "Stock Items" [ref=f4e577] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
                    - text: 
                - cell "Supplier-00000000008" [ref=f4e578]
                - cell "John" [ref=f4e581]
                - cell "Qedge" [ref=f4e584]
                - cell "876543" [ref=f4e587]
                - cell "765432" [ref=f4e590]
                - cell "Rp 0.00" [ref=f4e593]
                - cell "No" [ref=f4e596]
              - row [ref=f4e599]:
                - cell [ref=f4e600]:
                  - checkbox [ref=f4e603]
                - cell "" [ref=f4e604]:
                  - generic [ref=f4e606]:
                    - generic [ref=f4e607] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e608]:
                  - generic [ref=f4e610]:
                    - link "Purchase Now" [ref=f4e611] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000009&showdetail=a_purchases_detail
                    - link "" [ref=f4e613] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=9
                    - link "" [ref=f4e615] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=9
                    - link "" [ref=f4e617] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=9
                - cell [ref=f4e619]:
                  - generic [ref=f4e621]:
                    - link "Purchases" [ref=f4e623] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
                    - text: 
                - cell [ref=f4e624]:
                  - generic [ref=f4e626]:
                    - link "Stock Items" [ref=f4e628] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
                    - text: 
                - cell "Supplier-00000000009" [ref=f4e629]
                - cell "John" [ref=f4e632]
                - cell "Qedge" [ref=f4e635]
                - cell "876543" [ref=f4e638]
                - cell "765432" [ref=f4e641]
                - cell "Rp 0.00" [ref=f4e644]
                - cell "No" [ref=f4e647]
              - row [ref=f4e650]:
                - cell [ref=f4e651]:
                  - checkbox [ref=f4e654]
                - cell "" [ref=f4e655]:
                  - generic [ref=f4e657]:
                    - generic [ref=f4e658] [cursor=pointer]: 
                    - text:  
                - cell [ref=f4e659]:
                  - generic [ref=f4e661]:
                    - link "Purchase Now" [ref=f4e662] [cursor=pointer]:
                      - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000010&showdetail=a_purchases_detail
                    - link "" [ref=f4e664] [cursor=pointer]:
                      - /url: a_suppliersview.php?showdetail=&Supplier_ID=10
                    - link "" [ref=f4e666] [cursor=pointer]:
                      - /url: a_suppliersedit.php?showdetail=&Supplier_ID=10
                    - link "" [ref=f4e668] [cursor=pointer]:
                      - /url: a_suppliersadd.php?showdetail=&Supplier_ID=10
                - cell [ref=f4e670]:
                  - generic [ref=f4e672]:
                    - link "Purchases" [ref=f4e674] [cursor=pointer]:
                      - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000010
                    - text: 
                - cell [ref=f4e675]:
                  - generic [ref=f4e677]:
                    - link "Stock Items" [ref=f4e679] [cursor=pointer]:
                      - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000010
                    - text: 
                - cell "Supplier-00000000010" [ref=f4e680]
                - cell "John" [ref=f4e683]
                - cell "Qedge" [ref=f4e686]
                - cell "876543" [ref=f4e689]
                - cell "765432" [ref=f4e692]
                - cell "Rp 0.00" [ref=f4e695]
                - cell "No" [ref=f4e698]
            - rowgroup [ref=f4e701]:
              - row "Rp 29,090,000.00" [ref=f4e702]:
                - cell [ref=f4e703]
                - cell [ref=f4e705]
                - cell [ref=f4e707]
                - cell [ref=f4e709]
                - cell [ref=f4e711]
                - cell [ref=f4e713]
                - cell [ref=f4e715]
                - cell [ref=f4e717]
                - cell [ref=f4e719]
                - cell [ref=f4e721]
                - cell "Rp 29,090,000.00" [ref=f4e723]:
                  - generic [ref=f4e725]:
                    - text: ":"
                    - generic [ref=f4e726]: Rp 29,090,000.00
                - cell [ref=f4e727]
        - generic [ref=f4e729]:
          - generic:
            - generic [ref=f4e730]:
              - generic [ref=f4e731]: Page Size
              - combobox [ref=f4e732]:
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
            - generic [ref=f4e733]:
              - generic [ref=f4e734]: Page
              - generic [ref=f4e736]:
                - generic [ref=f4e737]:
                  - generic: 
                  - generic: 
                - textbox [ref=f4e738]: "1"
                - generic [ref=f4e739]:
                  - link "" [ref=f4e740] [cursor=pointer]:
                    - /url: a_supplierslist.php?start=11
                  - link "" [ref=f4e742] [cursor=pointer]:
                    - /url: a_supplierslist.php?start=911
              - generic [ref=f4e744]: of 92
            - generic [ref=f4e745]: Records 1 to 10 of 917
          - generic [ref=f4e747]:
            - link "+" [ref=f4e750] [cursor=pointer]:
              - /url: a_suppliersadd.php?showdetail=
            - generic [ref=f4e753]:
              - button "" [ref=f4e754] [cursor=pointer]
              - text:  
    - generic [ref=f4e759]:
      - text: ©2015
      - link "Masino Sinaga" [ref=f4e760] [cursor=pointer]:
        - /url: http://www.ilovephpmaker.com
      - text: . All rights reserved. |
      - link "Terms and Conditions" [ref=f4e761] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "About Us" [ref=f4e762] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "Back to Top" [ref=f4e763] [cursor=pointer]:
        - /url: javascript:void(0);
      - generic [ref=f4e764]: Your session will expire in 164 seconds.
  - tooltip "Search Panel" [ref=f4e765]
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
  45  |     this.SerchPanel=page.locator('[data-caption="Search Panel"]')
  46  |     this.SearchTextBox=page.getByPlaceholder('#psearch')
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
  84  |   await this.SerchPanel.waitFor()
  85  |   if (!await this.SerchPanel.isVisible()){
  86  |     await this .SerchPanel.click()
  87  |   }
  88  | 
> 89  |   await this.SearchTextBox.clear()
      |                            ^ Error: locator.clear: Test timeout of 30000ms exceeded.
  90  |   await this.SearchTextBox.fill(this.expNumber)
  91  |   await this.SerchButton.click()
  92  |  const supplierrow=this.page.locator('el1_a_suppliers_Supplier_Number',
  93  |   {
  94  |     hasText:this.expNumber
  95  |   })
  96  |   await expect(supplierrow).toBeVisible()
  97  |   console.log(`supplier number found in table:${this.expNumber}`)
  98  |    await expect(supplierrow).toContainText(this.expNumber)
  99  |  
  100 | 
  101 |  }
  102 | 
  103 |  
  104 | } 
  105 | 
```