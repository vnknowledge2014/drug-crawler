import { searchDrug } from "@src/controllers";
import { Router, Request, Response } from "express";

const searchRoute = Router();

searchRoute.get('/:drugName', async (req: Request, res: Response) => {
    const { drugName } = req.params
    const rs = await searchDrug(drugName, 10)
    if (rs.length === 0) {
        return res.status(404).json({
            error: `Not found`
        })
    }
    return res.json(rs)
});

export {searchRoute}