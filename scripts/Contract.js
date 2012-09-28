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
