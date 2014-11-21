"use strict";

var CountryCodes = {
    RUS: '8'
};

function removeNonNumerics(value){
    return value.toString().replace(/[^0-9]/g, '');
}

function startsWith(str, starts){
    if(starts.length > str){
        return false;
    }
    var end = starts.length;
    while(end--){
        if(str[end] != starts[end]){
            return false;
        }
    }
    return true;
}

function shouldPrependCountryCode(value){
    return (value.length === 10);
}

function prependCountryCode(value){
    if(shouldPrependCountryCode(value)){
        value = CountryCodes.RUS + value;
    }
    return value;
}

function normalizePhoneNumber(value){
    return prependCountryCode(removeNonNumerics(value));
}
exports.normalize  = normalizePhoneNumber;

/**
 *
 * @param phone
 * @returns {boolean}
 */
function isPhoneNumberValid(phone){
    phone = normalizePhoneNumber(phone);
    var isMatch =  !!phone.match(/^\d{11}$/);
    return(isMatch);
}
exports.isValid = isPhoneNumberValid;