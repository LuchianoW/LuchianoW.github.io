document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("CV").addEventListener("click", function () {
        window.open("./C.V_QW.pdf", "_blank");
    });
});

document.getElementById("nextButton_0").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("nextButton_1").addEventListener("click", function () {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
});

function updateStatus() {
    const options = { timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = new Date().toLocaleTimeString('en-US', options);
    let activity;
    let complement;

    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        activity = "sleeping😴";
        complement = "\"Sorry, I'm not a morning person...\"";
    } else if (currentHour >= 12 && currentHour < 14) {
        activity = "cooking&eating🍳😆";
        complement = "\"A talented cook is working, any restaurant hiring?\"";
    } else if (currentHour >= 14 && currentHour < 18) {
        activity = "studying📚";
        complement = "\"Deep in study mode. Brain loading...\"";
    } else if (currentHour >= 18 && currentHour < 19) {
        activity = "preparing my dinner";
        complement = "\"You should try my steak🥩—it’s so tender and juicy\"";
    } else if (currentHour >= 19 && currentHour < 21) {
        activity = "working out in the gym💪";
        complement = "\"DM me if you want a sneak peek of my abs...(No offense)\"";
    }else if (currentHour >= 21 && currentHour < 23) {
        activity = "in Game time🎮";
        complement = "\"Hope you don’t match with me in League\"";
    }else {
        activity = "probably doing anything ><";
        complement = "\"Hey, late-night adventurer! Shouldn't you be getting sleep?\"";
    }

    // Update the status text
    document.getElementById("time").innerHTML = `${time}`;
    document.getElementById("activity").innerHTML = `${activity}`;
    document.getElementById("complement").innerHTML = `${complement}`;
}

setInterval(updateStatus, 1000);  // Update every second

