var unlock = {}

unlock.run = function () {
    if (! device.isScreenOn()) {
        device.wakeUp();
        sleep(200);
        for (let i=0; i < 5; i ++) {
            swipe(
                200, 2000, 200, 800, 210
                );
        };
        sleep(300);
        for (let i=0; i < 4; i ++) {
            desc(0).findOne().click();
        };
        sleep(500);
    };
}


try {
    module.exports = unlock
} catch (e) {
    unlock.run()
}