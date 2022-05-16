import { IUsersRepository, ICreateUserDTO } from "entity/Users/IUsersRepository";
import { User } from "entity/Users/User";


class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListUserUseCase };
