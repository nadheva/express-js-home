//import express
import express from "express";

//init express route
const router = express.Router();

//basic route
router.get('/', (req, res)=> {
    res.send('heloo');
});

// app.get('/about', (req, res)  => {
//     res.send('Halooooo');
// });
router.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

export default router;