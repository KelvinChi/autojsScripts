function wechatShare() {
    // 选择微信
    sleep(1000)
    click(280, 2100)
    tools.specialClickRetry("android.widget.LinearLayout", 8, 2, 1, 10)
    // tools.specialRetry("android.widget.RelativeLayout", 10, 4, 3, 10)
    // click(600, 660)
    // tools.normalRetry(text, "分享", 2, 10)
    // tools.normalRetry(text, "返回LynkCo", 0, 10)
    // swipe(270, 200, 810, 200, 200)
    // 不需要真实分享，所以微信页面也需要一次返回
    sleep(1000)
    back()
    sleep(1000)
    back()
    sleep(1000)
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
    sleep(5000)
    if (text("暂不更新").exists()) {
        tools.normalRetry(text, "暂不更新", 5, 10)
        sleep(1000)
    }
    // 点击动态
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 2, 1, 20)
    }
    // 点击分享
    click(540, 365)
    sleep(5000)
    click(980, 2250)
    wechatShare()
    // 点击活动
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 3, 2, 10)
    }
    sleep(5000)
    click(540, 1200)
    sleep(5000)
    // 点击分享
    click(970, 140)
    wechatShare()
    // 点击资讯
    for (let i=0; i<5; i++) {
        tools.specialClickRetry("android.widget.FrameLayout", 17, 4, 3, 10)
    }
    sleep(5000)
    click(540, 450)
    sleep(5000)
    click(990, 2270)
    sleep(5000)
    // 点击分享
    click(980, 2280)
    wechatShare()
    toast("领克" + i + "签到完成")
    kill.run()
    backHome.run()
}

toast(appName + "全部签到完成")
