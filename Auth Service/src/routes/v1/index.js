const express = require('express');
const {userController} = require('../../controller/index');
const {requestAuthValidator} = require('../../middleware/index');

const router = express.Router();

// router.post('/user', create);
router.delete('/user/:id', requestAuthValidator.validateUserAuth, userController.destroy);
router.patch('/user/:id', requestAuthValidator.validateUserAuth, userController.update);
router.post('/user', requestAuthValidator.validateSignup, userController.signUp);
router.post('/user/login', requestAuthValidator.validateUserAuth, userController.login);

router.get('/isAuthenticated', userController.isAuthenticated);

router.get('/isAdmin', requestAuthValidator.validateIsAdminRequest, userController.isAdmin);

module.exports = router;