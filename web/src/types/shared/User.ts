import { userRoles } from 'lib/src/shared/enums/dropdownEnums';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roles: userRoles[];
    createdOn: Date;
}

export interface UserPost {
    firstName: string;
    lastName: string;
    email: string;
    roles: userRoles[];
}
