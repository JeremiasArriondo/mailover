import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ResendClient } from './resend-client';
import { EmailScheduler } from './email.scheduler';
import { EmailController } from './email.controller';

@Module({
    controllers: [EmailController],
    providers: [EmailService, ResendClient, EmailScheduler]
})
export class EmailModule {}
