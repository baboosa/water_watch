import { Consumption } from "../consumption/consumption.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    consumptions: Consumption[];
}
