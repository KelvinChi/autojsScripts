var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
var appName = "喜马拉雅"
var packageName = app.getPackageName(appName)
app.launch(packageName)
var flag = tools.antiWindow(appName)
if (! flag) {
    tools.specialRetry("android.widget.ImageView", 11, 1, 0, 5)
    tools.specialRetry("android.widget.ImageView", 4, 3, 1, 5)
    tools.normalClickRetry(id, "host_close_firework", 1, 5)
    sleep(1000)
    let pin = tools.antiWindow(appName)
    if (! pin) {
        log(appName + "新弹框需要手动处理")
        console.show()
    }
}
// 点击账号
tools.normalRetry(text, "账号", 4, 10)
// 防止弹窗
tools.antiWindow()
sleep(2000)
swipe(540, 2000, 540, 1600, 100)
sleep(2000)
// 签到
if (text("签到").exists()) {
    tools.normalRetry(text, "签到", 1, 10)
        ? toast(appName + "签到完成")
        : toast (appName + "签到失败")
} else {
    toast(appName + "已签到")
}
sleep(3000)
kill.run()
backHome.run()
