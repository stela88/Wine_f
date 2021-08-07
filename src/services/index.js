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

let Malvazija = {
    add(malvazija){
        return Service.post('/malvazija', malvazija);
    },

    async getOne(){
        let response = await Service.get ('malvazija')
        let doc = response.data;
        return {
            logo: doc.logo,
            ime: doc.name,
            slika: doc.img,
            boja: doc.color,
            temp: doc.temp,
            cijena: doc.price,
            opis: doc.about,
            posluzi: doc.serve,
            jelo1: doc.meal1,
            jelo2: doc.meal2,
            jelo3: doc.meal3,
            link1: doc.link1,
            link2: doc.link2,
            link3: doc.link3
        };

    },
}



export { Service, Posts, Malvazija}