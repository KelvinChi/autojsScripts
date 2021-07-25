var kill = {}

kill.run = function () {
    home()
    sleep(300)
    recents()
    sleep(300)
    swipe(400, 1200, 50, 1200, 100)
    sleep(300)
    home()
    sleep(300)
}


try {
    module.exports = kill
} catch (e) {
    kill.run()
}
