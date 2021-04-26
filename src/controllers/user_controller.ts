import { Request, Response } from "express";
import { User } from "./../models/user";

export const index = async (request: Request, response: Response) => {
    await User.find({}, (error, users) => {
        response.status(200).json(users);
    });
};

export const create = async (request: Request, response: Response) => {
    const userData = {
        name: request.params.name,
        email: request.params.email,
        password: request.params.password
    };

    try {
        const user = await User.create(userData);

        response.status(201).json({
            status: "success",
            data: user
        });
    } catch (error) {
        response.status(500).json({
            status: "failed",
        });
    };
};

export const edit = async (request: Request, response: Response) => {
    const userData = {
        name: request.params.name,
        email: request.params.email,
        password: request.params.password
    };

    try {
        const user = await User.findOneAndUpdate({
            _id: request.query.id
        }, userData);

        response.status(200).json({
            status: "success",
            data: user
        });
    } catch (error) {
        response.status(500).json({
            status: "failed",
        });
    };
};

export const destroy = async (request: Request, response: Response) => {
    try {
        const user = await User.findOneAndDelete({
            _id: request.query.id
        });

        response.status(200).json({
            status: "success"
        });
    } catch (error) {
        response.status(500).json({
            status: "failed",
        });
    };
};

export default index;