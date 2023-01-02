
const express=require('express');
const router=express.Router();

const ctr=require('./home.ctrl');

router.get("/", ctr.home);

router.get("/login",ctr.login);

module.exports =router;