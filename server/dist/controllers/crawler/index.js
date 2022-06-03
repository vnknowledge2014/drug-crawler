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
exports.drugCrawler = void 0;
const config_1 = require("@src/config");
const database_1 = __importDefault(require("@src/database"));
const libs_1 = require("@src/libs");
const request_crawler_1 = require("@src/libs/request_crawler");
const COLLECTION_DEFAULT = config_1.COLLECTION ? config_1.COLLECTION : 'drugbank';
const drugCrawler = () => __awaiter(void 0, void 0, void 0, function* () {
    const drugCollection = [];
    const promiseArr = [];
    const drugCollectionModifier = [];
    for (let idx = 0; idx <= 51; idx += 1) {
        const rs = yield Promise.all([(0, request_crawler_1.httpGet)(idx)]);
        drugCollection.push(...rs);
    }
    const des = drugCollection.flat();
    const flatten = des.flat();
    for (let idx = 0; idx <= flatten.length - 1; idx += 1) {
        const rs = flatten[idx];
        drugCollectionModifier.push(Object.assign(Object.assign({}, rs), { tenThuocEn: (0, libs_1.convertViToEn)(rs.tenThuoc), meta: { fileName: `${process.env.DRUGBANKDOCS}${rs.meta.fileName}` } }));
    }
    for (let idx = 0; idx <= drugCollectionModifier.length - 1; idx += 1) {
        const rs = drugCollectionModifier[idx];
        promiseArr.push(database_1.default.collection(COLLECTION_DEFAULT).doc(rs.id).set(rs));
    }
    yield Promise.all(promiseArr);
});
exports.drugCrawler = drugCrawler;
//# sourceMappingURL=index.js.map