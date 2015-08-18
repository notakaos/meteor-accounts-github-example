# meteor-accounts-github-example

Meteor example of accounts-github package

# How to setup

## 1) Clone this repository to local and run

```
git clone https://github.com/nobutakaoshiro/meteor-accounts-github-example.git
cd meteor-accounts-github-example/app
meteor
```

## 2) Add {{> loginButtons}} to Meteor Template

app.html

```
<template name="hello">
  <!-- ... -->
  {{> loginButtons}}
</template>
```

## 3) Create new GitHub Developer application

1. Goto: https://github.com/settings/applications/new
2. Enter app information below and click **Register application**
  - **Application name:** meteor-github-accounts-example
  - **Homepage URL:** http://localhost:3000/
  - **Application description:** (optional)
  - **Authorization callback URL:** http://localhost:3000/_oauth/github
3. Note Client ID and Client Secret

## 4) Configure GitHub Login

1. Open http://localhost:3000/ with Web Browser
2. Click **Configure GitHub Login**
3. Enter GitHub Dev App's Clint ID and Client Secret
  * Choose the login style: **Popup-based login (recommended for most applications)**
4. Click **Save Configuration**

## 5) Login with GitHub

1. Open http://localhost:3000/ with Web Browser
2. Click **Sign in with GitHub**
  * Will open Pop-up window, then Sign in with GitHub Account
3. Click Authorize application

# Memo

```
meteor create app
cd app
meteor add accounts-ui accounts-github
meteor add bruz:github-api
```

