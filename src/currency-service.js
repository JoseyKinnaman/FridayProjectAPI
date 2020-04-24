export class CurrencyService {
  async getCurrency(rate) {
    try {
      let response = await fetch(
        `https://prime.exchangerate-api.com/v5/${process.env.API_KEY}`);
        let jsonifiedResponse;
        if ( response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        return jsonifiedResponse;
      console.log(jsonifiedResponse);
    } catch(error) {
      return false;
    }
  }
}