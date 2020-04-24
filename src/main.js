import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currenyConverter").submit(function () {
    event.preventDefault();
    const userInput = $('#USD').val();
    const country = $("#country, #other").val();
    console.log(country);
    console.log(userInput);
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      $("#output").html(
        `<h3>${userInput} * ${response.currencyObject.conversion_rates}</h3>`);
      console.log(response);
    })();
  });
});