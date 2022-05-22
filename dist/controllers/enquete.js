"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Enquete_1 = __importDefault(require("../models/Enquete"));
var router = express_1.default.Router();
router.post('/', function (req, res) {
    const enquete = req.body;
    const EnqueteRepository = (0, typeorm_1.getRepository)(Enquete_1.default);
    EnqueteRepository.save(enquete);
    res.send(enquete);
});
exports.default = router;
