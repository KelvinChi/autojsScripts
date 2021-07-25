function wechatShare() {
    // 选择微信
    sleep(1000)
    click(280, 2100)
    tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    tools.specialRetry("android.widget.RelativeLayout", 8, 4, 3, 10)
    tools.normalRetry(text, "分享", 2, 10)
    tools.normalRetry(text, "返回LynkCo", 0, 10)
    swipe(270, 200, 810, 200, 200)
    sleep(1000)
    back()
    sleep(2000)
}

var kill = require("./kill.js")
var backHome = require("./backHome.js")
var tools = require("./tools.js")
const { normalClickRetry } = require("./tools.js")

var appName = "LynkCo"
var packageName = app.getPackageName(appName)
app.launch(packageName)
tools.antiWindow(appName)
// 点击动态
for (let i=0; i<5; i++) {
    tools.specialClickRetry("android.widget.FrameLayout", 17, 2, 1, 20)
}
// 点击分享
click(540, 365)
sleep(1500)
tools.specialClickRetry("android.widget.FrameLayout", 12, 2, 1, 10)
log("OK")
wechatShare()
// 点击活动
for (let i=0; i<5; i++) {
    tools.specialClickRetry("android.widget.FrameLayout", 17, 3, 2, 10)
}
sleep(3000)
click(540, 1200)
sleep(3000)
// 点击分享
tools.specialClickRetry("android.view.View", 19, 0, 1, 10)
wechatShare()
// 点击资讯
for (let i=0; i<5; i++) {
    tools.specialClickRetry("android.widget.FrameLayout", 17, 4, 3, 10)
}
sleep(3000)
click(540, 450)
sleep(3000)
tools.specialClickRetry("android.widget.FrameLayout", 15, 1, 0, 10)
sleep(3000)
// 点击分享
click(980, 2280)
wechatShare()
toast("领克签到完成")
kill.run()
backHome.run()
