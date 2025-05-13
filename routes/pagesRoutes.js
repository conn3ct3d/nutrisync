import express from "express";
const router = express.Router();
router.get('/', (req,res) => {
    res.render('layout', {title:'Nutrisync', body:'home'});
});
export default router;