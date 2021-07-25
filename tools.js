var tools = {}

tools.normalRetry = function (type, keyword, idipt, times) {
    // 循环查找，返回boolean
    while (times > 0) {
        if (type(keyword).indexInParent(idipt).exists()) {
            type(keyword).indexInParent(idipt).findOne().click()
            return true
        } else {
            times --
            sleep(1000)
        }
    }
    return false
}

tools.normalClickRetry = function (type, keyword, idipt, times) {
    // 用于不可点击对象，循环查找，返回boolean
    while (times > 0) {
        if (type(keyword).indexInParent(idipt).exists()) {
            let x = type(keyword).indexInParent(idipt).findOne().bounds().centerX()
            let y = type(keyword).indexInParent(idipt).findOne().bounds().centerY()
            click(x, y)
            return true
        } else {
            times --
            sleep(1000)
        }
    }
    return false
}

tools.specialRetry = function (clsName, dpth, drod, idipt, times) {
    while (times > 0) {
        let obj = className(clsName).depth(dpth).drawingOrder(drod).indexInParent(idipt)
        if (obj.exists()) {
            obj.findOne().click()
            return true
        } else {
            times --
            sleep(1000)
        }
    }
    return false
}

tools.specialClickRetry = function (clsName, dpth, drod, idipt, times) {
    while (times > 0) {
        let obj = className(clsName).depth(dpth).drawingOrder(drod).indexInParent(idipt)
        if (obj.exists()) {
            let x = obj.findOne().bounds().centerX()
            let y = obj.findOne().bounds().centerY()
            click(x, y)
            return true
        } else {
            times --
            sleep(1000)
        }
    }
    return false
}

tools.antiWindow = function (appName) {
    // 确保进入app
    let windows = auto.windows
    let last_item = windows.slice(-1)
    let last_title = last_item[0]["title"]
    // 如果title是系统桌面就等待
    while (last_title == "系统桌面") {
        sleep(500)
        windows = auto.windows
        last_item = windows.slice(-1)
        last_title = last_item[0]["title"]
    }
    if (last_title != appName) {
        return false
    } else {
        return true
    }
}

try {
    module.exports = tools
} catch (e) {
    toast("不支持单独运行")
}
