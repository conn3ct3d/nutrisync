import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {title:'TDEE Calculator', body:'calculate'});
});

export default router;