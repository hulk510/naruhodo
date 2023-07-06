import { Client, Events, GatewayIntentBits } from 'discord.js';

// discord bot 作成
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// discord bot トークン
const token = process.env.DISCORD_BOT_TOKEN;
// discord bot 起動
client.login(token);
// discord bot 起動時の処理
client.on('ready', () => {
  console.log('ready...');
});

client.on(Events.ThreadCreate, (thread) => {
  if (thread.parentId == '1124328344473849926') {
    // チャンネルIDで取得する
    const channel = client.channels.cache.get('1123828431130472518');
    // チャンネルに送信する
    if (!channel?.isTextBased()) {
      return;
    }

    channel.send(`${thread.url} 投稿されたよ！`);
  }
});
