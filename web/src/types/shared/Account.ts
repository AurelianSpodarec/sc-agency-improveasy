export interface IAccountDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
}

export interface IUpdateAccountPostBody {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
}
