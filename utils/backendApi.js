import request from './httpRequest'
class allRequest {
  constructor() {
    this._httpRequest = new request()
  }

  testApi(id) {
    return this._httpRequest.sendGetRequest(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/${id}`)
  }
}

export default allRequest