const express = require('express')
const user = require('../models/user')
const { addListener } = require('../models/user')
const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const users = await user.find()
        res.json(users)
    }catch(err){
        res.send("Error" + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const user1 = await user.findById(req.params.id)
        res.json(user1)
    }catch(err){
        res.send("Error " + err)
    }
})

router.post('/', async(req,res) => {
    const users = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const a1 = await users.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res)  => {
    try{
        const user2 = await user.findById(req.params.id)
        user2.sub = req.body.sub
        const a1 = await user2.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router