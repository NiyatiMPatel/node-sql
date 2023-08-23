import {
 fetchAllProducts, fetchSingleProduct
} from "../models/product.model";


// SHOP GET INDEX
export const getShopIndexProducts = (req, res, next) => {
 fetchAllProducts().then(([rows, fieldData]) => {
  // console.log("🚀 ~ file: customer.controller.js:19 ~ fetchAllProducts ~ rows:", rows)
  // console.log("🚀 ~ file: customer.controller.js:11 ~ fetchAllProducts ~ fieldData:", fieldData)
  res.render('customer/index', {
   prods: rows,
   pageTitle: 'Shop',
   path: '/',
  });
 }).catch(err => {
  console.log("🚀 ~ file: customer.controller.js:11 ~ fetchAllProducts ~ err:", err)
 })
}

// SHOP GET PRODUCTS
export const getShopProducts = (req, res, next) => {
 fetchAllProducts().then(([rows, fieldData]) => {
  res.render('customer/products-list', {
   prods: rows,
   pageTitle: 'Products',
   path: '/products',
  });
 }).catch(err => {
  console.log("🚀 ~ file: customer.controller.js:25 ~ fetchAllProducts ~ err:", err)
 });
}

// SHOP GET SINGLE PRODUCT
export const getShopSingleProduct = (req, res, next) => {
 const { id } = req.params
 fetchSingleProduct(id).then(([rows, fieldData]) => {
  // console.log("🚀 ~ file: customer.controller.js:50 ~ fetchSingleProduct ~ rows:", rows)
  res.render('customer/product-detail', {
   prods: rows[0],
   pageTitle: rows.title,
   path: '/products',  // FOR NAVIGATION MENU ITEMS TOBE HIGHLIGHTED/SHOWN ACTIVE
  });
 }).catch(err => {
  console.log("🚀 ~ file: customer.controller.js:42 ~ fetchSingleProduct ~ err:", err)
 });
}