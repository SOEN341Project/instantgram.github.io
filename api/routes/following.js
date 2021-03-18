var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var expressValidator = require('express-validator');
router.use(expressValidator());
var followService = require('../service_layer/followService');

router.get('/:username', async(req,res,next)=>{
    const username = req.params.username;
    console.log(username);
    const FollowService = new followService();
    const response = await FollowService.checkFollowing(username);
    return res.status(200).send(response);
})

module.exports = router;