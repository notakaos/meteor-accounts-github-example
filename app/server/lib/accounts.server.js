// ref. http://stackoverflow.com/questions/24689889/the-accounts-github-package-is-causing-my-meteor-user-to-have-a-null-email

Accounts.onLogin(function(info) {
  var user = info.user;
  if(user) {

  var github = new GitHub({
        version: "3.0.0", // required
        timeout: 5000     // optional
    });

    github.authenticate({
      type: "oauth",
      token: user.services.github.accessToken
    });

    try {
      var result = github.user.getEmails({user: user.services.github.username});
      var email = _(result).findWhere({primary: true});

      Meteor.users.update({
        _id: user._id
      },
      {
        $set: {
          'profile.email': email.email,
          'services.github.email': email.email
        }
      })
    }
    catch(e) {
      console.log(e.message);
    }
  }
});