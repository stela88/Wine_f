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




export { Service, Posts }