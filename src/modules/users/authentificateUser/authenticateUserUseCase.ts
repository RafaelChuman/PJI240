import { compare } from "bcrypt";
import { IUsersRepository, IAuthenticateUserDTO, IUserTokenDTO } from "@entity/Users/IUsersRepository";
import { AppError } from "@errors/AppError";
import { sign } from "jsonwebtoken";


class AuthenticaUserUseCase{
    private userRespository: IUsersRepository;

    constructor(userRespository: IUsersRepository){
        this.userRespository = userRespository;
    }

    async execute({userName, password}:IAuthenticateUserDTO):Promise<IUserTokenDTO>{



        const user = await this.userRespository.findByUserName(userName);

        if(!user){
            throw new AppError("User or password inconrrect.")
        }

        const passwordMatch = await compare(password, user.password);


        if(!passwordMatch){
            throw new AppError("User or password inconrrect.")
        }

        const token = sign({}, "brasil123", {
            subject: user.id,
            expiresIn: "1d"
        })

        const response: IUserTokenDTO = {
            user:{
                userName: user.userName,
                password: user.password,
            },
            token: token,
        };
       
        return response;

    }
}

export {AuthenticaUserUseCase}