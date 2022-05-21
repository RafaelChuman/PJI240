
import { PostgresDS } from "@src/data-source";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";
import { Users } from "./Users";

class UsersRepository implements IUsersRepository {

  async create(data: ICreateUserDTO): Promise<Users> {

    const user = new Users();

    user.name = data.name;
    user.userName = data.userName;
    user.password = data.password;
    user.cep = data.cep;
    user.numberAddress = data.numberAddress;
    user.cellphone = data.cellphone;
    user.whatsApp = data.whatsApp;
    
    await PostgresDS.manager.save(user);

    return user;
  }

  async list(): Promise<Users[]> {

    const users = await PostgresDS.manager.find(Users);
    
    return users;
  }

  async findByUserName(userNameParm: string): Promise<Users | null> {

    const user = await PostgresDS.manager.findOneBy(Users, {
      userName: userNameParm
    } );
    
    return user;
  }

  async findById(IdParm: string): Promise<Users | null> {

    const user = await PostgresDS.manager.findOneBy(Users, {
      id: IdParm
    } );
    
    return user;
  }
}

export { UsersRepository };
