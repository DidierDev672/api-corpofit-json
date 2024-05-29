class Exercise {
    constructor(id, name, description, repetitions, sets, duration, restTime, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.repetitions = repetitions;
        this.sets = sets;
        this.duration = duration;
        this.restTime = restTime;
        this.category = category;
    }
}

module.exports = Exercise;
