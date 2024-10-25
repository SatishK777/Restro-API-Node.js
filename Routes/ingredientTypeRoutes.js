const express = require('express');
const router = express.Router();
const ingredientTypeController = require('../Controller/ingredientTypeController');


router.post('/', ingredientTypeController.createIngredientType);
router.get('/', ingredientTypeController.getAllIngredientTypes);
router.get('/:id', ingredientTypeController.getIngredientTypeById);

module.exports = router;
