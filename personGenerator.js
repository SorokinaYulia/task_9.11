const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Ирина",
            "id_4": "Юлия",
            "id_5": "Ксения",
            "id_6": "Нина",
            "id_7": "Екатерина",
            "id_8": "Ольга",
            "id_9": "Татьяна",
            "id_10": "Ульяна"
        }
    }`,

    professionJson:  `{
        "count": 10,
        "list": {     
            "id_1": "Строитель",
            "id_2": "Врач",
            "id_3": "Продавец",
            "id_4": "Водитель",
            "id_5": "Учитель",
            "id_6": "Инженер-технолог",
            "id_7": "Ученый",
            "id_8": "Актер",
            "id_9": "Шахтер",
            "id_10": "Фрезеровщик"
        }
    }`,

   
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        const male = this.randomIntNumber();
        let gender = male == 1? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },
    
    randomFirstName: function() {
        

    if (this.person.Gender === this.GENDER_MALE) {

            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        };

    },


     randomSurname: function() {
      
        if (this.person.Gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    randomPatronomic: function() {
        

        if (this.person.Gender === this.GENDER_MALE) {
    
                return this.randomValue(this.firstNameMaleJson) + 'ович';
            } else {
               return this.randomValue(this.firstNameMaleJson) + 'овна';
            };
    
       },    

   randomBirthYear: function (min, max) {
        min = Math.ceil(1955);
        max = Math.floor(2022);
        return Math.floor(Math.random() * (max - min + 1) + min);

    },

    getPerson: function () {
        this.person = {};
        this.person.Gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.Surname = this.randomSurname();
        this.person.Patronomic = this.randomPatronomic();
        this.person.BirthYear = this.randomBirthYear();
        return this.person;
    },

};




