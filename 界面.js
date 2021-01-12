  var float = floaty.window(
      <vertical>
      <button id="access" text="转到无障碍功能" w="auto"/>
      <button id="start" text="启动脚本" w="auto"/>

  </vertical>
  );

  //float.setAdjustEnable(true);
 
float.exitOnClose()
float.setAdjustEnabled(true)
  float.access.on("click", function() {
      app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
      });
  })
  float.start.on("click", function() {
     toast("启动脚本")
  })
  setInterval(()=>{}, 1000);
  //  float.setAdjustEnable(true);