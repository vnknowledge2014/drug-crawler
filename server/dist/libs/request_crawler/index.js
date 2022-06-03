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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGet = void 0;
const config_1 = require("@src/config");
const https_1 = __importDefault(require("https"));
const httpGet = (pageCount) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        new Promise(((resolve, reject) => {
            const options = {
                hostname: config_1.DRUGBANK,
                port: config_1.PORTDRUGBANK,
                path: `${config_1.DRUGBANKSERVICES}page=${pageCount}&size=200${config_1.DRUGBANKSORTPARAMETER}`,
                accept: config_1.ACCEPT,
                "user-agent": config_1.USERAGENT,
                method: 'GET',
            };
            const req = https_1.default.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`);
                res.setEncoding('utf8');
                let returnData = '';
                res.on('data', d => {
                    returnData += d;
                });
                res.on('end', () => {
                    resolve(JSON.parse(returnData));
                });
            });
            req.on('error', error => {
                reject(error);
            });
            req.end();
        }))
    ]);
});
exports.httpGet = httpGet;
//# sourceMappingURL=index.js.map