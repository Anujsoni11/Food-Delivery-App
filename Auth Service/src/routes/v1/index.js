const express = require('express');
const {userController} = require('../../controller/index');

const router = express.Router();

// router.post('/user', create);
router.delete('/user/:id', userController.destroy);
router.patch('/user/:id', userController.update);
router.post('/user', userController.signUp);
router.post('/user/login', userController.login);

router.get('/isAuthenticated', userController.isAuthenticated);

module.exports = router;