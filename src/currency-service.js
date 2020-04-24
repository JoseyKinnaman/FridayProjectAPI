export class CurrencyService {
  async getCurrency() {
    try {
      let response = await fetch(
        `https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/lastest/USD`);
      let jsonifiedResponse;
      if ( response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
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