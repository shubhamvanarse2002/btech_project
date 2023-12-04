const express =require ('express')
const router = express.Router()
const {
  getProductsById,
  getProducts,
  getProductsLimit,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} =require ('../controllers/productController.js')
const { protect, admin } =require ('../middleware/authMiddleware.js')

router.route('/').get(getProducts)
router.route('/limit').get(getProductsLimit)
router.route('/').post(protect, admin, createProduct)
router.route('/:id').get(getProductsById)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/:id').put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.route('/top/:top').get(getTopProducts)

module.exports=router;
