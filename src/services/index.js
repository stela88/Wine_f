import axios from 'axios'

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3330',
    timeout: 1000
})


// vezani uz pojedine rute
let Posts = {
    add(post){
        return Service.post('/posts', post);
    },

    async getOne(){
        let response = await Service.get (`/posts/${id}`)
        let doc = response.data;
        return {
            img: doc.slika,
            description: doc.ime,
            page: doc.stranica,
        };

    },
    
    async getAll() {
        let response = await Service.get('/posts');
        return response.data.map(doc => {
        return {
            id: doc._id,
            img: doc.slika,
            description: doc.ime,
            page: doc.stranica,
        };
    
    });
}
    
}

let Narudzba = {
    dodaj_narudzbu(gotova_narudzba) {
      return Service.post('/narudzbe', gotova_narudzba);
    },
    // pretraga i dohvat 1 doc.
    async getOne(id) {
      let response = await Service.get(`/narudzbe/${id}`);
      let doc = response.data;
      return {
        id: doc._id,
        konacnaCijena: doc.konacnaCijena,
        imeiprezime: doc.imeiprezime,
        adresa: doc.adresa,
        godine: doc.godine,
        drzava: doc.drzava,
        zupanija:doc.zupanija,
        zip: doc.zip,
        imeKartica: doc.imeKartica,
        napomene: doc.napomene,
        brojKartice: doc.brojKartice,
        cardCV: doc.cardCV,
        cardDatum: doc.cardDatum,
      };
    },
   
  };

export { Service, Posts, Narudzba}