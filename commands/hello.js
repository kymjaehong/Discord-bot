module.exports= {
    name: "안녕",
    description: "",
    execute(message){
        return message.channel.send(`${message.author}, 안녕!`)
    }
}