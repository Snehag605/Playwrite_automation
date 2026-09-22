import { test } from "../hookes/ERPhookes";
import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomerPage } from "../Pages/CustomerPage";

test.describe('ERP Inventory Manage',()=>{

    test('suplier with single data',async({page})=>{
    const sup=new SuppliersPage(page)
    await sup.NavigateToSupliers()
    await sup.AddSupplierDetails(
    "Srini",
    "hyd1",
    "hyderabad",
    "india",
    "Qedgetech",
    "32525252",
    "Test@gmail.com",
    "2424234",
    "new suplier"
    )
    await sup.HandleAlerts()
    await sup.supplierTable()
    })
//------------------------Customer Module----------------------
test('customer module', async ({ page }) => {
    const cus=new CustomerPage(page)
    await cus.NavigateToCustomer()
    await cus.CustomerDetails(
    "Srini",
    "hyd1",
    "hyderabad",
    "india",
    "Qedgetech",
    "32525252",
    "Test@gmail.com",
    "2424234",
    "new suplier"
    )
    await cus.HandleAlerts()
    await cus.customerTable()

    //Test the file in git hub 
})

})