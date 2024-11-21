import { User } from "../user/user.entity";
export declare class Consumption {
    id: number;
    amount: number;
    readingDate: Date;
    user: User;
}
