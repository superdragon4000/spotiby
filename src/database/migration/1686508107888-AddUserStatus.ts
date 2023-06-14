import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserStatus1686508107888 implements MigrationInterface {
    name = 'AddUserStatus1686508107888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_status_enum" AS ENUM('activated', 'blocked', 'unactivated')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "status" "public"."user_status_enum" NOT NULL DEFAULT 'unactivated'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."user_status_enum"`);
    }

}
