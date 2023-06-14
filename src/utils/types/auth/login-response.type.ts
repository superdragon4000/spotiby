import User from "src/model/user.entity";

export type LoginResponseType = Readonly<{
    token: string;
    user: User;
}>