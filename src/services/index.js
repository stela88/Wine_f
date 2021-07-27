import axios from 'axios'

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3330',
    timeout: 1000
})


// vezani uz pojedine rute
let HomeCard = {
    getAll() {
        return Service.get('/posts')
    }
}

// let r = await Service.get('/posts', options);
// return r.data.map(doc => {
//     return {
//         id: doc._id,
//         img: doc.slika,
//         description: doc.ime,
//         page: doc.stranica,
//     };
// })

export { Service, HomeCard }