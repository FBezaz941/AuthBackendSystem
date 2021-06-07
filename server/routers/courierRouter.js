const router = require("express").Router();
const Courier = require("../models/courierModel");
const auth = require("../middleware/auth");
router.post("/", auth ,async (req,res) => {
    try {
        const {name, date, destination}=req.body; 

        const newCourier = new Courier({
            name, date, destination,
        });
        const savedCourier = await newCourier.save();

        res.json(savedCourier);
    } catch (err) {
        console.error(err);
        res.status(500).send();
      }
});
router.get("/", auth, async (req,res)=> {
    try {
        const couriers = await Courier.find();
        res.json(couriers);
    } catch (err) {
        console.error(err);
        res.status(500).send();
      }
})

module.exports = router;