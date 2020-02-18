//登录
  logins=function(User) {
        AV.User.logIn(User["name"], User["pass"])
          .then(
            function(user) {
              User["userNet"]=user.toJSON();
              alert(User["userNet"]["headImg"]);
            }
          )
          .catch(alert);
      };
// 更新本地数据
  updateDate=function(User,AV){
    if(User["userNet"]!=null){
      var todo = AV.Object.createWithoutData("User", User["userNet"]["objectId"]);
      todo.fetch().then(function (todo) {
        User["userNet"]=todo.toJSON();
      });
    }
  };

//上传数据
  uploadDate=function(User,AV){
      if(User["userNet"]!=null){
      var todo = AV.Object.createWithoutData("User", User["userNet"]["objectId"]);
      todo.set('email', "1000");
      todo.set('energer', User["userNet"]["energer"]);
      todo.set('gender', User["userNet"]["gender"]);
      todo.set('level', User["userNet"]["level"]);
      todo.set('love', User["userNet"]["love"]);
      todo.set('mobilePhoneNumber', User["userNet"]["mobilePhoneNumber"]);
      todo.set('password', User["userNet"]["password"]);
      todo.set('username', User["userNet"]["username"]);
      todo.save();
    }
  };

  //获取当前时间
   updateTime=function(){
     var myDate = new Date();
     $(".date").text(myDate.getFullYear()+"年"+(parseInt(myDate.getMonth())+1)+"月"+myDate.getDate()+"日");
     var day="星期天";
     switch (myDate.getDay()) {
       case 0:
         day="星期天";
         break;
       case 1:
         day="星期一";
         break;
       case 2:
         day="星期二";
         break;
       case 3:
         day="星期三";
         break;
       case 4:
         day="星期四";
         break;
       case 5:
         day="星期五";
         break;
       case 6:
         day="星期六";
         break;
       default:

     }
     $(".week").text( day);
   }

   //初始化页面数据
   initPage=function(){
     User=api.pageParam.User;
   }
  //
  //  getOnlineImage=function(AV,name){
   //
  //    var query = new AV.Query('_File');
  //   query.startsWith('name', name);
  //   query.find().then(function (students) {
  //     // students 是包含满足条件的 Student 对象的数组
  //     for(var i=0;i<students.length;i++)
  //     {
  //       img.push(students[i].toJSON());
   //
  //     }
   //
  //       return img;
  //   },function (error) {
  //     // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
  //       console.log(error);
  //   });
  //   // updateHtmls();
   //
  //  }

  //设置背景
  setBG=function(num)
  {
    if(name=="")
    return;
    var path="";
    for(var i=0;i<num;i++)
    {
        path+="../";
    }
    path=path+"image/"+"bg/";
    path+=User["background"];
    $(".bg_color_blur").css("background-image","url("+path+")");
    uploadDate(User,AV);
  }

  
