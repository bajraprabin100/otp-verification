import {VALIDATION_CONSTANTS} from "src/app/shared/constants";
import {VALIDATION_MESSAGE} from "src/app/shared/constants/validation-messages";


export interface PasswordValidationReturnType {
    error: boolean;
    message: string;
}

interface PasswordValidatorArgsType {
    //eslint @typescript-eslint/no-explicit-any
    fn: any;
    message: string;
}

export const passwordValidator = (
    schema: PasswordValidatorArgsType[]
): PasswordValidationReturnType[] => {
    const arr: PasswordValidationReturnType[] = [];
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].fn) arr.push({ error: true, message: schema[i].message });
        else arr.push({ error: false, message: schema[i].message });
    }
    return arr;
};

export const defaultPasswordValidator = (password:string): PasswordValidationReturnType[] => {
    const arr: PasswordValidationReturnType[] = passwordValidator([
        {fn: password.length < VALIDATION_CONSTANTS.passwordLength, message:VALIDATION_MESSAGE.basics.password.length},
        // {fn: !password.match(VALIDATION_CONSTANTS.regexForLowerCaseCases), message:VALIDATION_MESSAGE.basics.password.lowerCase},
        // {fn: !password.match(VALIDATION_CONSTANTS.regexForSpecialCharacters), message:VALIDATION_MESSAGE.basics.password.character},
        // {fn: !password.match(VALIDATION_CONSTANTS.regexForUpperCaseCases), message:VALIDATION_MESSAGE.basics.password.upperCase},
        // {fn: !password.match(VALIDATION_CONSTANTS.regexForNumber), message:VALIDATION_MESSAGE.basics.password.number},
    ]);

    return arr;
}
