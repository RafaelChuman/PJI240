import { User } from "./User";

interface ICreateUserDTO {
  name: string;
  userName: string;
  password: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}

interface IAuthenticateUserDTO{
  userName:string,
  password:string,
}

interface IUserTokenDTO{
  user:{
    userName:string,
    password:string,  
  },
  token: string,
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByUserName(userName: string): Promise<User | null>;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO, IAuthenticateUserDTO, IUserTokenDTO };
