$(document).ready(function () {
	$('#btnSignOff').button();
	
    $("#divDemoNotificationList").kendoGrid({
        dataSource: {
            data: createNotificationRandomData(3),
            schema: {
                model: {
                    fields: {
                        Data: {
                            type: "date"
                        },
                        ContractNumber: {
                            type: "string"
                        },
                        ContractName: {
                            type: "string"
                        },
                        AndereParty: {
                            type: "string"
                        },
                        SoortNotification: {
                            type: "string"
                        },
                        Herhaling: {
                            type: "string"
                        }
                    }
                }
            },
            pageSize: 16
        },
        height: 600,
//        detailTemplate: kendo.template($("#template").html()),
//        detailInit: detailInit,
        scrollable: true,
        pageable: true,
        columns: [{ 
            template:"<input type='checkbox'>"
        }, {
            field: "Data",
            title: "Datum"
        }, {
            field: "ContractNumber",
            title: "Contract nr"
        }, {
            field: "ContractName",
            title: "Contract naam"
        }, {
            field: "AndereParty",
            title: "Andere partij"
        }, {
            field: "SoortNotification",
            title: "Soort notificatie"
        }, {
            field: "Herhaling",
            title: "Herhaling"
        }]
    });
});
