var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")

for (let i=0; i<2; i++) {
    var appName = "蔚来"
    var packageName = app.getPackageName(appName)
    app.launch(packageName)
    tools.antiWindow(appName)
    // 选择app
    i == 0
        ? tools.specialClickRetry("android.widget.LinearLayout", 8, 1, 0, 10)
        : tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    sleep(3000)
    // 如果有确认升级则取消
    if (text("确认升级").exists()) {
        tools.specialClickRetry("android.widget.ImageView", 4, 2, 1, 10)
    }
    // 点击我的
    tools.normalClickRetry(text, "我的", 1, 10)
    sleep(1000)
    // 签到
    if (text("立即签到").exists()) {
        tools.normalRetry(text, "立即签到", 3, 10)
            ? toast(appName + i + "签到完成")
            : toast (appName + i + "签到失败")
    } else {
        toast(appName + "已签到")
    }
    sleep(3000)
    kill.run()
    backHome.run()
}
toast(appName + "全部签到完成")
