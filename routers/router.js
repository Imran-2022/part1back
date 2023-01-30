const router = require('express').Router();
const { addBilling, billingList, updateBilling, deleteBilling, singleBillingList,billingListSearch,billingTotal,totalPaidBill } = require('../controllers/billingControllers');
const { registerUser, loginUser } = require('../controllers/userControllers');
const { authorize } = require('../middlewares/authorize');

router.route('/registration')
    .post(registerUser)

router.route('/login')
    .post(loginUser)

router.route('/billing-list')
    .get([authorize],billingList)
router.route('/billing-list/total')
    .get([authorize],billingTotal)

router.route('/billing-list/totalPaid')
    .get([authorize],totalPaidBill)

router.route('/billing-list-search')
    .get([authorize],billingListSearch)
    
router.route('/billing-list/:id')
    .get([authorize],singleBillingList)

router.route('/add-billing')
    .post([authorize],addBilling)

router.route('/update-billing/:id')
    .put([authorize],updateBilling)

router.route('/delete-billing/:id')
    .delete([authorize],deleteBilling)

module.exports = router;