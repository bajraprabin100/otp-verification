import {FieldNamesMarkedBoolean} from "react-hook-form/dist/types/form";



export function isFieldInArrayDirty<TFieldValues>(arr: string[], dirtyField: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>): boolean{
    return Object.keys(dirtyField).findIndex(k => arr.find(d => d === k)) !== -1
}
