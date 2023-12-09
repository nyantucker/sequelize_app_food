import express from 'express'
import { likeByRes, likeByUser, likeRes, oderMon, rateByRes, rateByUser, rateRes } from '../controllers/appFoodController.js'

export const appFoodRoute = express.Router()

// API like nhà hàng
appFoodRoute.post("/like-res", likeRes)

// API lấy danh sách like theo nhà hàng
appFoodRoute.get("/like-by-res", likeByRes)

// API lấy danh sách like theo user
appFoodRoute.get("/like-by-user", likeByUser)

// API thêm đánh giá
appFoodRoute.post("/rate-res", rateRes)

// API lấy danh sách đánh giá theo nhà hàng
appFoodRoute.get("/rate-by-res", rateByRes)

// API lấy danh sách đánh giá theo user
appFoodRoute.get("/rate-by-user", rateByUser)

// API user đặt món
appFoodRoute.post("/oder/:userId", oderMon)
