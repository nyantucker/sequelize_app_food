import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";

let model = initModels(sequelize)
let Op = Sequelize.Op;


export const likeRes = async (req,res) => {
    try {
        let { user_id , res_id } = req.body;
        let newLike = {
            user_id,
            res_id,
            date_like: new Date()
        }
        console.log(newLike);
        await model.like_res.create(newLike)
        res.status(200).send("like thành công")
    } catch {
        res.status(500).send("like không thành công")
    }
}

export const likeByRes = async (req,res) => {
    try {
        let data = await model.like_res.findAll({
            where: {
                res_id: {
                    [Op.not]: null
                }
            },
            include: ["re"]
        })
        res.status(200).send(data)
    } catch {
        res.status(500).send("Lấy danh sách thất bại")
    }
}

export const likeByUser = async (req,res) => {
    try {
        let data = await model.like_res.findAll({
            where: {
                user_id: {
                    [Op.not]: null
                }
            },
            include: ["user"]
        })
        res.status(200).send(data)
    } catch {
        res.status(500).send("Lấy danh sách thất bại")
    }
}

export const rateRes = async (req,res) => {
    try {
        let { user_id , res_id, amount } = req.body;
        let newRate = {
            user_id,
            res_id,
            amount,
            date_rate: new Date()
        }
        await model.rate_res.create(newRate)
        res.status(200).send("đánh giá thành công")
    } catch {
        res.status(500).send("đánh giá không thành công")
    }
}

export const rateByRes = async (req,res) => {
    try {
        let data = await model.rate_res.findAll({
            where: {
                res_id: {
                    [Op.not]: null
                }
            },
            include: ["re"]
        })
        res.status(200).send(data)
    } catch {
        res.status(500).send("Lấy danh sách thất bại")
    }
}

export const rateByUser = async (req,res) => {
    try {
        let data = await model.rate_res.findAll({
            where: {
                user_id: {
                    [Op.not]: null
                }
            },
            include: ["user"]
        })
        res.status(200).send(data)
    } catch {
        res.status(500).send("Lấy danh sách thất bại")
    }
}

export const oderMon = async (req,res) => {
    try {
        let { userId } = req.params
        let { food_id, amount, code, arr_sub_id } = req.body;
        let newOder = {
            user_id: userId,
            food_id,
            amount,
            code,
            arr_sub_id,
        }
        await model.rate_res.create(newOder)
        res.status(200).send("đặt món thành công")
    } catch {
        res.status(500).send("đặt món không thành công")
    }
}