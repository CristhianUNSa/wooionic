import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  WooCommerce: any;
  products: any[];

  constructor(public navCtrl: NavController) {
    this.WooCommerce = WC({
      url: "http://localhost/wordpress/",
      consumerKey: "ck_9aa8fa3745533472b4b32fcfab302184d2de6f65",
      consumerSecret: "cs_bdb4c78cd98cd680675f84510cae6704c598e3cd"
    });

    this.WooCommerce.getAsync("products").then(
      (data) => { 
        this.products = JSON.parse(data.body).products;
        console.log(this.products);
      },
      (err) => { console.log(err)}
    );
  }

}
