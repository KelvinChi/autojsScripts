var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
var appName = "京东"
var packageName = app.getPackageName(appName)
app.launch(packageName)
var flag = tools.antiWindow(appName)
if (! flag) {
    log(appName + "有弹窗手动处理")
    console.show()
}
// 点击我的
tools.normalClickRetry(text, "我的", 3, 10)
// 点击京豆
tools.normalClickRetry(text, "京豆", 1, 10)
// 点击签到
while (! text("已签到").indexInParent(1).exists() 
    && ! text("去签到领京豆").indexInParent(1).exists()) {
    sleep(500)
}
if (! text("已签到").indexInParent(1).exists()) {
    tools.normalClickRetry(text, "去签到领京豆", 1, 10)
    tools.normalClickRetry(text, "签到领京豆", 0, 10)
    ? toast(appName + "签到完成")
    : toast (appName + "签到失败")
    sleep(3000)
} else {
    toast(appName + "已签到")
}
kill.run()
backHome.run()
