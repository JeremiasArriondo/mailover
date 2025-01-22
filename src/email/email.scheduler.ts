import { Injectable, Logger } from "@nestjs/common";
import { EmailService } from './email.service';
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class EmailScheduler {
    private readonly logger = new Logger(EmailScheduler.name);

    constructor(private readonly emailService: EmailService) {}

    @Cron(CronExpression.EVERY_DAY_AT_11AM)
    async handleDailyEmail(){
        this.logger.log("Started: send email")
        try {
            const email = "jeremiascabj@gmail.com";
            await this.emailService.sendEmail(email)
        } catch (error) {
            this.logger.error(`Error al enviar correos: ${error.message}`)
        }
    }

}