# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Manage >> suplier with single data
- Location: tests\ERPSingleData.spec.ts:6:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('#psearch') to be visible

```

```
Error: locator.waitFor: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class adminLogOut{
  4  |     page:Page
  5  |     readonly clickLogOut:Locator
  6  | 
  7  |     constructor(page:Page){
  8  |       this.page=page
  9  |       this.clickLogOut =page.getByRole('link',{name:'Logout',exact:true}).first()
  10 |     }
  11 | 
  12 |     async ERPlogout(){
  13 | 
> 14 |         await this.clickLogOut.waitFor()
     |                                ^ Error: locator.waitFor: Target page, context or browser has been closed
  15 |         await this.clickLogOut.click();
  16 |     }
  17 |     
  18 | }
```