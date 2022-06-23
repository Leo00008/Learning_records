window.onload = function () {
    //获取输入框
    var iptSearch = document.querySelector("#ipt")
    //输入框绑定事件  keyup 
    iptSearch.addEventListener('keyup', function () {
        //获取输入框的内容并且去除两端空格
        var content = iptSearch.value.trim()
        //如果输入的内容为空， flase
        if (content.length <= 0) {
            return false
        }
        getSuggestList(content)
    })
    function getSuggestList(content) {
        $.ajax({
            type: 'GET',
            url: 'https://suggest.taobao.com/sug?q=' + content,
            //如果要使用ajax发送跨域请求，必须使用dataType: 'jsonp',
            dataType: 'jsonp',
            success: function (res) {
                console.log(res);
            }
        })
    }




}