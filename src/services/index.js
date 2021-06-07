import axios from 'axios'

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3330',
    timeout: 1000
})


// vezani uz pojedine rute
let HomeCard = {
    getAll(){
       return Service.get('/pocetna1')
    }
}

// let HomeCard = {
//     getAll(){
//        return Service.get('/pocetna2')
//     }
// }



export { Service, HomeCard }