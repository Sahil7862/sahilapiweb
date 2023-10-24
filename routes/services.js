const express = require("express");
const router = express.Router();

const{getallservices,
    getallservicestesting,
} =require("../controllers/services");

router.route("/").get(getallservices);
router.route("/testing").get(getallservicestesting);

module.exports = router;