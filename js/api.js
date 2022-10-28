const CONFIG_API = {
   url: 'https://sb-cats.herokuapp.com/api/2/andrey_vershinkin',
   headers: {
      'Content-type': 'application/json'
   }
};


class Api {
   constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
   }

   getAllCats() {
      fetch(`${this._url}/show`, {
         method: 'GET'
      });
   }

   addNewCat(data) {
      fetch(`${this._url}/add`, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: this._headers
      });
   }

   updateCatById(idCat, data) {
      fetch(`${this._url}/update/${idCat}`, {
         method: 'PUT',
         body: JSON.stringify(data),
         headers: this._headers
      });
   }

   getCatById(idCat) {
      fetch(`${this._url}/show/${idCat}`, {
         method: 'GET',
      });
   }

   deleteCatById(idCat) {
      fetch(`${this._url}/delete/${idCat}`, {
         method: 'DELETE',
      });
   }
}

const api = new Api(CONFIG_API);

// api.getAllCats();

// api.addNewCat();

// api.updateCatById();

// api.getCatById();
