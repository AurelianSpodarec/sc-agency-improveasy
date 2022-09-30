export const checkIfObjDiff = (obj1: any, obj2: any) => {
    const obj1Str = JSON.stringify(obj1);
    const obj2Str = JSON.stringify(obj2);
    return obj1Str !== obj2Str;
};
