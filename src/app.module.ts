import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    EmailModule
  ],
})
export class AppModule {}
