import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currenyConverter").submit(function () {
    event.preventDefault();
    const userInput = parseFloat($('#USD').val());
    const country = $("#country, #other").val();
    console.log(country);
    console.log(userInput);
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency(country,userInput);
      getElements(response);
    })();

    function getElements(response){
      if (response){
        $("#output").html(`<h3>${response} ${country}</h3>`);
      } else {
        $("#output").html(`<h3> Currency rate cannot be found`);
      }

    }
  });
});