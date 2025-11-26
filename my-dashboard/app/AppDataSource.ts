import 'reflect-metadata'; // Must be imported once for decorators to work
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Agency } from './entities/Agency';
import { Contact } from './entities/Contact';


// Load environment variables (since this file might be run outside of the main app)
dotenv.config();

// src/AppDataSource.ts

// ... imports ...

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    
    // --- ADD THIS BLOCK ---
    extra: {
        // Tells the underlying 'pg' driver to trust the connection certificate
        ssl: {
            rejectUnauthorized: false,
        },
    },
    // ----------------------
    
    synchronize: true, 
    logging: ['error'],
    entities: [Agency, Contact],
});