const fs= require('fs'); 

module.exports= {
    name: "용돈",
    description: "",
    execute(message, args){
        const id= message.author.id;
        const name= message.author.username;

        const filePath= `./data/${id}.json`;

        !fs.existsSync(filePath)? fs.writeFileSync(filePath, JSON.stringify({})): null; // 파일이 없다면 실행

        // 파일을 읽어서 user에 저장
        const user= JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        // 오늘 날짜 생성
        const today= new Date();  
        const date= ''+ today.getFullYear()+ today.getMonth()+ today.getDate();
        // 돈을 얼마나 지급할지
        const howMuch= 5000;

        //console.log(args[0])
        if(args[0]=== '줘!'){
            let saveUser= {}; // 유저 정보를 업데이트할 변수
            if(user.id){ // 유저 정보가 있다면
                if(user.date=== date){ // 용돈을 마지막으로 받은 날짜가 오늘이라면
                    message.reply(`아까 받았잖아 🤬 내일 받아!`)
                    saveUser= user; // 정보를 받지 않고 유지
                }
                else{ // 마지막 날짜가 오늘이 아니라면
                    message.reply(`${howMuch}원을 지급해줄게~\n${name}의 현재 잔액은 ${user.money}원-> ${user.money+ user.howMuch}원이야~`);
                    saveUser= { // 갱신할 정보 입력
                        //id: id, 키와 값이 같다면 한 번만 입력 가능
                        id,
                        name,
                        date,
                        money: user.money+ howMuch
                    }
                }
            }
            else{ // 유저 정보가 없다면
                message.reply(`${name}!! 시작하는 걸 환영해 ${howMuch}원이 지급됐어!`);
                saveUser= {id, name, date, money: howMuch}; // 돈은 기존 돈에 추가하는 것이 아니라 무조건 5000원(설정 값)
            }
            // 파일에 saveUser를 저장
            fs.writeFileSync(filePath, JSON.stringify(saveUser)); // 새로운 정보를 파일에 쓰기
        }
        else if(args[0]=== '잔액!'){
            user.id? message.reply(`${name}의 잔액은 ${user.money}원이야`): message.reply(`등록되지 않은 유저네~`);
        }
    }
}