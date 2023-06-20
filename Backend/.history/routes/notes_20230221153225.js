const express = require('express');
const router = express.Router();
const fetchuser = require('./middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator')

router.get('/',(req,res)=>{
    
    res.send([])
})

module.exports= router