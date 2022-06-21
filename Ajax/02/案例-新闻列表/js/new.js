$(function () {

    function buling(n) {
      return  n < 0 ? '0' + n : n
    }

    template.defaults.imports.dateFormat = function (dt) {
        var dt = new Date(dt)
        var y = dt.getFullYear()
        var m = buling(dt.getMonth() + 1)
        var d = buling(dt.getDate())

        var hh = buling(dt.getHours())
        var mm = buling(dt.getMinutes())
        var ss = buling(dt.getSeconds())

        return y + '-' + m + '-' + d + ' ' + hh + '-' + mm + '-' + ss
    }





    //调用函数
    getNews();
    //创建函数 获取新闻内容
    function getNews() {
        $.ajax({
            type: "GET",
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function (res) {
                if (res.status !== 200) return alert('拉取失败')

                for (var i = 0; i < res.data.length; i++) {
                    // 把每一项的 tags 属性，从字符串改造成字符串的数组
                    res.data[i].tags = res.data[i].tags.split(',')
                }

                var htmlStr = template("mb", res)
                $("#news-list").html(htmlStr)
            }
        })

    }
})