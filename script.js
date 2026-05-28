function startSystem(){
    alert("Hệ thống bắt đầu hoạt động");
}

function stopSystem(){
    alert("Hệ thống đã dừng");
}

function setAuto(){
    document.getElementById("mode").innerHTML = "AUTO";
    alert("Chế độ AUTO");
}

function setManual(){
    document.getElementById("mode").innerHTML = "MANUAL";
    alert("Chế độ MANUAL");
}

/* Demo cập nhật dữ liệu tự động */

setInterval(() => {

    let temp1 = Math.floor(Math.random() * 5) + 58;
    let hum1 = Math.floor(Math.random() * 5) + 40;

    let temp2 = Math.floor(Math.random() * 5) + 53;
    let hum2 = Math.floor(Math.random() * 5) + 35;

    let temp3 = Math.floor(Math.random() * 5) + 48;
    let hum3 = Math.floor(Math.random() * 5) + 30;

    document.getElementById("temp1").innerHTML = temp1;
    document.getElementById("hum1").innerHTML = hum1;

    document.getElementById("temp2").innerHTML = temp2;
    document.getElementById("hum2").innerHTML = hum2;

    document.getElementById("temp3").innerHTML = temp3;
    document.getElementById("hum3").innerHTML = hum3;

},2000);
