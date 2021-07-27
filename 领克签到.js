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

for (let i=0; i<2; i++) {
    var appName = "LynkCo"
    var packageName = app.getPackageName(appName)
    app.launch(packageName)
    tools.antiWindow(appName)
    // 选择app
    i == 0
        ? tools.specialClickRetry("android.widget.LinearLayout", 8, 1, 0, 10)
        : tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    sleep(1000)
    // 点击动态
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 2, 1, 20)
    }
    // 点击分享
    click(540, 365)
    sleep(3000)
    click(980, 2250)
    wechatShare()
    // 点击活动
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 3, 2, 10)
    }
    sleep(3000)
    click(540, 1200)
    sleep(3000)
    // 点击分享
    click(970, 140)
    wechatShare()
    // 点击资讯
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 4, 3, 10)
    }
    sleep(3000)
    click(540, 450)
    sleep(3000)
    click(990, 2270)
    sleep(3000)
    // 点击分享
    click(980, 2280)
    wechatShare()
    toast("领克" + i + "签到完成")
    kill.run()
    backHome.run()
}

toast(appName + "全部签到完成")
