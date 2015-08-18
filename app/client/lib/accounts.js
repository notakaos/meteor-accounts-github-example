// ref. http://stackoverflow.com/questions/24689889/the-accounts-github-package-is-causing-my-meteor-user-to-have-a-null-email

Accounts.ui.config({
    requestPermissions: {
        github: ['user:email']
    }
});