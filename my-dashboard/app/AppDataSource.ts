import 'reflect-metadata'; // Must be imported once for decorators to work
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Agency } from './entities/Agency';
import { Contact } from './entities/Contact';
import { User } from './entities/User';


// Load environment variables (since this file might be run outside of the main app)
dotenv.config();

// src/AppDataSource.ts

// ... imports ...
// src/AppDataSource.ts

// ... imports ...
// src/AppDataSource.ts

// src/AppDataSource.ts

export const AppDataSource = new DataSource({
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
    entities: [Agency, Contact, User],
    migrations: [
        "dist-typeorm/app/migrations/*.js" 
    ],

    subscribers: [],
});