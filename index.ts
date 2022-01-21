const isPureObj = (t: any) => Object.prototype.toString.call(t) == "[object Object]";

const omit = <T extends object, K extends string | string[]>(target: T, fields: K): { [P in Exclude<keyof T, K>]: T[P]; } => {
    if(!isPureObj(target)) return null;
    
    if(!Array.isArray(fields)) fields = [fields] as K;

    const keys = Object.keys(target);

    let obj: any = {};

    for (const k of keys) {
        if(Array.isArray(target[k])) {
            obj[k] = [];

            for (const item of target[k]) {
                obj[k].push(omit(item, fields))
            }
        } else if(
            /* shitty ass workaround for an ass library */
            Object.prototype.toString.call(target[k]) == "[object Object]"
            /* null and undefined are objects, so are dates and god knows what the fuck else */
        ) {
            obj[k] = omit(target[k], fields);
        } else {
            if(!fields.includes(k)) obj[k] = target[k]
        }
    }

    return obj;
}

export default omit;