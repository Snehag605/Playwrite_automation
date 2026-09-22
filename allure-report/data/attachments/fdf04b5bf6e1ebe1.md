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
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Stock Accounting" [ref=e6] [cursor=pointer]:
      - /url: .
    - strong [ref=e9]: Stock Accounting
  - text:       
  - generic [ref=e13]:
    - list [ref=e14]:
      - listitem [ref=e15]:
        - link " Help (Categories)" [ref=e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=e19]:
        - link " Login" [ref=e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=e21]: 
          - text: Login
    - list
  - generic [ref=e24]:
    - generic [ref=e27]:
      - generic [ref=e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic [ref=e33]:
      - generic [ref=e34]:
        - button "x" [ref=e35] [cursor=pointer]: ×
        - heading [level=4] [ref=e37]:
          - text: Login
          - link "" [ref=e38] [cursor=pointer]:
            - /url: javascript:void(0);
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: User Name
          - textbox "User Name" [active] [ref=e44]: admin
        - generic [ref=e45]:
          - generic [ref=e46]: Password
          - textbox "Password" [ref=e48]: master
        - generic [ref=e51] [cursor=pointer]:
          - text: Options
          - generic [ref=e52]: 
        - generic [ref=e54]:
          - button "Login" [ref=e55] [cursor=pointer]
          - button "Reset" [ref=e56] [cursor=pointer]
      - generic [ref=e58]:
        - link "Forgot Password" [ref=e59] [cursor=pointer]:
          - /url: forgotpwd.php
        - link "Register" [ref=e60] [cursor=pointer]:
          - /url: register.php
  - generic [ref=e62]:
    - text: ©2015
    - link "Masino Sinaga" [ref=e63] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=e64] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=e65] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=e66] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | 
  2  | import { test as base ,expect} from "@playwright/test";
  3  | import { AdminLoginPage } from "../Pages/AdminLoginPage";
  4  | import { adminLogOut } from "../Pages/AdminLogout";
  5  | 
  6  | export const test = base;
  7  | test.beforeEach(async ({ page }) => {
  8  | 
  9  |     const loginPage=new AdminLoginPage(page)
  10 | 
  11 |     const baseUrl = process.env.BASE_URL;
  12 |     if (!baseUrl) {
  13 |         throw new Error("BASE_URL environment variable is not set");
  14 |     }
  15 |     await loginPage.launchUrl(baseUrl);
  16 | });
  17 | 
> 18 | test.afterEach(async ({page}) =>{
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  19 | 
  20 |     const logoutpage=new adminLogOut(page)
  21 |     await logoutpage.ERPlogout();
  22 | });
  23 | export { expect };
  24 | 
  25 | 
```