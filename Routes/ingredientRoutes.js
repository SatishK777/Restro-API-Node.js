const express = require('express');
const router = express.Router();
const ingredientController = require('../Controller/ingredientController');


router.post('/', ingredientController.createIngredient);
router.get('/', ingredientController.getAllIngredients);
router.get('/:id', ingredientController.getIngredientById);

module.exports = router;
