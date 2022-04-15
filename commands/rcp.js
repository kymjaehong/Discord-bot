module.exports= {
    name: "덤벼",
    description: "",
    execute(message, args){
        if(args[0]=== '가위'| args[0]=== '바위'| args[0]=== '보'){
            const human= args[0]; // 사람 입력
            const list= ['가위', '바위', '보']; // 봇의 대답 리스트
            const random= Math.floor(Math.random()* 3); // 0.000 ~ 2.999... 까지 랜덤한 숫자-> 0 ~ 2 숫자 생성
    
            //message.reply(list[random]);
            const bot= list[random];
    
            let winner= '';
            if(human=== bot){
                winner= '비김';
            }else{
                human=== '가위'?(winner= bot=== '바위'? '봇': '인간'): '';
                human=== '바위'?(winner= bot=== '보'? '봇': '인간'): '';
                human=== '보'?(winner= bot=== '가위'? '봇': '인간'): '';
            }
            const result= `
            사람: ${convertEmoji(human)} vs 봇: ${convertEmoji(bot)}
            ${winner=== '비김'? '우리는 비겼다 인간.': winner+ '의 승리다'}
            `
            message.reply(result);
        }
    }
}
const convertEmoji= (who)=> {
    if(who=== '가위'){
        return '👉';
    }else if(who=== '바위'){
        return '🤜';
    }else if(who=== '보'){
        return '🫱';
    }
}