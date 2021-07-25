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
    let pin = tools.antiWindow()
    if (! pin) {
        log(appName + "新弹框需要手动处理")
        console.show()
    }
}
// 点击账号
tools.normalRetry(text, "账号", 4, 10)
// 防止弹窗
tools.antiWindow()
// 签到
tools.normalRetry(id, "main_tv_do_task", 3, 10) ? toast(appName + "签到完成") : toast (appName + "签到失败")
sleep(3000)
kill.run()
backHome.run()
