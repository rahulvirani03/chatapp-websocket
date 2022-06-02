import  phoneUtil from 'google-libphonenumber';
import { VALIDATIONS } from './constants'
import { ALLOWED_EXTENSIONS, ERROR_MESSAGES, MAX_FILE_SIZE } from './constants';
import { getFileExtension } from './index';

export const isValidName = (name) => {
    if(VALIDATIONS.NAME_RULES.test(name)){
        return true;
    }
    return false
}

export const isValidPhoneNumber = phoneNo => {
    if(phoneNo) {
        const validator = phoneUtil.PhoneNumberUtil.getInstance();
        const number = validator.parseAndKeepRawInput(phoneNo, 'IN');
        const isValid = validator.isValidNumber(number)
        if(isValid){
            return true; 
        }
        return false
    }
}

export const profileImageValidations = (file) => {
    
    const extension = getFileExtension(file.type);
    if(!ALLOWED_EXTENSIONS.includes(extension)) {
        throw ERROR_MESSAGES.FILE_EXTENSION_NOT_ALLOWED
    }
    const size = file.size;
    if(size / MAX_FILE_SIZE > 2) {
        throw ERROR_MESSAGES.FILE_SIZE_EXCEEDED_2MB
    }
}

export const isValidAadharNumber = (number) => {
    if(VALIDATIONS.AADHAR_RULES.test(number)) return true
    return false;
}

export const isValidPanNumber = number => {
    if(VALIDATIONS.PAN_RULES.test(number)) return true
    return true;
}


