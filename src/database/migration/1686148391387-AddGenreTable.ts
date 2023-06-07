import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGenreTable1686148391387 implements MigrationInterface {
    name = 'AddGenreTable1686148391387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genre" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "UQ_1d3149227466edab0044767a78e" UNIQUE ("title"), CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "genre"`);
    }

}
