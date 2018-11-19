# what
multi-slack-bot


# Usage

## Installation
```
$ npm install
```

## Getting Start

custom config.js
```
module.exports = {
  bottoken: [slack_bot_token],
  admin: [admin_slack_name],
  github: {
    octo: {
      debug: true,
      baseUrl: 'https://git.gree-dev.net/api/v3',
      headers: {
        accept: '*/*',
        'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
      }
    },
    auth: {
      type: 'basic',
      username: [github_user_name],
      password: [github_user_pass]
    },
    botRepo: {
      owner: [github_owner],
      repo: [github_repo]
    }
  },
  jira: {
    protocol: 'https',
    host: 'jira.gree-office.net',
    username: [jira_user_name],
    password: [jira_user_pass],
    apiVersion: '2',
    strictSSL: true
  },
  confluence: {
    username: [conflu_user_name],
    password: [conflu_user_pass],
    baseUrl:  [conflu_base_url] //ext. https://confluence2.gree-office.net,
    // version: 4 // Confluence major version, optional
  },
  backlog: {
    host: 'cr-gree.backlog.jp',
    apiKey: '[backlog_api_key]'
  }
};
```

### what's going on
```
npm start
```

### forever
```
npm install -g forever
npm run forever
```

### How do I say?
```
client -h
```

# modules

## github client
### import module
https://github.com/octokit/rest.js

## jira client
### import module
https://github.com/jira-node/node-jira-client

## confluence client
### import module
https://github.com/johnpduane/confluence-api

## backlog client
### import module
https://github.com/nulab/backlog-js


# how to develop

`scripts/hear/commands`


```
// testCommand.js
module.exports = [
  {command: 'hoge', func: 'ほげ', summary: 'hogehogeする'}
];
```

| param | what? |
----|----
| command | hear work |
| func | function name |
| summary | for `client -h` |


`scripts/hear/funcs`


```
// testCommandFunc.js
module.exports = {
  hoge: (bot, msg) => {
    bot.reply(msg, 'hogehoge!');
  }
};
```


| call | func |
----|----
| bot | slackbot function|
| msg | slack msg |
| controller | bot function (ex. storage access) |
| apis | external apis |

start and talk.

```
hoge
```

It's easy！
