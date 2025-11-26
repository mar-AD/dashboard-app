"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const typeorm_1 = require("typeorm");
const Agency_1 = require("./Agency"); // Import the Agency Entity
let Contact = class Contact {
};
exports.Contact = Contact;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar'),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar' }),
    __metadata("design:type", String)
], Contact.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar' }),
    __metadata("design:type", String)
], Contact.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email_type', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "emailType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_form_url', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "contactFormUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Contact.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'agency_id', type: 'varchar' }),
    __metadata("design:type", String)
], Contact.prototype, "agencyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'firm_id', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "firmId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Contact.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Agency_1.Agency, (agency) => agency.contacts, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)({ name: 'agency_id' }) // Specifies the foreign key column
    ,
    __metadata("design:type", Agency_1.Agency)
], Contact.prototype, "agency", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)('contact') // This maps the class to the 'contact' table
], Contact);
