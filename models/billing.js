const { Schema, model } = require('mongoose')

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },
    phone: {
        type: String,
        required: true,
        length: 11,
        maxLength: 1024
    },
    payableAmount:{
        type: Number,
        minimum:1,
        required: true,
    },
}, { timestamps: true }

)

module.exports.billing = model('Billing', userSchema);