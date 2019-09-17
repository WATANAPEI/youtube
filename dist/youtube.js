"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const https = require('https')
const https_1 = __importDefault(require("https"));
;
const options = {
    hostname: 'wpei.dev',
    port: 443,
    path: '/p-drum/',
    method: 'GET'
};
const req = https_1.default.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});
req.on('error', error => {
    console.error(error);
});
req.end();
//# sourceMappingURL=youtube.js.map