class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }

    teacherQ() {
        console.log(this.teacher);
    }
}

let ws = new Workshop("Kyle");

ws.teacherQ();