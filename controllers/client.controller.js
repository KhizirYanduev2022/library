const express = require('express');
const Client = require('../models/client.model');


module.exports.clientController = {

    createClient: (req,res)  => {
        Client.create(req.body,(err,data)=>{
            if(err){
                res.json(err.message)
            }else{
                res.json(data)
            }
        })
    },

 updateClient: async (req,res) => {
    const data = await Client.findByIdAndUpdate()
 }


}

