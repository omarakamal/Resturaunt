const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/menu',(req,res)=>{
  res.render('menu')
})

router.get('/menu-item',(req,res)=>{
  res.render('menu-item')
})

module.exports = router;
