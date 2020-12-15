const service = require('./auth.service');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const data = await service.register.(req.body);
        res.status(200).send(data);
    } catch (error) {
        
    }
})