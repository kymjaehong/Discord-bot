const Discord= require('discord.js');

module.exports= {
    name: "프로필",
    description: "프로필을 보여줍니다.",
    execute(message){
        const embed= new Discord.MessageEmbed()
        .setAuthor('슬기봇', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW13spDkoizdbghc9nBLD-s1-H-AkaNAXlFA&usqp=CAU')
        .setTitle('슬기봇 프로필')
        .setURL()
        .setColor(0xFFFFFF)
        .setDescription('안녕하세요 슬기봇입니다~')
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW13spDkoizdbghc9nBLD-s1-H-AkaNAXlFA&usqp=CAU')
        .addField('취미', '아무것도 안하기') // 25개까지 작성 가능, 세 번쨰 인자에 true를 입력하면 3개의 컬럼 배열로 나열된다.
        .addField('취미', '축구')
        .addField('취미', '게임')
        .addFields(
            {name: '1', value: '11', inline: true},
            {name: '2', value: '22', inline: true},
            {name: '3', value: '33', inline: true}
        ) // addField 함수 버전
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW13spDkoizdbghc9nBLD-s1-H-AkaNAXlFA&usqp=CAU')
        .setTimestamp(new Date())
        .setFooter('젤 하단 멘트~', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW13spDkoizdbghc9nBLD-s1-H-AkaNAXlFA&usqp=CAU')

        message.channel.send(embed);
    }
}