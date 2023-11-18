launchApp("快手极速版")
sleep(5600)
while(true)
{
    toast("上滑")
    var x1 = random(device.width/4,(device.width/4)*3);
        var y1 = random((device.height/4)*3.5,(device.height/4)*3.75);
        var x2 = random(device.width/4,(device.width/4)*3);
        var y2 = random((device.height/4)*0.25,(device.height/4)*0.5);
    swipe(x1, y1, x2, y2,random(500,1000));
    var sleeptime = random(2000,5000)
    sleep(sleeptime)
}
