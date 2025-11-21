import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class SendEmailDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Company name is required' })
  companyName: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Phone is required' })
  @Matches(/^(?=.*\d)[0-9+()\- ]+$/, { message: 'Invalid phone number' })
  phone: string;

  @IsNotEmpty({ message: 'Message is required' })
  message: string;
}
