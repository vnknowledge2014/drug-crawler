"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_account_credentials_json_1 = __importDefault(require("./service-account-credentials.json"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firestore_1 = require("firebase-admin/firestore");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(service_account_credentials_json_1.default),
});
const db = (0, firestore_1.getFirestore)();
exports.default = db;
//# sourceMappingURL=index.js.map