const mongoose = require("mongoose");
const modelOptions = require( "./modelOptions.js");

module.exports = mongoose.model(
    "Spaces",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        responsible: {
            type: String,
            required: true
        },
        available: {
            type: Boolean,
            default: true
        },
        sector: {
            type: String,
            required: true
        },
    }, modelOptions)
);