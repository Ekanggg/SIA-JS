const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const companyname = document.getElementById('companyname');
const region = document.getElementById('region');
const properties = document.getElementById('properties');
const country = document.getElementById('country');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = telephone.value.trim();
    const companynameValue = companyname.value.trim();
    const propertiesValue = properties.value.trim();
    const regionValue = region.value.trim();
    const countryValue = country.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
    }
    if(lastnameValue === '') {
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }

    if(companynameValue === '') {
        setError(companyname, 'Last name is required');
    } else {
        setSuccess(companyname);
    }
     if(propertiesValue === '') {
        setError(properties, 'Field is required');
    } else {
        setSuccess(properties);
    }
    if(regionValue === '') {
        setError(region, 'First name is required');
    } else {
        setSuccess(region);
    }
     if(countryValue === '') {
        setError(country, 'First name is required');
    } else {
        setSuccess(country);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(telephoneValue === '') {
        setError(telephone, 'Phone number is required');
    } else if (telephoneValue.length < 11 ) {
        setError(telephone, 'Phone number must be at least 11 character.')
    } else {
        setSuccess(telephone);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
