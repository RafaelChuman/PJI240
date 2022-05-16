
import { PostgresDataSource } from "../../data-source";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";
import { User } from "./User";

class UsersRepository implements IUsersRepository {

  async create(data: ICreateUserDTO): Promise<User> {

    const user = new User();

    user.name = data.name;
    user.userName = data.userName;
    user.password = data.password;
    user.cep = data.cep;
    user.numberAddress = data.numberAddress;
    user.cellphone = data.cellphone;
    user.whatsApp = data.whatsApp;
    
    await PostgresDataSource.manager.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await PostgresDataSource.manager.find(User);
    
    return users;
  }

  async findByUserName(userNameParm: string): Promise<User> {

    const user =  await PostgresDataSource.manager.findOneBy(User, {
      userName: userNameParm
    } );

    if(user === null)
      return undefined;
    
    return user;
  }
}

export { UsersRepository };
