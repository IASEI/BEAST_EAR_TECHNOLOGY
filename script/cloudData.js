logins=function(A) {
      AV.User.logIn(User["name"], User["pass"])
        .then(
          function(user) {
            User["userNet"]=user.toJSON();
          }
        )
        .catch(alert);
    };
