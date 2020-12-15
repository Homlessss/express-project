const service = require("./user.service");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await service.find(req.query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    };
});

router.put("/:id", async (req, res) => {
    try {
        const data = await service.update(req.params.id, req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    };
});

router.post("/", async (req,res) => {
    try {
        const data = await service.create(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);  
    };
});

router.delete("/:id", async (req,res) => {
    try {
        const data = await service.delete(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    };
});

module.exports = router;