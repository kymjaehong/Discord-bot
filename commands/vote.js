const Discord= require('discord.js');

module.exports= {
    name: "투표",
    description: "",
    execute(message, args){
        const embed= new Discord.MessageEmbed()
        .setTitle('투표합시다~ 😀')
        .setDescription(args)
        .setColor('red');

        message.channel.send(embed)
        .then((message)=> {
            message.react('😍')
            message.react('😂')
        });
    }
}