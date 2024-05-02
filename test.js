function updateTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    document.getElementById('time').textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time display when the page loads
window.onload = updateTime;
