var LastNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
    FirstNames = ["Jackey", "Gary", "Ben"],
    Nummers = ["0000000000", "0000000001", "0000000002", "0000000003", "0000000004", "0000000005", "0000000006", "0000000007", "0000000008", "0000000009"];

function createPersonRandomData(count) {
    var data = [];

    for (var i = 0; i < count; i++) {
        var lastname = LastNames[Math.floor(Math.random() * LastNames.length)],
            firstname = FirstNames[Math.floor(Math.random() * FirstNames.length)],
            nummer = Nummers[Math.floor(Math.random() * Nummers.length)];

        data.push({
            Id: i + 1,
            LastName: lastname,
            FirstName: firstname,
            Nummer: nummer
        });
    }
    return data;
}

var Achternaam = ["Jackey", "Dennis"],
    Voornaam = ["Zhuang", "Klop"],
    Functie = ["Implementatie consultant"],
    Email = ["Jackey.Zhuang@thebeaglearmada.nl", "Dennis.Klop@thebeaglearmada.nl"],
    Telephones = ["12345678", "87654321"];

function createContactPersonRandomData(count) {
    var data = [];

    for (var i = 0; i < count; i++) {
        var lastname = Achternaam[Math.floor(Math.random() * Achternaam.length)],
            firstname = Voornaam[Math.floor(Math.random() * Voornaam.length)],
            functie = Functie[Math.floor(Math.random() * Functie.length)],
            email = Email[Math.floor(Math.random() * Email.length)],
            telephone = Telephones[Math.floor(Math.random() * Telephones.length)];

        data.push({
            Id: i + 1,
            LastName: lastname,
            FirstName: firstname,
            Functie: functie,
            Email: email,
            Telephone: telephone
        });
    }
    return data;
}

function generatePeople(itemCount, callback) {
    var data = [],
        delay = 25,
        interval = 500,
        starttime;

    var now = new Date();
    setTimeout(function () {
        starttime = +new Date();
        do {
            var firstName = firstNames[Math.floor(Math.random() * firstNames.length)],
                lastName = lastNames[Math.floor(Math.random() * lastNames.length)],
                city = cities[Math.floor(Math.random() * cities.length)],
                title = titles[Math.floor(Math.random() * titles.length)],
                birthDate = birthDates[Math.floor(Math.random() * birthDates.length)],
                age = now.getFullYear() - birthDate.getFullYear();

            data.push({
                Id: data.length + 1,
                FirstName: firstName,
                LastName: lastName,
                City: city,
                Title: title,
                BirthDate: birthDate,
                Age: age
            });
        } while (data.length < itemCount && +new Date() - starttime < interval);

        if (data.length < itemCount) {
            setTimeout(arguments.callee, delay);
        } else {
            callback(data);
        }
    }, delay);
}
