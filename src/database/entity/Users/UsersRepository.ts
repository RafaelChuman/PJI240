
import { PostgresDataSource } from "../../../../typeORM_DataSourcePG";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";
import { User } from "./User";

class UsersRepository implements IUsersRepository {

  private static INSTANCE: UsersRepository;

  async create({ firstName, lastName }: ICreateUserDTO): Promise<User> {

    const user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    
    await PostgresDataSource.manager.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await PostgresDataSource.manager.find(User);
    
    return users;
  }
}

export { UsersRepository };
