import { Injectable } from "@nestjs/common";
import { ResendClient } from "./resend-client";

@Injectable()
export class EmailService {
    constructor(private readonly resendClient: ResendClient) {}

    async sendEmail(userEmail: string): Promise<void> {
        const subject = "Una flor por cada día";
        const html = `<p>Hello! Thanks for joining us.</p>`;
        await this.resendClient.sendEmail(userEmail, subject, html);
    }
}