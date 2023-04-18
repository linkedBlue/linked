const br = {
    "abcd" : "1234",
    "ab" : "12",
}

const sl = {
    "mn" : "12",
}

const gl = {
    "qwerty" : "1234",
}




function submit() {
    var vl = document.getElementById("plan")
    var value = vl.value;
    if (value == "bronze") {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (password === br[username]) {
            document.getElementById("inco").innerHTML = ""
            location.href = "bronze/intro/intro.html"
        }
        else {
            document.getElementById("inco").innerHTML = "incorrect username or password"
        }
    }

    else if (value == "silver") {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (password === sl[username]) {
            document.getElementById("inco").innerHTML = ""
            location.href = "intro/intro.html"
        }
        else {
            document.getElementById("inco").innerHTML = "incorrect username or password"
        }
    }

    else if (value == "gold") {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (password === gl[username]) {
            document.getElementById("inco").innerHTML = ""
            location.href = "intro/intro.html"
        }
        else {
            document.getElementById("inco").innerHTML = "incorrect username or password"
        }
    }
    else {
        document.getElementById("inco").innerHTML = "incorrect username or password"
    }
}
