import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1683798566358 implements MigrationInterface {
    name = 'Test1683798566358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` ADD \`test2\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`test2\``);
    }

}
