// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var id = document.userDetails.id.value;
    var name = document.userDetails.name.value;
    var age = document.userDetails.age.value;
    var email = document.userDetails.email.value;
    var mobile = document.userDetails.mobile.value;
    var aadhar = document.userDetails.aadhar.value;
    var vehicle = document.userDetails.vehicle.value;
    var vehtype = document.userDetails.vehtype.value;
    var license = document.userDetails.license.value;
    var purchaseDate = document.userDetails.purchaseDate.value;
    var engine = document.userDetails.engine.value;
    var insurancetype = document.userDetails.insurancetype.value;

    // Defining error variables with a default value
    var idErr = nameErr = ageErr = emailErr = mobileErr = aadharErr = vehicleErr = vehtypeErr = licenseErr = purchaseDateErr = engineErr = insurancetypeErr = true;

    // Validate id
    if (id == "") {
        printError("idErr", "Please enter your ID");
    }
    else {
        var regex = /^[0-9]\d{9}$/;
        if (regex.test(id) === false) {
            printError("idErr", "Please enter a valid id");
        } else {
            printError("idErr", "");
            idErr = false;
        }
    }
    
    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate age
    if (age == "") {
        printError("ageErr", "Please enter your age");
    } else {
        var regex = /^[1-9]\d{2}$/;
        if (regex.test(age) === false) {
            printError("ageErr", "Please enter a valid age");
        } else {
            printError("ageErr", "");
            ageErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate aadhar
    if (aadhar == "") {
        printError("aadharErr", "Please enter your aadhar number");
    } else {
        var regex = /^[1-9]\d{11}$/;
        if (regex.test(aadhar) === false) {
            printError("aadharErr", "Please enter a valid 12 digit aadhar number");
        } else {
            printError("aadharErr", "");
            aadharErr = false;
        }
    }

    // Validate vehicle number
    if (vehicle == "") {
        printError("vehicleErr", "Please enter your vehicle number");
    } else {
        var regex = /^[A-ZA-Z0-90-9A-ZA-Z-0-9]\d{9}$/;
        if (regex.test(vehicle) === false) {
            printError("vehicleErr", "Please enter a valid vehicle number");
        } else {
            printError("vehicleErr", "");
            vehicleErr = false;
        }
    }

    // Validate vehicle type
    if (vehtype == "") {
        printError("vehtypeErr", "Please select your vehicle type");
    } else {
        printError("vehtypeErr", "");
        vehtypeErr = false;
    }

    // Validate licence number
    if (license == "") {
        printError("licenseErr", "Please enter your license number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(license) === false) {
            printError("licenseErr", "Please enter a valid 10 digit license number");
        } else {
            printError("licenseErr", "");
            licenseErr = false;
        }
    }

    // Validate purchase Date
    if (purchaseDate == "") {
        printError("purchaseDateErr", "Please select your purchase Date");
    } else {
        printError("purchaseDateErr", "");
        purchaseDateErr = false;
    }

    // Validate engine number
    if (engine == "") {
        printError("engineErr", "Please enter your engine number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(engine) === false) {
            printError("engineErr", "Please enter a valid 10 digit engine number");
        } else {
            printError("engineErr", "");
            engineErr = false;
        }
    }

    // Validate insurance type
    if (insurancetype == "") {
        printError("insurancetypeErr", "Please select your Insurance Date");
    } else {
        printError("insurancetypeErr", "");
        insurancetypeErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((  idErr || nameErr || ageErr || emailErr || mobileErr || aadharErr || vehicleErr || vehtypeErr || licenseErr || purchaseDateErr || engineErr || insurancetypeErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "ID: " + id +"\n" +
            "Full Name: " + name + "\n" +
            "age: " + age +"\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "aadhar: " + aadhar+"\n" +
            "vehicle: " + vehicle + "\n" +
            "vehicle type: " + vehtype + "\n" +
            "license number: " + license + "\n" +
            "Purchase Date: " + purchaseDate + "\n" +
            "Engine Number: " + engine + "\n" +
            "Insurance Type: " + insurancetype + "\n" ;

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};


