import * as yup from "yup";
import {VALIDATION_MESSAGE} from "@/app/shared/constants/validation-messages";
import {trimPhoneNumber} from "@/app/shared/utils/manipulate-string";
import {UploadReceiptForm} from "@/app/pages/menu/packages/buy-packages/upload-receipt/validation";
import {Maybe} from "yup";
import {UploadFileResponse} from "@/app/core/services/api/upload-file/upload-file";
import dayjs from "dayjs";

export const validateFullName = yup
    .string()
    .trim()
    .required(VALIDATION_MESSAGE.basics.fullName.required)
    .min(2, VALIDATION_MESSAGE.basics.fullName.minLength)
    .max(50, VALIDATION_MESSAGE.basics.fullName.maxLength);

export const validateMobileNumber = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.mobileNo.required)
    .matches(new RegExp(/^\d+$/), {message: VALIDATION_MESSAGE.basics.mobileNo.number})
    .test("valid-mobile-number-min", VALIDATION_MESSAGE.basics.mobileNo.minLength, function (value) {
        const contactNumberFiltered = trimPhoneNumber(value || "");
        const len = contactNumberFiltered?.length || 0;
        return (len == 0 || len === 10);
    })
    // .test("valid-mobile-number-max", VALIDATION_MESSAGE.basics.mobileNo.maxLength, function (value) {
    //     const contactNumberFiltered = trimPhoneNumber(value || "");
    //     return ((contactNumberFiltered?.length || 0) <= 15);
    // })
    .matches(new RegExp(/^\d+$/), {message: "Error"});

export const validateContactNumber = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.contactNo.required)
    .required(VALIDATION_MESSAGE.basics.mobileNo.required)
    .test("valid-mobile-number-min", VALIDATION_MESSAGE.basics.contactNo.minLength, function (value) {
        const contactNumberFiltered = trimPhoneNumber(value || "");
        const len = contactNumberFiltered?.length || 0;
        return (len == 0 || len >= 10);
    })
    .test("valid-mobile-number-max", VALIDATION_MESSAGE.basics.contactNo.maxLength, function (value) {
        const contactNumberFiltered = trimPhoneNumber(value || "");
        return ((contactNumberFiltered?.length || 0) <= 10);
    });
export const validateEmail = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.email.required)
    .email(VALIDATION_MESSAGE.basics.email.invalid);

export const validatePassword = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.password.required);

export const newValidatePassword = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.password.new.required);

export const currentValidatePassword = yup
    .string()
    .required(VALIDATION_MESSAGE.basics.password.current.required);


export const validateDOB = yup
    .string()
    .test("max-dob",VALIDATION_MESSAGE.basics.dob.maxDateToday, function(d)  {
       if((new Date(d)).getTime() > (new Date()).getTime()) {
        return false;
       }
        return true;
    })
    .required(VALIDATION_MESSAGE.basics.dob.required);
export const validatePDOB = yup
    .string()
    .test("max-dob",VALIDATION_MESSAGE.basics.dob.maxDateToday, function(d)  {
        if((new Date(d)).getTime() > (new Date()).getTime()) {
            return false;
        }
        return true;
    })
    .test("min-age", VALIDATION_MESSAGE.basics.dob.minAge, function (d){
        if(dayjs().diff(d, "years") <= 18){
            return false
        }
        return true
    })
    .required(VALIDATION_MESSAGE.basics.dob.required);

export const validateCity = yup.object().required(VALIDATION_MESSAGE.basics.city.required);
export const validateExamType = yup.object().required(VALIDATION_MESSAGE.booking.examType.required);
export const validateExamFormat = yup.object().required(VALIDATION_MESSAGE.booking.examFormat.required);
export const validateExaminee = yup.string().required(VALIDATION_MESSAGE.booking.examinee.required);
export const ieltsExamType = yup.string().required(VALIDATION_MESSAGE.booking.examinee.required);
export const validateProvince = yup.object().required(VALIDATION_MESSAGE.booking.province.required)
export const validateDistrict = yup.object().required(VALIDATION_MESSAGE.booking.district.required)
export const validateRelation = yup.string().required(VALIDATION_MESSAGE.booking.relation.required)

export const testCenterValidation = yup.object().required(VALIDATION_MESSAGE.booking.testCenter.required);
export const promoCodeValidation = yup.string().required(VALIDATION_MESSAGE.package.promoCode.required);

export const passwordValidation = yup.object().required(VALIDATION_MESSAGE.booking.password.required);
export const passwordOptionalValidation = yup.object();

export const shiftValidation = yup.string().required(VALIDATION_MESSAGE.booking.shift.required);
export const passportValidation = yup.object().required(VALIDATION_MESSAGE.basics.passport.required);

export const fileValidation = yup.object<Maybe<UploadFileResponse>>().required(VALIDATION_MESSAGE.booking.file.required);

export const pickADate=(minDays: number) => yup
    .string()
    .required(VALIDATION_MESSAGE.booking.pickADAte.required)
;

