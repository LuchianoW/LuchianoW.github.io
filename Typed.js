document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typed', {
        strings:[
            "Programmer",
            "Proud Lesbian",
            "Animal Lover",
            "Feminist",
            "Environmental Advocate",
            "Game Lover",
            "Talented Cook",
            "Fitness Enthusiast"
        ],
        typeSpeed: 50,  // 文字输入速度
        backSpeed: 30,   // 文字删除速度
        backDelay: 1000, // 等待回退的时间
        loop: true       // 是否循环播放
    });
});
