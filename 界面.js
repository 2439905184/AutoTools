  var float = floaty.window(
      <vertical>
      <button id="access" text="转到无障碍功能" w="auto"/>
      <button id="setting" text="转到软件设置" w="auto"/>
      <button id="start" text="启动脚本" w="auto"/>
      <button id="hide" text="隐藏悬浮窗" w="auto"/>

  </vertical>
  );

  //float.setAdjustEnable(true);
 
float.exitOnClose()
float.setAdjustEnabled(true)
  float.access.on("click", function() {
      app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
      });
      toast("请打开此软件的无障碍功能")
  })
  float.start.on("click", function() {
     toast("启动脚本")
  })
  float.setting.on("click", function() {
     toast("请给此软件授权");
//app.openAppSetting();
app.launchPackage("com.android.settings")
//app.startActivity({className:"com.android.settings"})
  })
  float.hide.on("click",function()
  {
      float.setSize(200,500)
      })
  setInterval(()=>{}, 1000);
  //  float.setAdjustEnable(true);