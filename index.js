import * as dotenv from "dotenv";

import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';

import rootDir from './util/path';

import adminRoutes from './routes/admin.router';
import customerRoutes from './routes/customer.router';

import { get404 } from "./controllers/errors.controller";

// import db from './util/sqldatabase'

// =================================================== //
dotenv.config();

const app = express();

// create application/json parser
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// =================================================== //
// INITIAL CHECK
// app.listen(process.env.PORT, () => {
//  return console.log("🚀 ~ file: index.js:9 ~ App listening on port:", process.env.PORT)
// })
// app.get('/', (req, res) => res.send('Hello World!'))

// SQL DATABASE CONNECTION TEST
// db.execute('SELECT * FROM products').then(result => {
//  console.log("🚀 ~ file: index.js:24 ~ db.execute ~ result:", result)
// }).catch(err => {
//  console.log("🚀 ~ file: index.js:26 ~ db.execute ~ err:", err)
// });

// =================================================== //

// TEMPLATING ENGINE EJS FOR VIEWS
app.set('view engine', 'ejs');
app.set('views', 'views');

// =================================================== //

// SERVING FILES STATICALLY FOR STATIC FILES ONLY HAS READ ACCESS
app.use(express.static(path.join(rootDir, 'public')))

// ==================================================== //

// IMPORT ROUTES
app.use('/admin', adminRoutes);
app.use(customerRoutes);

// CATCH ALL ROUTES (404 ERROR)
app.use(get404);

// ================================================ //

app.listen(process.env.PORT);