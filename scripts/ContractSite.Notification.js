$(document).ready(function() {
	$('#btnSignOff').button();

	$('#btnSignOff').click(function() {
		$.each($('input:checkbox'), function() {
			if ($(this).attr('checked')) {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'Notification Center',
					// (string | mandatory) the text inside the notification
					text : 'The nofication(s) be signed-off.',
					// (string | optional) the image to display on the left
					image : 'images/White_circle/alarm.png',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : false,
					// (int | optional) the time you want it to be alive for before fading out
					time : '3000'
				});

				return ture;
			}
		});
		
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title : 'Notification Center',
			// (string | mandatory) the text inside the notification
			text : 'Please checked one of the checkboxes.',
			// (string | optional) the image to display on the left
			image : 'images/White_circle/alarm.png',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky : false,
			// (int | optional) the time you want it to be alive for before fading out
			time : '3000'
		});
	});

	$("#divDemoNotificationList").kendoGrid({
		dataSource : {
			data : createNotificationRandomData(3),
			schema : {
				model : {
					fields : {
						Data : {
							type : "date"
						},
						ContractNumber : {
							type : "string"
						},
						ContractName : {
							type : "string"
						},
						AndereParty : {
							type : "string"
						},
						SoortNotification : {
							type : "string"
						},
						Herhaling : {
							type : "string"
						}
					}
				}
			},
			pageSize : 16
		},
		height : 600,
		//        detailTemplate: kendo.template($("#template").html()),
		//        detailInit: detailInit,
		scrollable : true,
		pageable : true,
		columns : [{
			template : "<input type='checkbox'>"
		}, {
			field : "Data",
			title : "Datum",
			template : '#= kendo.toString(Data,"MM/dd/yyyy") #'
		}, {
			field : "ContractNumber",
			title : "Contract nr"
		}, {
			field : "ContractName",
			title : "Contract naam"
		}, {
			field : "AndereParty",
			title : "Andere partij"
		}, {
			field : "SoortNotification",
			title : "Soort notificatie"
		}, {
			field : "Herhaling",
			title : "Herhaling"
		}]
	});
});
