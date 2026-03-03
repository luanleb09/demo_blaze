import { Page } from '@playwright/test';

export class HomePage {

constructor(private page: Page) {}

async selectProduct(productName: string){

 await this.page.click(`a:has-text("${productName}")`);

}

async addToCart(){

 await this.page.click('a:has-text("Add to cart")');

}

async goToCart(){

 await this.page.click('#cartur');

}

}