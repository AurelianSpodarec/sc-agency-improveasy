import { adminUserRoles } from 'lib/src/shared/enums/dropdownEnums';

export interface AdminUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdOn: Date;
}

export interface AdminUserPost {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UpdatePasswordPost {
    password: string;
    confirmPassword: string;
}
