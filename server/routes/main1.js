const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

    const locals = {
       title : "My-Tailor-App",
       description :"Selling World-class clothes to your door step"

    }
    res.render('index',locals);

});

router.get('/about',(req,res)=>{
      
     res.render('about');
})



module.exports = router;