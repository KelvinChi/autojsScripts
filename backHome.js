var backHome = {}

backHome.run = function () {
    for (let i = 0; i < 5; i ++) {
        home()
        sleep(100)
    }
}


try {
    module.exports = backHome
} catch (e) {
    backHome.run()
}