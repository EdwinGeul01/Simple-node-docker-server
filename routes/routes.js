const router = require('express').Router()


router.get('/' , (req , res)=>{
    res.send('PRINCIPAL PAGE')
})


module.exports  = router