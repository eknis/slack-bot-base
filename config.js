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