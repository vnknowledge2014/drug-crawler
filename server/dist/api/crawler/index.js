"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawlerRoute = void 0;
const config_1 = require("@src/config");
const controllers_1 = require("@src/controllers");
const express_1 = require("express");
const crawlerRoute = (0, express_1.Router)();
exports.crawlerRoute = crawlerRoute;
crawlerRoute.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id === config_1.TOKENCRAWLER) {
        (0, controllers_1.drugCrawler)();
        return res.json({
            message: 'Crawler is running...'
        });
    }
    return res.status(404).json({
        error: `You don't have permission to access this api`
    });
});
//# sourceMappingURL=index.js.map