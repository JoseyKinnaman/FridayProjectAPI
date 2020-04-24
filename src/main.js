import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  (async () => {
    let currencyService = new CurrencyService()
    const response= await currencyService.getCurrency();
    console.log(response);
  });
});