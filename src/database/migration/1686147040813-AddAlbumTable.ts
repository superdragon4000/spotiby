import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAlbumTable1686147040813 implements MigrationInterface {
    name = 'AddAlbumTable1686147040813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "album" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "album"`);
    }

}
