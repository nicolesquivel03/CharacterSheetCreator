export function toFlatObject(data: any) {
    if (!data) {
        return null;
    }

    const obj: any = {};
    for (const [dataKey, dataValue] of Object.entries(data)) {
        if (dataValue instanceof Map) {
            const mapObj: any = {};
            dataValue.forEach((value, key) => {
                Object.defineProperty(mapObj, key.toString(), {
                    //value: interfaceDataToFlatObject(value),
                    writable: true,
                    enumerable: true,
                });
            });
            Object.defineProperty(mapObj, "dataStructureIsMap", {
                value: true,
                writable: true,
                enumerable: true,
            });
            Object.defineProperty(obj, dataKey.toString(), {
                value: mapObj,
                writable: true,
                enumerable: true,
            });
        } else if (dataValue instanceof Object) {
            Object.defineProperty(obj, dataKey, {
                //value: interfaceDataToFlatObject(dataValue),
                writable: true,
                enumerable: true,
            });
        } else {
            Object.defineProperty(obj, dataKey, {
                value: dataValue,
                writable: true,
                enumerable: true,
            });
        }
    }
    return obj;
}