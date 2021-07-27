var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
var appName = "网易云音乐"
var packageName = app.getPackageName(appName)
app.launch(packageName)
var flag = tools.antiWindow(appName)
if (! flag) {
    log(appName + "有弹窗手动处理")
    console.show()
}
// 总控次数
var num = 10
// 点击菜单
tools.normalRetry(desc, "抽屉菜单", 0, num)

// 点击签到
tools.normalRetry(id, "container", 2, num)
    ? toast(appName + "签到完成")
    : toast (appName + "签到失败")
sleep(3000)
kill.run()
backHome.run()
