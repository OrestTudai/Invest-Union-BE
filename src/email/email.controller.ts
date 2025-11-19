import { Controller, Post, Body } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async send(@Body() dto: SendEmailDto) {
    await this.emailService.send(dto);
  }
}
