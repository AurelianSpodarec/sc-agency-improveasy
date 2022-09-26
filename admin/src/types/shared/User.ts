export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdOn: Date;
    isConfirmed: boolean;
    confirmedOn: Date | null;
    phone: string | null;
}

export interface UserPost {
    firstName: string;
    lastName: string;
    email: string;
}
