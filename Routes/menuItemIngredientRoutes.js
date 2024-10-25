const express = require('express');
const router = express.Router();
const menuItemIngredientController = require('../Controller/menuItemIngredientsController');


router.post('/', menuItemIngredientController.createMenuItemIngredient);
router.get('/', menuItemIngredientController.getAllMenuItemIngredients);
router.get('/:id', menuItemIngredientController.getMenuItemIngredientById);
router.put('/:id', menuItemIngredientController.updateMenuItemIngredient);
router.delete('/:id', menuItemIngredientController.deleteMenuItemIngredient);

module.exports = router;
