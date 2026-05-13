let storedData = [];

function addData() {

    let input = document.getElementById("dataInput").value.trim();

    let message = document.getElementById("message");

    if(input === "") {
        message.innerText = "Please enter data.";
        message.style.color = "red";
        return;
    }

    if(storedData.includes(input)) {
        message.innerText = "Duplicate Data Detected!";
        message.style.color = "red";
    }

    else {

        storedData.push(input);

        message.innerText = "Unique Data Added Successfully!";
        message.style.color = "green";

        displayData();
    }

    document.getElementById("dataInput").value = "";
}

function displayData() {

    let dataList = document.getElementById("dataList");

    dataList.innerHTML = "";

    storedData.forEach(data => {

        let li = document.createElement("li");

        li.innerText = data;

        dataList.appendChild(li);
    });
}