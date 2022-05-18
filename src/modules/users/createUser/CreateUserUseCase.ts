
import { IUsersRepository, ICreateUserDTO } from "@entity/Users/IUsersRepository";
import { User } from "@entity/Users/User";
import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";



class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO): Promise<User> {

    const userNameAlredyExist = await this.usersRepository.findByUserName(data.userName);

    if(userNameAlredyExist === null)
    {    
      const passwordHash = await hash(data.password, 8);

      data.password = passwordHash;

      return await this.usersRepository.create(data);
    }

    throw new AppError("User Already Exists.");

  }
}

export { CreateUserUseCase };
