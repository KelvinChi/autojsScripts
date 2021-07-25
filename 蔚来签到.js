var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")

for (let i=0; i<2; i++) {
    log(i)
    var appName = "蔚来"
    var packageName = app.getPackageName(appName)
    app.launch(packageName)
    tools.antiWindow(appName)
    // 选择app
    i == 0
    ? tools.specialClickRetry("android.widget.LinearLayout", 8, 1, 0, 10)
    : tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    sleep(1000)
    // 点击我的
    tools.normalClickRetry(text, "我的", 1, 10)
    // 签到
    tools.normalRetry(id, "my_head_info_user_check_tip", 3, 10)
    ? toast("蔚来" + i + "签到完成")
    : toast ("蔚来" + i + "签到失败")
    sleep(3000)
    kill.run()
    backHome.run()
}
toast(appName + "全部签到完成")
