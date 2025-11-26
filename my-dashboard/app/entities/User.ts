import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('user') // Maps the class to the 'user' table
export class User {
    // We'll use a standard UUID or simple ID for the primary key
    @PrimaryColumn('varchar')
    id!: string;

    @Column('varchar', { unique: true })
    email!: string;

    // In a real application, this would store a strong hash (e.g., argon2 or bcrypt)
    @Column({ name: 'hashed_password', type: 'varchar' })
    hashedPassword!: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;
}