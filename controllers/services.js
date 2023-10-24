const service =require("../models/service")


const getallservices = async (req, res) => {

 
    const ourservices= await service.find(req.qurey);
    res.status(200).json({ ourservices });
};

const getallservicestesting = async (req, res) => {
    const ourservices= await service.find(req.qurey);
    res.status(200).json({ ourservices });
};

module.exports = { getallservices, getallservicestesting };
