import { searchDrug } from "@src/controllers"
import { rpMessage } from "@src/libs"
import { Router, Request, Response } from "express"

const searchRoute = Router();

searchRoute.get('/:drugName', async (req: Request, res: Response) => {
    const { drugName } = req.params
    const rs = await searchDrug(drugName, 10)
    
    if (JSON.stringify(rs).length === 0) {
        return res.json(rpMessage('404', 'Not Found'))
    }
    return res.json({
        ...rpMessage('200', 'Success'),
        data: rs
    })
});

export { searchRoute }