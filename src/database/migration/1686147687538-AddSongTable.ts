import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSongTable1686147687538 implements MigrationInterface {
    name = 'AddSongTable1686147687538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "song" ("id" SERIAL NOT NULL, "artistName" character varying NOT NULL, "producer" character varying NOT NULL, "writer" character varying NOT NULL, "title" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "genre" character varying NOT NULL, "source" character varying NOT NULL, "label" character varying NOT NULL, CONSTRAINT "UQ_32ce5459b59e9c992f82ca8d586" UNIQUE ("artistName"), CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "song"`);
    }

}
