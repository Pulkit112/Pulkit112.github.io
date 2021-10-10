function fun1() {
    let x = document.getElementById("Home");
    let x1 = document.getElementById("Education");
    let x2 = document.getElementById("Skills");
    let x3 = document.getElementById("Hobbies");
    let x4 = document.getElementById("Contact");
    console.log(x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}

function fun2() {
    let x = document.getElementById("Education");
    let x1 = document.getElementById("Home");
    let x2 = document.getElementById("Skills");
    let x3 = document.getElementById("Hobbies");
    let x4 = document.getElementById("Contact");
    console.log("Fun2");
    console.log(x.style.display);
    if (x.style.display === "none") {

        x.style.display = "block";
    }
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}

function fun3() {
    let x = document.getElementById("Skills");
    let x1 = document.getElementById("Home");
    let x2 = document.getElementById("Education");
    let x3 = document.getElementById("Hobbies");
    let x4 = document.getElementById("Contact");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}
function fun4() {
    let x = document.getElementById("Hobbies");
    let x1 = document.getElementById("Home");
    let x2 = document.getElementById("Skills");
    let x3 = document.getElementById("Education");
    let x4 = document.getElementById("Contact");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}

function fun5() {
    let x = document.getElementById("Contact");
    let x1 = document.getElementById("Home");
    let x2 = document.getElementById("Skills");
    let x3 = document.getElementById("Education");
    let x4 = document.getElementById("Hobbies");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}

function currentTime() {
    let date = new Date();
    let dd = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    let ndd;
    if (dd < 10) {
        ndd = "0" + dd;
    }
    else
        ndd = dd;
    let nmonth;
    if (month < 10) {
        nmonth = "0" + month;
    }
    else {
        nmonth = month;
    }
    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = ndd + "/" + nmonth + "/" + year + "       " + hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerHTML = time;
    let t = setTimeout(function () { currentTime() }, 1000);
    console.log(time);
}

currentTime();