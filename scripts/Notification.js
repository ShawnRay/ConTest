var Data = ["01-01-2012"],
    ContractNumber = ["0001", "0002", "0003"],
    ContractName = ["Jackey", "Gary"],
    AndereParty = ["Unive", "Achmea", "Agis"],
    SoortNotification = ["Einddatum","Opzegtermijn"],
    Herhaling = ["Wekelijks"];

function createNotificationRandomData(count) {
    var data = [];

    for (var i = 0; i < count; i++) {
        var datum = Data[Math.floor(Math.random() * Data.length)],
            contractNumber = ContractNumber[Math.floor(Math.random() * ContractNumber.length)],
            contractName = ContractName[Math.floor(Math.random() * ContractName.length)],
            andereParty = AndereParty[Math.floor(Math.random() * AndereParty.length)],
            soortNotification = SoortNotification[Math.floor(Math.random() * SoortNotification.length)],
            herhaling = Herhaling[Math.floor(Math.random() * Herhaling.length)];
    
        data.push({
            Id: i + 1,
            Data: datum,
            ContractNumber: contractNumber,
            ContractName: contractName,
            AndereParty: andereParty,
            SoortNotification: soortNotification,
            Herhaling: herhaling
        });
    }
    return data;
}