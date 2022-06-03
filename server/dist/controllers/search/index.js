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
exports.searchDrug = void 0;
const database_1 = __importDefault(require("@src/database"));
const searchDrug = (drugName, limitRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const rs = yield database_1.default.collection('drugbank').where('tenThuocEn', '>=', drugName.toLowerCase()).limit(limitRecord).get();
    if (rs.empty) {
        return [];
    }
    else {
        return rs.docs.map((doc) => doc.data());
    }
});
exports.searchDrug = searchDrug;
//# sourceMappingURL=index.js.map