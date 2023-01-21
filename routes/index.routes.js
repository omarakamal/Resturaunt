const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/menu',(req,res)=>{
  res.render('menu')
})

router.get('resutraunt',(req,res)=>{
  res.json({resturaunt:"Mcdonalds"})
})
module.exports = router;
