// Variables are used to store data.
let message = "Practice Basic Javascript!";
// let currentDate = new Date();
// let formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

let updateTime = () => {
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    document.getElementById("time").textContent = `${formattedDate} ${currentTime}`;
}

//Update the time every second (1000 milliseconds).
setInterval(updateTime, 1000);

// Initialize the time immediately.
updateTime();

// Access the HTML elements by their IDs and update their content.
document.getElementById("message").textContent += ` ${message}`;
// document.getElementById("number").textContent += ` ${formattedDate}`;