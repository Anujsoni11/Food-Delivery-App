const express = require('express');
const {create, destroy, update} = require('../../controller/user-controller');

const router = express.Router();

router.post('/user', create);
router.delete('/user/:id', destroy);
router.patch('/user/:id', update);

module.exports = router;