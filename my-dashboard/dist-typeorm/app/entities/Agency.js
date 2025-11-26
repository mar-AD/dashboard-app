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
exports.Agency = void 0;
const typeorm_1 = require("typeorm");
const Contact_1 = require("./Contact");
// Import the Contact Entity
let Agency = class Agency {
};
exports.Agency = Agency;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar'),
    __metadata("design:type", String)
], Agency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Agency.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Agency.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state_code', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "stateCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_schools', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "totalSchools", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_students', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "totalStudents", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mailing_address', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "mailingAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grade_span', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "gradeSpan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "locale", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'csa_cbsa', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "csaCbsa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'domain_name', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "domainName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'physical_address', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "physicalAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'student_teacher_ratio', type: 'float', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "studentTeacherRatio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'supervisory_union', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "supervisoryUnion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "county", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], Agency.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Contact_1.Contact, (contact) => contact.agency),
    __metadata("design:type", Array)
], Agency.prototype, "contacts", void 0);
exports.Agency = Agency = __decorate([
    (0, typeorm_1.Entity)('agency') // This maps the class to the 'agency' table
], Agency);
