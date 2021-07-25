var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
var appName = "蜗牛睡眠"
var packageName = app.getPackageName(appName)
app.launch(packageName)
var flag = tools.antiWindow(appName)
if (! flag) {
    log(appName + "有弹窗手动处理")
    console.show()
}
// 点击我的
tools.normalClickRetry(text, "我的", 0, 10)
// 点击积分
tools.normalRetry(id, "rl_score_entry", 2, 10)
// 点击签到
tools.specialRetry("android.view.View", 9, 0, 3, 10) ? toast(appName + "签到完成") : toast (appName + "签到失败")
sleep(3000)
kill.run()
backHome.run()
