import express from 'express';
import { getAllProducts } from '../controllers/productController';

const router = express.Router();


router.route('/products').get(getAllProducts);
module.exports = router;