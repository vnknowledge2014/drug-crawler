import { searchDrugExactly } from "@src/controllers"
import { rpMessage } from "@src/libs"
import { Router, Request, Response } from "express"

const detailRoute = Router();

detailRoute.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const rs = await searchDrugExactly(id)

    if (JSON.stringify(rs).length === 0) {
        return res.json(rpMessage('404', 'Not Found'))
    }
    return res.json({
        ...rpMessage('200', 'Success'),
        data: rs
    })
});

export { detailRoute }