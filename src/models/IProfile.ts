import {ISubscription} from "./ISubscription";
import {IGroup} from "./IGroup";

export interface IProfile {
    id: number;
    username: string;
    avatar: string;
    email: string;
    number: string;
    email_confirmed: string;
    subscription: ISubscription;
    groups: IGroup[];
}