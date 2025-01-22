import { Injectable, Logger } from "@nestjs/common";
import { Resend } from "resend";

@Injectable()
export class ResendClient {
    private resend: Resend;

    constructor(){
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }

    async sendEmail(to: string, subject: string, html: string): Promise<{ code: number, success: boolean; message: string }>{
        try {
            const {data, error} = await this.resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to,
                subject,
                html
            })

            if (error) {
                return {
                    code: error["statusCode"],
                    success: false,
                    message: error.message
                }
            }
            return {
                code: 200,
                success: true,
                message: data.id
            };
        } catch (error) {
            return {
                code: 500,
                success: false,
                message: `Failed to send email: ${error.message}`
            }
        }
    }
}
