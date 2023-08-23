import express from 'express';
import {
 getShopIndexProducts, getShopProducts, getCart, getCheckout, getOrders, getShopSingleProduct, postCart, deleteCartItem
} from '../controllers/customer.controller';


const router = express.Router()

// GET SHOP INDEX/ FIRST PAGE
router.get('/', getShopIndexProducts);

// GET SHOP PRODUCTS LIST PAGE
router.get('/products', getShopProducts);

// GET SHOP SINGLE PRODUCTDETAIL PAGE
router.get('/product/:id', getShopSingleProduct);

export default router;