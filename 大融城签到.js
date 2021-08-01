var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")

for (let i=1; i<2; i++) {
    var times = 10;
    var appName = "微信"
    var packageName = app.getPackageName(appName)
    app.launch(packageName)
    tools.antiWindow(appName)
    // 选择app
    i == 0
        ? tools.specialClickRetry("android.widget.LinearLayout", 8, 1, 0, 10)
        : tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    while (times > 0) {
        sleep(1000)
        if (text("微信").exists()) {
            // 下划打开小程序窗口
            swipe(540, 600, 540, 1800, 100)
            tools.normalClickRetry(text, "大融城尊享会员", 1, 10)
            sleep(1000)
            tools.normalClickRetry(text, "个人中心", 3, 10)
            tools.normalRetry(text, "签到", 4, 10)
            sleep(2000)
            if (text("立即签到").exists()) {
                tools.normalClickRetry(text, "立即签到", 2, 10)
                    ? toast("大融城" + i + "签到完成")
                    : toast ("大融城" + i + "签到失败")
            } else {
                toast(appName + "已签到")
            }
            sleep(3000)
            kill.run()
            backHome.run()
            break
        } else {
            times --
            if (id("ipt").exists()) {
                // 判断是否在聊天页面，在则返回
                back()
            }
        }
    }
}
toast(appName + "全部签到完成")
