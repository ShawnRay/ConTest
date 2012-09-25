var Description = ["Contract Unive 31-08-2012", "Partij Unive", "Persoon Dennis Klop"],
    Onderdeel = ["Einddatum", "Naam", "Adres"],
    OudeWaarde = ["01-01-2012", "VGZ", "Molenstaat 32"],
    NieuweWaarde = ["31-12-2012", "Unive", "Neude 8"],
    Datum = ["18-09-2012/13:31 uur"];

function createTrackAndTraceRandomData(count) {
    var data = [];

    for (var i = 0; i < count; i++) {
        var description = Description[Math.floor(Math.random() * Description.length)],
            onderdeel = Onderdeel[Math.floor(Math.random() * Onderdeel.length)],
            oudeWaarde = OudeWaarde[Math.floor(Math.random() * OudeWaarde.length)],
            nieuweWaarde = NieuweWaarde[Math.floor(Math.random() * NieuweWaarde.length)],
            datum = Datum[Math.floor(Math.random() * Datum.length)];

        data.push({
            Id: i + 1,
            Description: description,
            Onderdeel: onderdeel,
            OudeWaarde: oudeWaarde,
            NieuweWaarde: nieuweWaarde,
            Datum: datum
        });
    }
    return data;
}