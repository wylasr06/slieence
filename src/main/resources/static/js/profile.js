$(document).ready(
    function () {
        $(".releaseIssues_div_icon").click(function () {
            console.log("stupid you ...");
            $(".edit_panel_div").show();
            //$(".issuePicture_div").show();
            $(".releaseIssue_div").show();
            $(".addPicture_div").show();
            $(".edit_panel_div").text("  ");
            $(".edit_panel_div").focus();
            $(".releaseHistory_div").css("margin-top","10px");
        });

        /*$(".addPicture_div").click(function () {
            console.log("stupid fucking guy...")
            $(".issuePicture_div").show();
        });*/

        // $(".releaseIssue_div").click(function () {
        //     console.log($(".edit_panel_div").html()+" I am here with you");
        // });
        /**文件上传和预览*/
        let readURL = function(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    $(".issuePicture_div").show();
                    $('.profile-pic').attr('src', e.target.result);
                    $('.profile-pic').css('display','block');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $(".file-upload").on('change', function(){
            readURL(this);
        });
        $(".addPicture_div").on('click', function() {
            $(".file-upload").click();
        });
        /**文件上传和预览*/

        /**
         * 发表新鲜事
         */
        $('.releaseIssue_div').on('click',function () {
            let content = $(".edit_panel_div").html();
            let img = $('.profile-pic')[0].src;
            console.log("content : "+content+" , img : "+img);
            /*$.post(
                '/releaseNews',
                {"content":content,"img":img},
                function (result) {
                console.log(result+" 我们都遍体鳞伤，也慢慢坏了心肠")
                if(result.success >0){

                }else{

                }
            },
                "json");*/
            $.ajax({
                type:"post",
                url:"/releaseNews",
                contentType:"application/json",
                dataType:"json",
                data:JSON.stringify({"img":img,"content":content}),
                success:function (result) {
                    console.log("发表成功 : "+result);
                },
                error:function (msg) {
                    console.log("发表新鲜事失败 "+msg);
                }
            })
        })
        /**
         * 发表新鲜事
         */
    }
);
