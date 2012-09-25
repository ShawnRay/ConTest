$(document).ready(function () {
    $("#divDemoTrackAndTraceList").kendoGrid({
        dataSource: {
            data: createTrackAndTraceRandomData(3),
            schema: {
                model: {
                    fields: {
                        Description: {
                            type: "string"
                        },
                        Onderdeel: {
                            type: "string"
                        },
                        OudeWaarde: {
                            type: "string"
                        },
                        NieuweWaarde: {
                            type: "string"
                        },
                        Datum: {
                            type: "string"
                        }
                    }
                }
            },
            pageSize: 16
        },
        height: 600,
        scrollable: true,
        pageable: true,
        columns: [{
            field: "Description",
            title: "Omschrijving"
        }, {
            field: "Onderdeel",
            title: "Onderdeel"
        }, {
            field: "OudeWaarde",
            title: "Oude Waarde"
        }, {
            field: "NieuweWaarde",
            title: "Nieuwe Waarde"
        }, {
            field: "Datum",
            title: "Datum"
        }]
    });
});
