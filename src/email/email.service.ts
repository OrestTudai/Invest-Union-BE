import { ResendService } from 'nestjs-resend';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  constructor(private readonly resendService: ResendService) {}

  async send(dto: SendEmailDto) {
    const { name, companyName, email, phone, message } = dto;

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await this.resendService.send({
      from: `${name}, ${companyName} <onboarding@resend.dev>`,
      to: 'invest-union@ukr.net',
      subject: companyName,
      html,
    });
  }
}
