const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('./config/db');
const port = 3000;
const app = express(); 


const customerRoutes = require('./Routes/customerRoutes');
const tableRoutes = require('./Routes/tableRoutes');
const bookingRoutes = require('./Routes/bookingRoutes');
const staffRoleRoutes = require('./Routes/staffRoleRoutes');
const staffRoutes = require('./Routes/staffRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const menuRoutes = require('./Routes/menuRoutes');
const menuItemRoutes = require('./Routes/menuItemRoutes')
const orderMenuItemRoutes = require('./Routes/orderMenuItemRoute');
const ingredientTypeRoutes = require('./Routes/ingredientTypeRoutes');
const ingredientRoutes = require('./Routes/ingredientRoutes');
const menuItemIngredientRoutes = require('./Routes/menuItemIngredientRoutes');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use('/customer' , customerRoutes);
app.use('/table', tableRoutes);
app.use('/booking', bookingRoutes);
app.use('/staffRole' , staffRoleRoutes);
app.use('/staff', staffRoutes);
app.use('/order', orderRoutes);
app.use('/menu', menuRoutes);
app.use('/menuItem',menuItemRoutes);
app.use('/order-menu-item',orderMenuItemRoutes);
app.use('/ingredientType' , ingredientTypeRoutes);
app.use('/ingredient',ingredientRoutes);
app.use('/menu-item-ingredients', menuItemIngredientRoutes);

app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        }

)