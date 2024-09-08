class FifaOnlinePlayer {
    constructor (name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    scoreUp () {
        this.score++;
    }

    clone () {
        return new FifaOnlinePlayer(this.name, this.age, this.score);
    }
}

FifaOnlinePlayer.prototype.stats = {
    goals: 0,
    assists: 0,
    passes: 0
};

const prototype = new FifaOnlinePlayer('Prototype', 20, 0);

const messi = prototype.clone();
const ronaldo = prototype.clone();

messi.scoreUp();
ronaldo.scoreUp();

console.log(JSON.stringify(messi));
console.log(JSON.stringify(ronaldo));

messi.stats.goals = 10;

console.log(JSON.stringify(messi.stats));
console.log(JSON.stringify(ronaldo.stats)); // solve with shallow copy or deep copy