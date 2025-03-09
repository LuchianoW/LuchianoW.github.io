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

const images = [
    "image/p1.png",
    "image/p2.png",
    "image/p3.png",
    "image/p4.png",
    "image/p5.png",
    "image/p6.png"
];

const texts = [
    "\"Graduation Day\"",
    "\"I'm Kirby\"",
    "\"><\"",
    "\"Pride!\"",
    "\"Wild Teemo\"",
    "\"Xmas in YZU\"",
];


let currentIndex = 0;
let interval;
const imgElement = document.getElementById("displayImg");
const textElement = document.getElementById("pic_context");
const dashes = document.querySelectorAll(".dash");

// 自动轮播函数
function startSlideshow() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 3500); // 每2秒切换
}

// 更新图片
function updateImage() {
    imgElement.src = images[currentIndex];
}

function updateContext() {
    textElement.innerText = texts[currentIndex];
}

// 停止轮播
function stopSlideshow() {
    clearInterval(interval);
}

// 监听 dash 悬停
dashes.forEach(dash => {
    dash.addEventListener("mouseenter", () => {
        stopSlideshow();
        currentIndex = parseInt(dash.dataset.index); // 读取 data-index
        updateImage();
        updateContext()
    });

    dash.addEventListener("mouseleave", () => {
        startSlideshow();
    });
});

// 启动轮播
startSlideshow();
