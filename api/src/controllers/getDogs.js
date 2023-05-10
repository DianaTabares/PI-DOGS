const axios = require('axios');
const {Dog} = require('../db');
require('dotenv').config();
const {ENDPOINT} = process.env;

async function getDogs(req, res){
    try{
        //console.log(ENDPOINT)
        const {data} = await axios.get(ENDPOINT)

        const dogsAPI = data.map((dog)=>{
            return{
                id: dog.id,
                name: dog.name,
                image: dog.image.url,
                weight: dog.weight.imperial,
                height: dog.height.imperial,
                yearsOfLife: dog.life_span,
            }
            
        })
        const dogsDB = await
        Dog.findAll({
            attributes:['id','name','image','weight','height','yearsOfLife']
        })
        res.status(200).json([...dogsAPI,...dogsDB].sort((a,b)=> a.id - b.id))
    }catch (e){
        res.status(500).json({e:error.message})
    }
}
module.exports = getDogs;



