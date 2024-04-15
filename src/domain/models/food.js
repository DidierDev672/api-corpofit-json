class Food {
    constructor(title, value, isSelected, ContentFood, ContentSchedule, Contents) {
        this.title = title;
        this.value = value;
        this.isSelected = isSelected;
        this.ContentFood = ContentFood;
        this.ContentSchedule = ContentSchedule;
        this.Contents = Contents;
    }
}

class Contents {
    constructor(title, isSelected) {
        this.title = title;
        this.isSelected = isSelected;
    }
}


class ContentFood {
    constructor(title, value) {
        this.title = title;
        this.value = value;
    }
}

class ContentSchedule {
    constructor(title, FormatTime) {
        this.title = title;
        this.FormatTime = FormatTime;
    }
}

class FormatTime {
    constructor(hours, minutes, zTime) {
        this.hours = hours;
        this.minutes = minutes;
        this.zTime = zTime;
    }
}