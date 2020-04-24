export class CurrencyService {
  async getCurrency(country, ) {
    try {
      let response = await fetch(
        `https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`
      );
      let jsonifiedResponse;
      if ( response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        let currencyObject = jsonifiedResponse;
        let currency = currencyObject.conversion_rates;
        jsonifiedResponse = currency;
        if ( country === "EUR") {
          jsonifiedResponse = currencyObject.conversion_rates.EUR;
        }
        if (country === "GBP") {
          jsonifiedResponse = currencyObject.conversion_rates.GBP;
        }
        if (country === "JPY") {
          jsonifiedResponse = currencyObject.conversion_rates.JPY;
        } 
        if (country === "MXN") {
          jsonifiedResponse = currencyObject.conversion_rates.MXN;
        } 
        if (country === "JPY") {
          jsonifiedResponse = currencyObject.conversion_rates.JPY;
        } 
        if (country === "SEK") {
          jsonifiedResponse = currencyObject.conversion_rates.SEK;
        } 
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.log("error", error);
      return false;
    }
  }
}