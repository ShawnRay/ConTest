/**
 * @author gary.gan
 */
var contractSoort = ["Zorgverzekeraar", "Zorgaanbieder", "Patient", "Tandarts", "Ziekenhuis", "Huisarts", "Toevoegen"],
    contractName = ["TBA -- UPS", "TBA -- Google", "TBA -- KendoUI", "TBA -- Apple", "TBA -- ABN AMRO"],
    party = ["UPS", "Google", "KendoUI", "Apple", "ABN AMRO"],
    startDate = [new Date("2010/12/08"), new Date("2010/02/19"), new Date("2010/08/30"), new Date("2010/09/19")],
    endDate = [new Date("2013/12/08"), new Date("2014/02/19"), new Date("2015/08/30"), new Date("2016/01/01")],
 	contactPerson = ["Maarten Rood","Jorrit van de Put","Dennis Klop","Gijs Vennix","Maarten Duijndam"];
 
function createContractRandomData(count) {
    var data = [],
        now = new Date();
    for (var i = 0; i < count; i++) {
        var contractSoorts = contractSoort[Math.floor(Math.random() * contractSoort.length)],
            contractNames = contractName[Math.floor(Math.random() * contractName.length)],
            parties = party[Math.floor(Math.random() * party.length)],
            startDates = startDate[Math.floor(Math.random() * startDate.length)],
            endDates = endDate[Math.floor(Math.random() * endDate.length)],
            contactPersons = contactPerson[Math.floor(Math.random() * contactPerson.length)];

        data.push({
            Id: i + 1,
            ContractType: contractSoorts,
            ContractName: contractNames,
            Party: parties,
            StartDate: startDates,
            EndDate: endDates,
            ContactPerson: contactPersons
        });
    }
    return data;
}

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
