const admins = new Telegraf(process.env.admins);
const bot = new Telegraf(process.env.BOT_TOKEN);
const chanLink = new Telegraf(process.env.chanLink);
const channel = new Telegraf(process.env.channel);
const inviteLink = new Telegraf(process.env.inviteLink);
const kh = new Telegraf(process.env.kh);
const mongoLink = new Telegraf(process.env.mongoLink);
const paymentsChan = new Telegraf(process.env.paymentsChan);
/*
module.exports = {
  token: 'bot token, string', // you can get it in @BotFather
  mongoLink: 'link to MongoDB - database, string', // e.g. Mongo Atlas
  channel: 'promoting channel`s id, string or number (begins with minus)', 
  chanLink: 'invite link to chanel, string', // can get this in channel`s settings
  paymentsChan: 'channel where to publish withdraw requests, string or number', // test chan
  inviteLink: 't.me/${past here bot`s link}?start=params', // params - only user id or something extra
  admins: ['admins', 'ids'],
  kh: 'developer`s id for errors sending'
}
*/
