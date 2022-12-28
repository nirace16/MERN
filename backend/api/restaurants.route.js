import express from "express";
import RestaurantsCtrl from "../dao/restaurantsDAO";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

export default router;
