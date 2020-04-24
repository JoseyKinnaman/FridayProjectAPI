export class CurrencyService {
  async getCurrency(country) {
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
        // const europe = currencyObject.conversion_rates.EUR;
        // const britain = currencyObject.conversion_rates.GBP;
        // const japan = currencyObject.conversion_rates.JPY;
        // const mexico = currencyObject.conversion_rates.MXN;
        // const sweden = currencyObject.conversion_rates.SEK;
        // console.log(europe, britain, japan, mexico, sweden);
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