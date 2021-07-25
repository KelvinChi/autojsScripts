var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
var appName = "掌上生活"
var packageName = app.getPackageName(appName)
app.launch(packageName)
var flag = tools.antiWindow(appName)
if (! flag) {
    log(appName + "有弹窗手动处理")
    console.show()
}
// 点击我的
tools.normalRetry(id, "btn_mine_menu", 4, 10)
// 点击签到
tools.specialRetry("android.widget.ImageView", 21, 3, 2, 10)
// 取消指纹登录
tools.normalRetry(text, "取消", 1, 10)
// 切换登录方式
tools.normalRetry(text, "切换登录方式", 0, 10)
sleep(1500)
// 滑动解锁
gesture(2000, [230, 1615], [540, 1300], [540, 1615], 
    [540, 1300], [860, 975], [540, 1300], [230, 1300])
sleep(5000)
// 签到
tools.specialRetry("android.view.View", 12, 0, 13, 10) ? toast(appName + "签到完成") : toast (appName + "签到失败")
sleep(3000)
kill.run()
backHome.run()
