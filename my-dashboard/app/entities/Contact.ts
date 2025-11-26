import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Agency } from './Agency'; // Import the Agency Entity

@Entity('contact') // This maps the class to the 'contact' table
export class Contact {
    @PrimaryColumn('varchar')
    id!: string;

    @Column({ name: 'first_name', type: 'varchar' })
    firstName!: string;

    @Column({ name: 'last_name', type: 'varchar' })
    lastName!: string;

    @Column({ type: 'varchar', nullable: true })
    title!: string | null;

    @Column('varchar')
    email!: string;

    @Column({ type: 'varchar', nullable: true })
    phone!: string | null;

    @Column({ name: 'email_type', type: 'varchar', nullable: true })
    emailType!: string | null;

    @Column({ name: 'contact_form_url', type: 'varchar', nullable: true })
    contactFormUrl!: string | null;

    @Column({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    @Column({ name: 'updated_at', type: 'timestamp' })
    updatedAt!: Date;

    @Column({ name: 'agency_id', type: 'varchar' })
    agencyId!: string; // Foreign key column

    @Column({ name: 'firm_id', type: 'varchar', nullable: true })
    firmId!: string | null;

    @Column({ type: 'varchar', nullable: true })
    department!: string | null;

    // RELATIONSHIP: Contact belongs to one Agency
    @ManyToOne(() => Agency, (agency) => agency.contacts)
    @JoinColumn({ name: 'agency_id' }) // Specifies the foreign key column
    agency!: Agency;
}