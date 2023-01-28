const router = require('express').Router();
const { registerUser, loginUser } = require('../controllers/userControllers');

router.route('/registration')
    .post(registerUser)

router.route('/login')
    .post(loginUser)

// router.route('/billing-list')
//     .get(billingList)

// router.route('/add-billing')
//     .post(addBilling)

// router.route('/update-billing/:id')
//     .put(updateBilling)

// router.route('/delete-billing/:id')
//     .delete(deleteBilling)

module.exports = router;