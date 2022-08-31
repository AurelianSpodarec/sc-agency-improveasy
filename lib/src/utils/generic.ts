export function isEmpty(item: any): boolean {
    if (Array.isArray(item)) return !item.length;
    if (typeof item === 'string') return !item.trim().length;
    if (item instanceof Date) return isNaN(item.valueOf());
    if (typeof item === 'object') return isObjEmpty(item);
    if (typeof item === 'number') return false;

    return !item;
}

function isObjEmpty(obj: Record<string, unknown>): boolean {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}

export function convertArrToObj<T>(arr: T[], field: string = 'id'): Record<string, T> {
    return arr.reduce<Record<string, T>>((acc, item) => {
        // todo
        //@ts-ignore
        acc[item[field]] = item;
        return acc;
    }, {});
}
