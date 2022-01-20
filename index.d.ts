declare const omit: <T extends object, K extends string | string[]>(target: T, fields: K) => { [P in Exclude<keyof T, K>]: T[P]; };
export default omit;
