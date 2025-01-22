import { Injectable, Logger } from "@nestjs/common";
import { Resend } from "resend";

@Injectable()
export class ResendClient {
    private logger : Logger;
    private resend: Resend;

    constructor(){
        this.logger = new Logger("Resend Client")
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }

    async sendEmail(to: string, subject: string, html: string): Promise<any>{
        try {
            const response = await this.resend.emails.send({
                from: 'jeremiasarriondo98@gmail.com',
                to,
                subject,
                html
            })
            return response;
        } catch (error) {
            throw new Error(`Failed to send email: ${error.message}`)
        }
    }
}
