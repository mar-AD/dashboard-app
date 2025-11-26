"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata"); // Must be imported once for decorators to work
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const Agency_1 = require("./entities/Agency");
const Contact_1 = require("./entities/Contact");
const User_1 = require("./entities/User");
// Load environment variables (since this file might be run outside of the main app)
dotenv.config();
// src/AppDataSource.ts
// ... imports ...
// src/AppDataSource.ts
// ... imports ...
// src/AppDataSource.ts
// src/AppDataSource.ts
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    // --- USE INDIVIDUAL FIELDS HERE ---
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // --- APPLY SSL FIX HERE ---
    ssl: {
        rejectUnauthorized: false, // The essential fix
    },
    // Remove the extra block, as the ssl property is now at the top level
    synchronize: false,
    logging: ['error', 'warn'],
    entities: [Agency_1.Agency, Contact_1.Contact, User_1.User],
    migrations: [
        "dist-typeorm/app/migrations/*.js"
    ],
    subscribers: [],
});
