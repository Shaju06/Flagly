import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signup(email: string, password: string): Promise<string> {
    // Implement signup logic here
    return 'User signed up successfully';
  }

  async login(username: string, password: string): Promise<string> {
    // Implement login logic here
    return 'User logged in successfully';
  }
}
