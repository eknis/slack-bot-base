module.exports = [
  {command: 'client -h', func: 'help', summary: 'hear list'},
  {command: 'hello', func: 'hello', summary: 'say hello'},
  {command: 'whereis', func: 'whereis', summary: 'pwd'},
  {command: 'save members', func: 'savemembers', summary: 'save channel users'},
  {command: 'cmd (.*)', func: 'cmd', summary: 'use command'}
];