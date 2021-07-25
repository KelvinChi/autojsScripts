var tools = require("./tools.js")
tools.normalRetry(text, "签到", 10, 4) ? toast("签到完成") : toast ("签到失败")