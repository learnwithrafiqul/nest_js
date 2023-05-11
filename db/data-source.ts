import { Auth } from 'src/auth/entities/auth.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    //   password: 'root',
    database: 'nestjs_altersense',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    migrationsTableName: 'migrations',
    synchronize: false

};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
