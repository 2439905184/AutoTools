var 自定义点赞概率=rawInput("请输入点赞概率，int数值不加%号,如10为10%的概率")
var s = launchApp("微视")
console.show()
console.log(s)
console.log("等待微视打开")
waitForPackage("com.tencent.weishi")
console.log("微视打开了")
waitForActivity("com.tencent.oscar.module.main.MainActivity")
console.log("主界面已经启动，准备执行代码")
console.log("点赞概率"+自定义点赞概率+"%")
console.log("暂停3s")
sleep(3000)
toast("开始滑动")

//存在 读取配置文件 否则创建

while (true) {
    var delay = random(3000, 8000)
    var 随机点赞概率 = random(0, 100)
    if(随机点赞概率>自定义点赞概率)
    {
        //点赞代码
        toast("执行点赞代码")
        }
    scrollDown(0)
    console.log("控件滑动")
    console.log("暂停" + delay + "s")
    sleep(delay)
    toast("暂停按音量下键")
}