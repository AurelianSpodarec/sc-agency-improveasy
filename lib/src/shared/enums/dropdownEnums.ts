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

interface GenericEnumModel {
    [key: string]: number | string;
}

export const convertEnumToDropdownOption = (enums: GenericEnumModel): DropdownOption<number>[] => {
    const filteredArr: DropdownOption<number>[] = [];

    Object.entries(enums).forEach(([key, value]) => {
        if (typeof value === 'number') {
            filteredArr.push({
                value: value,
                label: prettierifyEnumKey(key),
            });
        }
        return;
    });

    return filteredArr;
};

const prettierifyEnumKey = (key: string): string => {
    const splitKey = key.split('');

    for (let i = 0; i < splitKey.length; i++) {
        if (splitKey[i] === splitKey[i].toLowerCase()) {
            if (splitKey[i + 1] && splitKey[i + 1] === splitKey[i + 1].toUpperCase()) {
                splitKey[i] = `${splitKey[i]} `;
            }
        }
    }

    return splitKey.join('');
};
