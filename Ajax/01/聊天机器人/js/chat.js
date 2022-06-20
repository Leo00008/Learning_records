$(function () {
  //getMsg(text)里的url换成 http://www.liulongbin.top:3006/api/robot
  // getVoice(text)  里的语音url换成 http://www.liulongbin.top:3006/api/synthesize


  //给发送按钮绑定事件

  $("#btnSend").on("click", function () {
    var text = $("#ipt").val().trim();
    if (text.length <= 0) {
      return $("#ipt").val("")
    }

    //如果输入了消息，追加
    $("#talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
    $("#ipt").val("")
    resetui();
    // 调用 接受ai信息的函数
    getMsg(text);
  })

  //定一个函数 向ai服务器传递信息  获取ai机器人的信息
  function getMsg(text) {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/robot",
      data: {
        spoken: text
      }, success(res) {
        if (res.message === "success") {
          //接收聊天消息  机器人返回的文字
          var msg = res.data.info.text

          $("#talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
        }
        resetui();
        //把机器人的文字传给这个函数 发音
        getVoice(msg)
      }
    })
  }

  function getVoice(text) {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/synthesize",
      data: {
        text: text
      }, success: function (res) {
        if (res.status === 200) {
          //播放语音  

          $("#voice").attr("src", res.voiceUrl)
        }
      }
    })
  }

  //检测全局按键
  $(".footer").keypress(function (e) {
    var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (eCode == 13) {
      $("#btnSend").click();
      //自己写判断操作
    }
  })
})