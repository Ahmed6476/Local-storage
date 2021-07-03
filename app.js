function onSignup() {
    // get input values
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email");
    var address = document.getElementById("address")
    var phone_no = document.getElementById("phone_no")
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        address: address.value,
        phone_no : phone_no.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.innerHTML = "Invalid credentials";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

function getCurrentUser() {
    var detail_a = document.getElementById("detail_a");
    var detail_b = document.getElementById("detail_b");
    var detail_c = document.getElementById("detail_c");
    var detail_d = document.getElementById("detail_d");
    var detail_e = document.getElementById("detail_e");
    var user = JSON.parse(localStorage.getItem("user"));
    detail_a.innerHTML = "Loggedin as : " + user.email;
    detail_b.innerHTML = "First Name : " + user.firstname;
    detail_c.innerHTML = "Last Name : " + user.lastname;
    detail_d.innerHTML = "Address : " + user.address;
    detail_e.innerHTML = "Phone no : " + user.phone_no;

}


function RenderButton() {
    var text = document.getElementById("text");
    var discription = document.getElementById("discription");
    var textp = document.getElementById("textp");
    var discriptionp = document.getElementById("discriptionp");

    var objectData = {
        text: text.value,
        discription: discription.value,
    }

   textp.innerHTML = objectData.text; 
   discriptionp.innerHTML = objectData.discription;    
}