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
            skills : '하루에 한 명씩 적을 죽인다',
            scripts : '스크립트 데스',
            videoSrc : '',
            quote : '대사입니다.',
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
            skills : '스킬',
            scripts : '스크립트',
            videoSrc : '주소',
            quote : 'bb',
        }
        return character
    }
    getShaman(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
               
    }
    getChristian(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
               
    }
    getComman(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
              
    }
    getCitizen(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
              
    }
    getDetective(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
        }
        return character
               
    }
    getPolice(){  
        let character = {
            job : '',
            skills : '',
            scripts : '',
            videoSrc : '',
            quote : '',
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