import { TOKENCRAWLER } from "@src/config";
import { drugCrawler } from "@src/controllers";
import { Router, Request, Response } from "express";

const crawlerRoute = Router();

crawlerRoute.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    if (id === TOKENCRAWLER) {
        drugCrawler();
        return res.json({
            message: 'Crawler is running...'
        });
    }
    return res.status(404).json({
        error: `You don't have permission to access this api`
    });
});

export {crawlerRoute}