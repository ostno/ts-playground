export class Game{

    score = 0;
    scores = [];

    public play() {
        for(let i=0;i<22;i++) {
            this.scores.push(this.rolls());
        }        
        this.compute();
    }

    public rolls() {
        return Math.floor(Math.random()*11);
    }

    public compute() {
        let score = 0;
        for(let i=1;i<=20;i++) {

            if(i===0){
                score += this.scores[i];
            } else if(i%2 !==0) {
                if( i > 2 && this.scores[i-3] === 10) {
                    score += this.scores[i];
                }
                score += this.scores[i];
            } else if(i%2 === 0 ){
                if(this.scores[i-2] === 10) {
                    score += this.scores[i];
                }else if(this.scores[i-1]+this.scores[i-2] === 10) {
                    score += this.scores[i];
                }
                score += this.scores[i];
            }

        }
        if(this.scores[19] === 10) {
            score += this.scores[20] + this.scores[21];
        } else if(this.scores[18]+this.scores[19] === 10) {
            score += this.scores[20];
        }
        this.score = score;
    }

}