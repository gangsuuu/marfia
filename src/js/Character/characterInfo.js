export default class CharacterInfo{
    constructor(){

    }
    selectCharacter(job) {
        let character
        switch(job) {
            case 'mafia':
                character = this.getMafia();
                break;
            case 'doctor':
                character = this.getDoctor();
                break;
            case 'reporter':
                character = this.getReporter();
                break;
            case 'shaman':
                character = this.getShaman();
                break;
            case 'christian':
                character = this.getChristian();
                break;
            case 'conman':
                character = this.getComman();
                break;
            case 'citizen':
                character = this.getCitizen();
                break;
            case 'detective':
                character = this.getDetective();
                break;
            case 'police':
                character = this.getPolice();
                break;
            case 'hidden':
                character = this.getHidden();
                break;
        }

        character.work = job
        return character
    }

    getMafia(){
        let character = {
            job : '마피아',
            skills : '첫번째 라운드에서 시민을 한명 처형 하며, 두번째 라운드 부터 매 라운드 마다 시민 2명을 처형할 수 있다',
            scripts : '과감시 영원한 밤이 찾아올 것 입니다. <br>다시는 아침을 보지 못 할 것 입니다.',
            videoSrc : '',
            quote : '다시는 아침을 보지 못 할 것 입니다.',
        }
        return character
    }
    getDoctor(){  
        let character = {
            job : '의사',
            skills : '스킬1',
            scripts : '스크립트',
            videoSrc : '영상주소',
            quote : 'aa',
        }
        return character
    }
    getReporter(){  
        let character = {
            job : '기자',
            skills : '매 라운드마다 사람들의 직업을 취재 할 수 있다.',
            scripts : '과감시에 마피아 4명이 잠입했다는 특보를 접했습니다.<br>마피아로부터 자신을 지키고 마피아의 정체를 밝혀내<br>특종을 잡아봅시다.',
            videoSrc : '',
            quote : '안녕하십니까.<br>한마디 부탁드리겠습니다.',
        }
        return character
    }
    getShaman(){  
        let character = {
            job : '무당',
            skills : '짝수 라운드마다 죽은 플레이어를 선택하여, 해당 플레이어의 직업을 알 수 있다.',
            scripts : '오늘따라 흉흉한 기운이 느껴지는 과감시<br>곧이어 안좋은 일이 벌어질 것만 같은 기분이 들어 나가보기로 합니다.',
            videoSrc : '',
            quote : '신이 노하셨노라.<br> 죽은사람의 목소리가 들린다',
        }
        return character
               
    }
    getChristian(){  
        let character = {
            job : '성직자',
            skills : '시민이 3명 죽었을 때 딱 한 명을 되살릴 수 있다.',
            scripts : '신실한 성직자인 당신은 어느날 하늘로부터의 전언을 들었습니다.<br>4명의 악의 무리가 근처에 도사리고 있으니<br>그들로 부터 어린양을 지켜주거라.<br>',
            videoSrc : '',
            quote : '신은 언제나 여러분을 사랑하십니다.',
        }
        return character
               
    }
    getComman(){  
        let character = {
            job : '사기꾼',
            skills : '죽은플레이어의 직업과 능력을 뺏을 수 있다.',
            scripts : '과감시에 마피아가 잠입했다고 하는데<br> 별로 신경쓰이지 않는 당신 <br> 누구의 직업을 뺏아볼까요?',
            videoSrc : '',
            quote : '사기꾼이라구요?<br> 저는 결백합니다.',
        }
        return character
              
    }
    getCitizen(){  
        let character = {
            job : '모범시민',
            skills : '단 한번 추방거절권을 사용할 수 있다.',
            scripts : '과감시의 모범시민인 여러분<br>앞으로도 과감시가 빛날 수 있도록 마피아를 잡아봅시다!',
            videoSrc : '',
            quote : '우리가 있기에 과괌시가 빛난다.<br> 마피아를 잡아내자!',
        }
        return character
              
    }
    getDetective(){  
        let character = {
            job : '탐정',
            skills : '매 라운드마다 특정 플레이어의 직업을 추리할 수 있다.',
            scripts : '탐정인 당신은<br> 쫓고있던 마피아가 과감시로 갔다는 소식을 알게 되었습니다.<br>시민으로 위장한 마피아를 추리해보세요! ',
            videoSrc : '',
            quote : '제 추리로는 당신이 마피아 입니다.<br>풀리지 않는 수수께기는 없습니다.',
           
        }
        return character
               
    }
    getPolice(){  
        let character = {
            job : '경찰',
            skills : '매 라운드마다 플레이어 한명을 특정하여 마피아인지 확인 할 수 있습니다.',
            scripts : '과감시에 마피아 4명이 잠입했다는 첩보를 들었습니다.<br> 밤이되면 찾아오는 마피아의 위협으로부터 시민들을 지켜주세요!<br>성직자가 되어 시민들을 구해주세요.',
            videoSrc : '',
            quote : '마피아는 저희가 잡겠습니다!',
        }
        return character
               
    }
    getHidden(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
               
    }

}