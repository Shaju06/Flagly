import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  healthCheck(): string {
    return 'Auth service is healthy';
  }

  @Mutation(() => String)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    return await this.authService.signup(email, password);
  }
}
