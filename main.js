const fs= require('fs'); // node.js가 기본적으로 가지고 있는 모듈- 파일을 읽고 쓰고 할 수 있다.
const Discord= require('discord.js');
const {prefix, token}= require('./configs.json');

const client= new Discord.Client();
client.commands= new Discord.Collection();

const commandFiles= fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));
// commands 파일 안의 모든 js 파일

for (const file of commandFiles){
    const command= require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', (message)=> {
    // !로 시작하지 않으면 대답을 하지 않고 봇이 말한다면 중단
    if(!message.content.startsWith(prefix)|| message.author.bot) return;
    if(message.author.id=== client.user.id) return;

    const args= message.content.slice(prefix.length).trim().split(/ +/);
    const command= args.shift();

    // 명령어가 파일 안에 들어있는지 확인하고 없다면 중단
    if(!client.commands.has(command)) return;
    
    // 실행한 코드 작성, 실패하면 catch에서 에러를 반환
    try{
        client.commands.get(command).execute(message, args);
    }
    catch(error){
        console.error(error);
    }
});
client.login(token);