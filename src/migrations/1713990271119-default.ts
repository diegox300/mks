import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1713990271119 implements MigrationInterface {
    name = 'Default1713990271119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "filmes" ("id" SERIAL NOT NULL, "name" text NOT NULL, "sinopse" text NOT NULL, CONSTRAINT "PK_e7531027ca859ab4acb3a313658" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "filmes"`);
    }

}
