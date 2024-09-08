class Student {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.score = builder.score;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class StudentBuilder {
    constructor() {
        this.name = '';
        this.age = 0;
        this.score = 0;
    }

    withName(name) {
        this.name = name;
        return this;
    }

    withAge(age) {
        this.age = age;
        return this;
    }

    withScore(score) {
        this.score = score;
        return this;
    }

    build() {
        return new Student(this);
    }
}

const studentBuilder = new StudentBuilder();
const student = studentBuilder.withName('Prototype').withAge(20).withScore(0).build();
console.log(student.toString());