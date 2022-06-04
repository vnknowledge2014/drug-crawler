import { TOKENCRAWLER } from "@src/config"
import { drugCrawler } from "@src/controllers"
import { rpMessage } from "@src/libs"
import { Router, Request, Response } from "express"

const crawlerRoute = Router();

crawlerRoute.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    
    if (id === TOKENCRAWLER) {
        drugCrawler()
        return res.json(rpMessage('200', 'Crawler is running'))
    }
    return res.json(rpMessage('404', 'Not Found'));
});

export {crawlerRoute}