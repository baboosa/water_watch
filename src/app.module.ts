/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConsumptionModule } from './consumption/consumption.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'water_monitoring',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ConsumptionModule,
  ],
})
export class AppModule {}
