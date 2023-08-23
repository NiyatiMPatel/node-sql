import {
 deleteSingleProduct,
 fetchAllProducts,
 fetchSingleProduct,
 saveProduct,
 updateProduct
} from "../models/product.model";

// CAN USE SAME FILE (add-product.ejs OR edit-product.ejs) TO DO BOTH ADD AND EDIT PRODUCT 

// ADMIN GET ADD PRODUCT FORM PAGE
export const getAdminAddProduct = (req, res, next) => {
 // res.render('admin/add-product', {
 res.render('admin/edit-product', {
  pageTitle: 'Add Product',
  path: '/admin/add-product',
  editing: false,
 });
}

// ADMIN POST ADD PRODUCT
export const postAdminAddProduct = (req, res, next) => {
 const { title, imageUrl, description, price } = req.body
 saveProduct(null, title, imageUrl, description, price).then(() => { return res.redirect('/admin/products') }).catch(err => {
  console.log("🚀 ~ file: admin.controller.js:24 ~ saveProduct ~ err:", err)
 })

}

// ADMIN GET PRODUCTS
export const getAdminProducts = (req, res, next) => {
 // WITH DATA FILE
 fetchAllProducts().then(([rows, fieldData]) => {
  res.render('admin/admin-products', {
   prods: rows,
   pageTitle: 'Admin-Products',
   path: '/admin/products',
  });
 }).catch((err) => {
  console.log("file: admin.controller.js:33 ~ getAdminProducts ~ err:", err);
 })
}

// ADMIN GET EDIT PRODUCT FORM/PAGE
export const getEditAdminProduct = (req, res, next) => {
 const { id } = req.params
 const { edit } = req.query
 if (!edit) {
  return res.redirect('/admin/products')
 }
 fetchSingleProduct(id).then(([rows, fieldData]) => {
  // console.log("file: admin.controller.js:60 ~ fetchSingleProduct ~ rows:", rows);
  res.render('admin/edit-product', {
   prods: rows[0],
   pageTitle: 'Edit Product',
   path: '/admin/edit-product',
   editing: edit,
  });
 }).catch((err) => {
  console.log("file: admin.controller.js:51 ~ getEditAdminProduct ~ err:", err);
 })
}

// ADMIN POST UPDATE PRODUCT
export const postAdminUpdatedProduct = (req, res, next) => {
 const { title, imageUrl, price, description, productId } = req.body;
 updateProduct(productId, title, imageUrl, description, price).then(() => {
  res.redirect('/admin/products')
 }).catch((err) => {
  console.log("file: admin.controller.js:67 ~ postAdminUpdatedProduct ~ err:", err);
 })
}

// ADMIN DELETE PRODUCT
export const deleteAdminProduct = (req, res, next) => {
 const { productId } = req.body;
 deleteSingleProduct(productId)
 res.redirect('/admin/products')
}