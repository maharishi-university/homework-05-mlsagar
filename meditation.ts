export class Meditation {
    constructor(
        private timer: number
    ) {}

    start() {
        const interval = setInterval(() => { 
            console.log(this.timer);
            this.timer -= 1;

            if (this.timer === 0) {
                clearInterval(interval);
                console.log("Jay Guru Dev");
            } 
        }, 0);        
    }
    
}