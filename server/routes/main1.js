const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

    const locals = {
       title : "Wandermap",
       description :"My Personailzed and Lavish Expeience of UI/UX"

    }
    res.render('index',locals);

});

router.get('/about',(req,res)=>{
      
     res.render('about');
})



module.exports = router;