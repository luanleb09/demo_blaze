import { Page, expect } from '@playwright/test';

export class CartPage {

constructor(private page: Page) {}

placeOrderBtn = 'button:has-text("Place Order")';

purchaseBtn = 'button:has-text("Purchase")';

successMsg = '.sweet-alert';


async clickPlaceOrder(){

 await this.page.click(this.placeOrderBtn);

}

async fillOrderForm(ORDER){

 await this.page.fill('#name', ORDER.name);

 await this.page.fill('#country', ORDER.country);

 await this.page.fill('#city', ORDER.city);

 await this.page.fill('#card', ORDER.creditCard);

 await this.page.fill('#month', ORDER.month);

 await this.page.fill('#year', ORDER.year);

}

async purchase(){

 await this.page.click(this.purchaseBtn);

}

async verifyOrderSuccess(){

 await expect(this.page.locator(this.successMsg)).toBeVisible();

}

}