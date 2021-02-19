
const express = require('express');
const router = express.Router();
const validation = require('./../../modules/Property/propertyValidation')
const { authentication } = require('../../middleware/auth.middleware');
const propertyController = require('../../modules/Property/propertyController');
const uploaderHelper = require('../../helper/upload.helper');



router.post('/save', authentication, uploaderHelper.arrayOfImage('images', 5), validation.sanitize, validation.validate, propertyController.saveProperty)
router.get('/all', propertyController.getAllProperty)
router.get('/single/:property_id', authentication, propertyController.getSingleProperty)
router.get('/user', authentication, propertyController.getAllPropertyOfUser)
router.delete('/delete/:property_id', authentication, propertyController.deleteProperty)

module.exports = router;