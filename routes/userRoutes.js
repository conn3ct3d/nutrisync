import express from "express";
const router = express.Router();

// GET /users
router.get('/', (req,res) => {
    res.render('users/list'); // render user list view
});
// POST /users
router.post('/', (req,res) => {
    // handle user creation
    res.redirect('/users');
});

export default router;