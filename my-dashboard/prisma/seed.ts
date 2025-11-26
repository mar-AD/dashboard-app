import 'reflect-metadata'; // Must be the first import
import { AppDataSource } from '../app/AppDataSource';
import { Agency } from '../app/entities/Agency';
import { Contact } from '../app/entities/Contact';

// Keep all the file system and path imports
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import 'dotenv/config';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Types for CSV rows (Keep these, as they are used to read the CSV)
// ... (AgencyRow and ContactRow types remain the same) ...
type AgencyRow = {
  id: string
  name: string
  state: string
  state_code?: string // @map("state_code")
  type?: string
  population?: string // Note: CSV data comes as string, converted to number later
  website?: string
  total_schools?: string // @map("total_schools")
  total_students?: string // @map("total_students")
  mailing_address?: string // @map("mailing_address")
  grade_span?: string // @map("grade_span")
  locale?: string
  csa_cbsa?: string // @map("csa_cbsa")
  domain_name?: string // @map("domain_name")
  physical_address?: string // @map("physical_address")
  phone?: string
  status?: string
  student_teacher_ratio?: string // @map("student_teacher_ratio")
  supervisory_union?: string // @map("supervisory_union")
  county?: string
  created_at?: string // @map("created_at")
  updated_at?: string // @map("updated_at")
}

type ContactRow = {
  id: string
  first_name: string // @map("first_name")
  last_name: string // @map("last_name")
  title?: string
  email: string
  phone?: string
  email_type?: string // @map("email_type")
  contact_form_url?: string // @map("contact_form_url")
  created_at: string // @map("created_at")
  updated_at: string // @map("updated_at")
  agency_id: string // @map("agency_id")
  firm_id?: string // @map("firm_id")
  department?: string
}

async function main() {
  console.log("🌱 Starting TypeORM seed process...");

  // 1. Initialize DataSource
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("Database connection initialized.");
  }
  
  // 2. Get Repositories
  const agencyRepository = AppDataSource.getRepository(Agency);
  const contactRepository = AppDataSource.getRepository(Contact);

  // ------ LOAD AGENCIES ------
  const agenciesPath = path.join(__dirname, 'seed-data', 'agencies_agency_rows.csv');
  const agencies = parse(fs.readFileSync(agenciesPath, 'utf-8'), { columns: true }) as AgencyRow[];

  console.log(`👉 Seeding ${agencies.length} agencies...`);

  for (const a of agencies) {
    // TypeORM upsert is typically done via checking existence, then saving/updating.
    let agency = await agencyRepository.findOne({ where: { id: a.id } });

    // 3. Create or update the agency entity
    if (!agency) {
      agency = agencyRepository.create({
        id: a.id,
        name: a.name,
        state: a.state,
        stateCode: a.state_code,
        type: a.type,
        population: a.population ? Number(a.population) : null,
        website: a.website,
        totalSchools: a.total_schools ? Number(a.total_schools) : null,
        totalStudents: a.total_students ? Number(a.total_students) : null,
        mailingAddress: a.mailing_address,
        gradeSpan: a.grade_span,
        locale: a.locale,
        csaCbsa: a.csa_cbsa,
        domainName: a.domain_name,
        physicalAddress: a.physical_address,
        phone: a.phone,
        status: a.status,
        studentTeacherRatio: a.student_teacher_ratio ? Number(a.student_teacher_ratio) : null,
        supervisoryUnion: a.supervisory_union,
        county: a.county,
        createdAt: a.created_at ? new Date(a.created_at) : null,
        updatedAt: a.updated_at ? new Date(a.updated_at) : null,
      });
    } else {
      // If it exists, update relevant fields (optional, based on your desired upsert behavior)
      Object.assign(agency, {
        name: a.name,
        state: a.state,
        // ... (other fields you want to update)
      });
    }
    
    await agencyRepository.save(agency);
  }

  // ------ LOAD CONTACTS ------
  const contactsPath = path.join(__dirname, 'seed-data', 'contacts_contact_rows.csv');
  const contacts = parse(fs.readFileSync(contactsPath, 'utf-8'), { columns: true }) as ContactRow[];

  console.log(`👉 Seeding ${contacts.length} contacts...`);

  for (const c of contacts) {
    // Check for parent agency existence
    const agencyExists = await agencyRepository.findOne({ where: { id: c.agency_id } });
    if (!agencyExists) continue;

    let contact = await contactRepository.findOne({ where: { id: c.id } });
    
    // 4. Create or update the contact entity
    if (!contact) {
      contact = contactRepository.create({
        id: c.id,
        firstName: c.first_name,
        lastName: c.last_name,
        title: c.title,
        email: c.email,
        phone: c.phone,
        emailType: c.email_type,
        contactFormUrl: c.contact_form_url,
        createdAt: new Date(c.created_at),
        updatedAt: new Date(c.updated_at),
        agencyId: c.agency_id, // TypeORM handles the foreign key
        firmId: c.firm_id,
        department: c.department,
      });
    } else {
        // Update logic if contact exists
    }

    await contactRepository.save(contact);
  }

  console.log("✔ TypeORM Seed complete!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    // 5. Explicitly close the connection
    if (AppDataSource.isInitialized) {
        await AppDataSource.destroy();
    }
  });