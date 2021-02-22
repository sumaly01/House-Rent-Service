const express = require("express");
const router = express.Router();
const validation = require("./../../modules/Property/propertyValidation");
const { authentication } = require("../../middleware/auth.middleware");
const propertyController = require("../../modules/Property/propertyController");
const uploaderHelper = require("../../helper/upload.helper");

<<<<<<< HEAD
router.post(
  "/save",
  authentication,
  uploaderHelper.arrayOfImage("images", 4),
  validation.sanitize,
  validation.validate,
  propertyController.saveProperty
);
router.post(
  "/edit/:id",
  authentication,
  uploaderHelper.arrayOfImage("images", 4),
  validation.sanitize,
  validation.validate,
  propertyController.editProperty
);
router.get("/all", propertyController.getAllProperty);
router.get("/single/:property_id", propertyController.getSingleProperty);
router.get("/user", authentication, propertyController.getAllPropertyOfUser);
router.delete(
  "/delete/:property_id",
  authentication,
  propertyController.deleteProperty
);
=======
router.post('/save', authentication, uploaderHelper.arrayOfImage('images', 4), validation.sanitize, validation.validate, propertyController.saveProperty)
router.post('/edit/:id', authentication, uploaderHelper.arrayOfImage('images', 4), validation.sanitize, validation.validate, propertyController.editProperty)
router.get('/all', propertyController.getAllProperty)
router.get('/single/:property_id', propertyController.getSingleProperty)
router.get('/user', authentication, propertyController.getAllPropertyOfUser)
router.delete('/delete/:property_id', authentication, propertyController.deleteProperty)
>>>>>>> a386b165532aed543c3638551c490895a2e97c93

module.exports = router;
