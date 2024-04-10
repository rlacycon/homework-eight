// String Input
var stringText = document.getElementById('string');

function validateString(){
    var stringInput = stringText.value;

    var vs1= /dog/i; //i case insensitive
    var vs2=/^cat/; //^ beginning
    var vs3=/bird$/;//$ end
    var vs4=/^(cat)(dog)$/;// () groups together values
    var vs5=/^(cat)[a-z]+(dog)$/;//[] anything in this value

    document.getElementById('stringAns').innerText=vs1.test(stringInput);
}

stringText.addEventListener('blur', validateString);

// Zip Code Validation
var zipText = document.getElementById('myzip');

function validateZip(){
    var zipInput= zipText.value;
    var vz1= /^[0-9]{5}$/; //{} = number of inputs

    document.getElementById('zipAns').innerText=vz1.test(zipInput);
}

zipText.addEventListener('blur', validateZip);

// Credit Card
var ccardText=document.getElementById('ccard');

function validateCcard(){
    var ccardInput= ccardText.value;

    var vc1= /^(\d{4})-\d{4}-\d{4}-(\d{4})$/;

    document.getElementById('ccAns').innerText=vc1.test(ccardInput);
}

ccardText.addEventListener('blur', validateCcard);

// Phone
var phoneText=document.getElementById('phone');

function validatePhone(){
    var phoneInput=phoneText.value;
    var vp1= /^(\d{3}).?(\d{3}).?(\d{4})$/;
    document.getElementById('phoneAns').innerText=vp1.test(phoneInput);
}

phoneText.addEventListener('blur', validatePhone);