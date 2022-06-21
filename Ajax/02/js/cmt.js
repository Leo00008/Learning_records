$(function () {

    function getCommentList() {
        $.ajax({
            type: 'GET',
            url: "http://www.liulongbin.top:3006/api/cmtlist",
            data: {},
            success: function (res) {
                if (res.status !== 200) return alert('获取数据失败')
                var rows = [];
                $.each(res.data, function (i, item) {
                    var str = '<li class="list-group-item"><span class="badge" style="background: #f0ad4e; ">评论时间：' + item.time + '</span> <span class="badge" style="background:#5bc0de; ">评论人：' + item.username + '</span>' + item.content + '</li>'
                    rows.push(str)
                })
                $(".list-group").empty().append(rows.join(''))
            }
        })
    }

    getCommentList();

    // 给表单绑定submit事件
    // $("#formAddCmt").submit(function (e) {

    //     // //阻止表单默认提交行为
    //     // e.preventDefault();
    //     // console.log($($(this)));
    //     // //获取表单中的数据
    //     // var data = $(this).serialize();
    //     // console.log($(this).serialize());

    //     // $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
    //     //     if (res.status !== 201) return alert('提交失败')
    //     //     getCommentList()
    //     // }).
        
    // })
    $('#formAddCmt').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
          if (res.status !== 201) {
            return alert('发表评论失败！')
          }
          getCommentList()
        //   $('#formAddCmt')[0].reset()
        })
      })
}
)





