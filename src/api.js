const BASE_URL = 'http://10.25.1.84:5000';

class Api {
  _callApi(url, options = {}) {

    const fetchOptions = {
      method: options.method || 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    console.log( // eslint-disable-line
      `${fetchOptions.method} request \nto /${url}`);

    return fetch(`${BASE_URL}/${url}`, fetchOptions);
  }

  getLivestreamNote() {
    return this._callApi('delivery_start', {method: 'GET'});
  }

  getDeliveredNote() {
    return this._callApi('delivery_stop', {method: 'GET'});
  }
}

export default new Api();