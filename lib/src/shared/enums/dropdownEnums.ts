import { DropdownOption } from '../../types/shared/DropdownOption';

export const reverseEnum = (baseEnum: { [key: string]: number }): { [key: number]: string } => {
    const reversed: { [key: number]: string } = {};
    Object.entries(baseEnum).forEach(([key, value]) => {
        reversed[value] = key;
    });
    return reversed;
};

export function enumKeys<O extends Record<string, unknown>, K extends keyof O = keyof O>(
    obj: O,
): K[] {
    return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

export enum adminUserRoles {
    superAdmin = 1000,
    admin = 500,
}

export const adminUserRoleNames: { [key: number]: string | undefined | null } = {
    [adminUserRoles.superAdmin]: 'Super Admin',
};

interface SuperAdminRolesEnumModel {
    superAdmin: number;
    admin: number;
}
interface UserDropdownEnumModel {
    basic: number;
}

interface GenericEnumModel {
    [key: string]: number | string;
}

export const convertEnumToDropdownOption = (enums: GenericEnumModel): DropdownOption<number>[] => {
    const filteredArr: DropdownOption<number>[] = [];

    Object.entries(enums).forEach(([key, value]) => {
        if (typeof value === 'number') {
            filteredArr.push({
                value: value,
                label: key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                    return str.toUpperCase();
                }),
            });
        }
        return;
    });

    return filteredArr;
};
