import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Contact } from './Contact';
 // Import the Contact Entity

@Entity('agency') // This maps the class to the 'agency' table
export class Agency {
    @PrimaryColumn('varchar')
    id!: string;

    @Column('varchar')
    name!: string;

    @Column('varchar')
    state!: string;

    @Column({ name: 'state_code', type: 'varchar', nullable: true })
    stateCode!: string | null;

    @Column({ type: 'varchar', nullable: true })
    type!: string | null;

    @Column({ type: 'int', nullable: true })
    population!: number | null;

    @Column({ type: 'varchar', nullable: true })
    website!: string | null;

    @Column({ name: 'total_schools', type: 'int', nullable: true })
    totalSchools!: number | null;

    @Column({ name: 'total_students', type: 'int', nullable: true })
    totalStudents!: number | null;

    @Column({ name: 'mailing_address', type: 'varchar', nullable: true })
    mailingAddress!: string | null;
    
    @Column({ name: 'grade_span', type: 'varchar', nullable: true })
    gradeSpan!: string | null;

    @Column({ type: 'varchar', nullable: true })
    locale!: string | null;

    @Column({ name: 'csa_cbsa', type: 'varchar', nullable: true })
    csaCbsa!: string | null;

    @Column({ name: 'domain_name', type: 'varchar', nullable: true })
    domainName!: string | null;

    @Column({ name: 'physical_address', type: 'varchar', nullable: true })
    physicalAddress!: string | null;

    @Column({ type: 'varchar', nullable: true })
    phone!: string | null;
    
    @Column({ type: 'varchar', nullable: true })
    status!: string | null;

    @Column({ name: 'student_teacher_ratio', type: 'float', nullable: true })
    studentTeacherRatio!: number | null;

    @Column({ name: 'supervisory_union', type: 'varchar', nullable: true })
    supervisoryUnion!: string | null;

    @Column({ type: 'varchar', nullable: true })
    county!: string | null;

    @Column({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt!: Date | null;

    @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt!: Date | null;    
    
    // RELATIONSHIP: Agency has many Contacts
    @OneToMany(() => Contact, (contact) => contact.agency)
    contacts!: Contact[];
}