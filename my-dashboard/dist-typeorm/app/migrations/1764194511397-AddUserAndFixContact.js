"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserAndFixContact1764194511397 = void 0;
class AddUserAndFixContact1764194511397 {
    constructor() {
        this.name = 'AddUserAndFixContact1764194511397';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "email" character varying NOT NULL, "hashed_password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.AddUserAndFixContact1764194511397 = AddUserAndFixContact1764194511397;
