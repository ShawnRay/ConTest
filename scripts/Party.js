var Names = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
    Descriptions = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
    "Software Developer", "Inside Sales Coordinator", "Chief Techical Officer", "Chief Execute Officer"],
    Nummers = ["0000000000", "0000000001", "0000000002", "0000000003", "0000000004", "0000000005", "0000000006", "0000000007", "0000000008", "0000000009" ],
    Contactpersons = ["Maarten Rood", "Jorrit van de Put", "Dennis Klop", "Gary Gan", "Ben Wu", "Jackey Zhuang",
    "Veron Yang", "Mirabelle Chen", "Peter Liu", "Allen Zhang"];

function createPartyRandomData(count) {
    var data = [];
    
    for (var i = 0; i < count; i++) {
        var name = Names[Math.floor(Math.random() * Names.length)],
            description = Descriptions[Math.floor(Math.random() * Descriptions.length)],
            nummer = Nummers[Math.floor(Math.random() * Nummers.length)],
            contactperson = Contactpersons[Math.floor(Math.random() * Contactpersons.length)];

        data.push({
            Id: i + 1,
            Name: name,
            Description: description,
            Nummer: nummer,
            Contactperson: contactperson
        });
    }
    return data;
}

var firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
    lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"],
    departments = ["Implement consultent", "Development", "IT Department", "Administration Department"],
    emails = ["test@nl.com", "overzicht@nl.com", "help@nl.com"],
    telephones = ["0183-650420", "0183-650422", "+31(0)6-30024616"];

function createContactPersonRandomData(count) {
    var data = [];
    for (var i = 0; i < count; i++) {
        var firstName = firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName = lastNames[Math.floor(Math.random() * lastNames.length)],
            department = departments[Math.floor(Math.random() * departments.length)],
            email = emails[Math.floor(Math.random() * emails.length)],
            telephone = telephones[Math.floor(Math.random() * telephones.length)];

        data.push({
            Id: i + 1,
            FirstName: firstName,
            LastName: lastName,
            Department: department,
            Email: email,
            Telephone: telephone
        });
    }
    return data;
}