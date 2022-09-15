export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdOn: Date;
    isConfirmed: boolean;
    confirmedOn: Date | null;
}

export interface UserPost {
    firstName: string;
    lastName: string;
    email: string;
}
