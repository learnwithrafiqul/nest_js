import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTestFiels1683795886449 implements MigrationInterface {
    name = 'AddTestFiels1683795886449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` ADD \`test\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`test\``);
    }

}
