import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ResendClient } from './resend-client';

@Module({
    providers: [EmailService, ResendClient]
})
export class EmailModule {}
