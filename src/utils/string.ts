import type { stringMFormat } from "../types/types";


export function toUpper(dataText: stringMFormat){
    const {text, start, end} = dataText;

    const separateUpper = text.slice(start, end).toUpperCase();
    const result = text.slice(end);
    return separateUpper + result
}

