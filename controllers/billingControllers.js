const _ = require('lodash')
const { billing } = require("../models/billing");

// addBilling 
module.exports.addBilling = async (req, res) => {
    const newBilling = new billing(_.pick(req.body, ['name', 'email', 'phone', 'payableAmount']));
    const result = await newBilling.save();
    return res.status(201).send({
        message: "new billing added successfully ✔",
    })
}

// get billingList
module.exports.billingList = async (req, res) => {
    const billingList = await billing.find({})
        .sort({ createdAt: -1 })
    return res.status(200).send(billingList)
}

// get billingList
module.exports.updateBilling = async (req, res) => {
    const billingId=req.params.id;
    const billingItem=await billing.findById(billingId)
    // res.send(billingItem)
    let updatedBilling=_.pick(req.body, ['name', 'email', 'phone', 'payableAmount']);
    _.assignIn(billingItem,updatedBilling)
    // like patch. update the changes only.

    billingItem.save((err, result) => {
        if (err) return res.status(500).send('something failed 🤦‍♂️')
        else return res.status(200).send({
            message: "product Updated successfully."
        })
    })
}

// get billingList
module.exports.deleteBilling = async (req, res) => {
    const _id=req.params.id;
    await billing.deleteOne({_id});
    return res.status(200).send("Deleted!")
}