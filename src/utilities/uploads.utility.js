const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");


const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "CLOUDINARY_URL=cloudinary://441674516767312:xWCoqK0NpN_Jc0P6KC7WcvcbtGM@dfqrvlnib");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname)
    }
})

module.exports = storage;