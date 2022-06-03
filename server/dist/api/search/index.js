"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoute = void 0;
const controllers_1 = require("@src/controllers");
const express_1 = require("express");
const searchRoute = (0, express_1.Router)();
exports.searchRoute = searchRoute;
searchRoute.get('/:drugName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { drugName } = req.params;
    const rs = yield (0, controllers_1.searchDrug)(drugName, 10);
    if (rs.length === 0) {
        return res.status(404).json({
            error: `Not found`
        });
    }
    return res.json(rs);
}));
//# sourceMappingURL=index.js.map