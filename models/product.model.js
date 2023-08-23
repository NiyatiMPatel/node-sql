import db from '../util/sqldatabase';

// CREATE/ADD/POST PRODUCT THROUGH ADMIN ADD PRODUCT
export const saveProduct = (id, title, imageUrl, description, price) => {
 const product = {
  id: id,
  title: title,
  imageUrl: imageUrl,
  description: description,
  price: price
 };
 return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [title, price, description, imageUrl])
}

// FETCH/GET ALL PRODUCTS LIST
export const fetchAllProducts = () => {
 return db.execute('SELECT * FROM products');
}

// FETCH/GET SINGLE PRODUCT
export const fetchSingleProduct = (id) => {
 return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
}

// UPDATE PRODUCT
export const updateProduct = (id, title, imageUrl, description, price) => {
 return db.execute("UPDATE products SET title=?, price=?, description=?, imageUrl=? WHERE id = ?", [title, price, description, imageUrl, id])
}

// DELETE SINGLE PRODUCT
export const deleteSingleProduct = (id) => {
 return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
}
