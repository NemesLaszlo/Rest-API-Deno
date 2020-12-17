import {Router} from 'https://deno.land/x/oak/mod.ts'
// import {getProducts, getProduct, addProduct, updateProduct, deleteProduct} from './controllers/no_database_products.ts'
import {getProducts, getProduct, addProduct, updateProduct, deleteProduct} from './controllers/products.ts'

const router = new Router()

router.get('/api/products', getProducts)
    .get('/api/products/:id', getProduct)
    .post('/api/products/add', addProduct)
    .put('/api/products/update/:id', updateProduct)
    .delete('/api/products/delete/:id', deleteProduct)

export default router