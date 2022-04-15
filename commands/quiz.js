const quiz= require('../quiz.json');

module.exports= {
    name: "퀴즈",
    description: "",
    execute(message){
        const item= quiz[Math.floor(Math.random()* quiz.length)];
        const limit= 3; // 제한 시간
        const filter= (response)=> {
            return item.answer.some((answer)=> answer=== response.content); // true or false 
        } // 봇의 대답 채점을 위해 
        message.channel.send(`${item.question} (제한 시간: ${limit}초)`)
        // 문제를 맞췄는지 봇이 체크
        // awaitMessages 기다리는 동안 filter에 작성한 내용이 맞는지 틀린지 확인
        .then(()=> {
            message.channel.awaitMessages(filter, {max: 1, time: limit*1000})
            .then((collected)=> {
                message.channel.send(`${collected.first().author} 👈 정답!`)
            }) // 맞을 시
            .catch((error)=> {
                message.channel.send('틀렸습니다 🫠')
            }) // 틀릴 시
        })
    }
}