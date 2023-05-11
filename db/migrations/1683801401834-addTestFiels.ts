import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTestFiels1683801401834 implements MigrationInterface {
    name = 'AddTestFiels1683801401834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` ADD \`test2\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`test2\``);
    }

}
