import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword
  } from 'class-validator';
  
  export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
  }