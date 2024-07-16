export const VALIDATION_MESSAGE = {
    basics: {
        password:{
            required:"Password is required",
            length:"At least 6 characters",
            upperCase:"Contains upper case",
            lowerCase:"Contains lower case",
            number:"Contains number",
            character:"Contains a special character",
            invalid:"Please enter a combination of a password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character",
            current: {
                required: "Current Password is required"
            },
            new: {
                required: "New Password is required"
            },
            confirm: {
                required: "Confirm Password is required",
                mismatch: "Passwords does not match"
            }
        },
        confirmPassword:{
            required: "Confirm Password is required"
        },
        fullName:{
            required:"Full Name is required",
            maxLength: "Please enter a maximum of 40 characters",
            minLength: "Please enter a minimum of 2 characters",
        },
        email:{
            required:"Email is required",
            invalid:"Please enter a valid email",
            inclusion:"Please include @ in the email address",
        },
        mobileNo: {
            required: "Mobile Number is required",
            maxLength: "Please enter a maximum of 15 characters",
            minLength: "Please enter 10 digit number",
            number: "Please enter number"
        },
        contactNo: {
            required: "Contact Number is required",
            maxLength: "Please enter a maximum of 10 characters",
            minLength: "Please enter a minimum of 10 characters",
        },
        dob: {
            required: "DOB is required",
            maxDateToday: "DOB cannot be in the future",
            minAge: "Age should be greater than 18"
        },
        city: {
            required: "City is required"
        },
        passport: {
            required: "Passport is required"
        }
    },
    booking: {
        examType: {
            required: "Exam Type is required"
        },
        examFormat: {
            required: "Exam Format is required"
        },
        examinee: {
            required: "Examinee is required"
        },
        testCenter: {
            required: "Test Center is required"
        },
        pickADAte: {
            required: "Date is required",
            range: "Date Range should be",
        },
        province: {
            required: "Province is required"
        },
        district: {
            required: "District is required"
        },
        relation: {
            required: "Relation is required"
        },
        password: {
            required: "Passport is required"
        },
        file: {
            required: "File is required"
        },
        shift: {
            required: "Shift is required"
        },

    },
    package: {
        promoCode: {
            required: "Promo Code is required"
        }
    }
}
