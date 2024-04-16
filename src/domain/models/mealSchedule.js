class MealSchedule {
    constructor(title, ContentSchedule) {
        this.title = title;
        this.ContentSchedule = ContentSchedule;
    }
}

class ContentSchedule {
    constructor(title) {
        this.title = title;
    }
}

class Format {
    constructor(hours, minutes, zTime) {
        this.hours = hours;
        this.minutes = minutes;
        this.zTime = zTime;
    }
}