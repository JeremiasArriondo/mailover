import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ResendClient } from "./resend-client";

@Injectable()
export class EmailService {
    constructor(private readonly resendClient: ResendClient) {}

    async sendEmail(userEmail: string): Promise<{ success: boolean; message: string }> {
        const subject = "Una flor por cada día";
        const html = `<p>Hello! Thanks for joining us.</p>`;
        const clientResponse = await this.resendClient.sendEmail(userEmail, subject, html);
        if (!clientResponse.success) {
            throw new HttpException(
                `Error al enviar el correo: ${clientResponse.message}`,
        clientResponse.code,
            )
        }

        return clientResponse
    }
}