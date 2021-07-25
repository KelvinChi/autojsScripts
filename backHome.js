var backHome = {}

backHome.run = function () {
    let i;
    for (i = 0; i < 5; i ++) {
        // Swipe(540,2400,540,1800,200);
        // gesture(210, [540, 2400], [540, 2000], [540, 1600], [540, 1200])
        home();
        sleep(100);
    }
}


try {
    module.exports = backHome
} catch (e) {
    backHome.run()
}