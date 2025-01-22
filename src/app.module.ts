import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EmailModule
  ],
})
export class AppModule {}
