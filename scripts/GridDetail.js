/**
 * @author gary.gan
 */
function partyDetailInit(e) {
	var detailRow = e.detailRow;
	var availableTags = [{
		text : "Zorgverzekeraar",
		value : "1"
	}, {
		text : "Zorgaanbieder",
		value : "2"
	}, {
		text : "Patient",
		value : "3"
	}, {
		text : "Tandarts",
		value : "4"
	}, {
		text : "Ziekenhuis",
		value : "5"
	}, {
		text : "Huisarts",
		value : "6"
	}, {
		text : "Toevoegen",
		value : "7"
	}];

	detailRow.find(".tabstrip").kendoTabStrip({
		animation : {
			open : {
				effects : "fadeIn"
			}
		}
	});

	$('#divContractDetails input:text, input:password').button().css({
		'font' : 'inherit',
		'color' : 'inherit',
		'text-align' : 'left',
		'outline' : 'none',
		'cursor' : 'text'
	});

	$(".inputField").qtip({
		content : {
			attr : "title"
		},
		style : {
			classes : 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded'
		},
		position : {
			my : 'left top'
			//corner : {
			//	arget : 'rightMiddle',
			//	tooltip : 'leftMiddle'
			//}
		},
		show : {
			when : {
				event : 'focus'
			}
		},
		hide : {
			when : {
				event : 'blur'
			}
		}
	});

	$(".imgNotification").qtip({
		content : "Click it set notification",
		style : {
			classes : 'ui-tooltip ui-tooltip-shadow ui-tooltip-rounded'
		},
		position : {
			my : 'left top'
			//corner : {
			//	arget : 'rightMiddle',
			//	tooltip : 'leftMiddle'
			//}
		},
		show : {
			when : {
				event : 'focus'
			}
		},
		hide : {
			when : {
				event : 'blur'
			}
		}
	});

	$(".imgNotification").click(function() {
		$("#divSetNotification").dialog('open');
	});

	$("#divSetNotification").dialog({
		title : 'Notification',
		autoOpen : false,
		height : 200,
		width : 600,
		modal : true,
		buttons : {
			"Save" : function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'Notification Center',
					// (string | mandatory) the text inside the notification
					text : 'New notification have been set.',
					// (string | optional) the image to display on the left
					image : 'images/White_circle/alarm.png',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : false,
					// (int | optional) the time you want it to be alive for before fading out
					time : '3000'
				});

				return false;
			},
			"Return" : function() {
				$("#divSetNotification").dialog('close');
			}
		}
	});

	$(".inputField").hide();

	$("#ddlContractType").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableTags
	});

	$("#btnEdit").button().click(function() {
		if ($("#detailEditStatus").val() == "0") {
			$("#btnEdit span").html('Save');
			$("#detailEditStatus").val("1");

			$("#btnCancelEdit").show();

			$(".contentField").hide();
			$(".inputField").show();
			return;
		}

		if ($("#detailEditStatus").val() == "1") {
			$("#btnEdit span").html('Aanpassen');
			$("#detailEditStatus").val("0");

			$("#btnCancelEdit").hide();

			$(".contentField").show();
			$(".inputField").hide();

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title : 'Notification Center',
				// (string | mandatory) the text inside the notification
				text : 'Contract Algemeen has been updated.',
				// (string | optional) the image to display on the left
				image : 'images/White_circle/document_blank.png',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky : false,
				// (int | optional) the time you want it to be alive for before fading out
				time : '3000'
			});

			return false;
		}

		if ($(e.item).children(".k-link").html() == $('#menu-images li:last span').html()) {

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title : 'Notification Center',
				// (string | mandatory) the text inside the notification
				text : 'Help.',
				// (string | optional) the image to display on the left
				image : 'images/White_circle/alarm.png',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky : false,
				// (int | optional) the time you want it to be alive for before fading out
				time : '3000'
			});

			$("#divHelpContent").dialog('open');

			return false;
		}
	});

	$("#btnCancelEdit").button().click(function() {
		$("#btnEdit span").html('Aanpassen');
		$("#btnCancelEdit").hide();
		$("#detailEditStatus").val("0");

		$(".contentField").show();
		$(".inputField").hide();
	});

	$('#divContractDetails table').each(function() {
		$(this).addClass("table table-striped table-hover");
	});

	var crudServiceBaseUrl = "http://demos.kendoui.com/service", dataSource = new kendo.data.DataSource({
		transport : {
			read : {
				url : crudServiceBaseUrl + "/Products",
				dataType : "jsonp"
			},
			update : {
				url : crudServiceBaseUrl + "/Products/Update",
				dataType : "jsonp"
			},
			destroy : {
				url : crudServiceBaseUrl + "/Products/Destroy",
				dataType : "jsonp"
			},
			create : {
				url : crudServiceBaseUrl + "/Products/Create",
				dataType : "jsonp"
			},
			parameterMap : function(options, operation) {
				if (operation !== "read" && options.models) {
					return {
						models : kendo.stringify(options.models)
					};
				}
			}
		},
		batch : true,
		pageSize : 10,
		schema : {
			model : {
				id : "ProductID",
				fields : {
					ProductID : {
						editable : false,
						nullable : true
					},
					ProductName : {
						validation : {
							required : true
						}
					}
				}
			}
		}
	});

	$("#divContractContact").kendoGrid({
        dataSource : {
			data : createContactPersonRandomData(5),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
            			LastName: {
							type : "string"
						},
            			Department: {
							type : "string"
						},
            			Email: {
							type : "string"
						},
            			Telephone: {
							type : "string"
						}
					}
				}
			},
			pageSize : 5
		},
        pageable: true,
        toolbar: ["create"],
        columns: [{
            field: "FirstName",
            title: "Achtemaan"
        }, {
            field: "LastName",
            title: "Voornaam"
        }, {
            field: "Department",
            title: "Functie"
        }, {
            field: "Email",
            title: "E-mailadres"
        }, {
            field: "Telephone",
            title: "Tel. nummer"
        },
         {
             command: ["edit", "destroy"],
             title: "&nbsp;"
         }],
        editable: "inline"
    });
    
    $("#divCreatPartyAddress").kendoGrid({
       dataSource: {
           data: createAdresRandomData(5),
           pageSize: 10,
           schema: {
               model: {
                   fields: {
                       Adres: {
                           type: "string"
                       },
                       Postbus: {
                           type: "string"
                       },
                       Postcode: {
                           type: "string"
                       },
                       Plaats: {
                           type: "string"
                       },
                       Land: {
                           type: "string"
                       }
                   }
               }
           }
       },
       scrollable: true,
       pageable: true,
       toolbar: ["create"],
       editable: "inline",
       columns: [{
           field: "Adres",
           title: "Adres"
       }, {
           field: "Postbus",
           title: "Post bus"
       }, {
           field: "Postcode",
           title: "Post Code"
       }, {
           field: "Plaats",
           title: "Plaats"
       }, {
           field: "Land",
           title: "Land"
       }, {
           command: ["edit", "destroy"],
           title: "&nbsp;"
       }]
   });

    $("#divPartyContract").kendoGrid({
    	dataSource : {
			data : createContractRandomData(1),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						BirthDate : {
							type : "date"
						},
						CreateDate : {
							type : "date"
						}
					}
				}
			},
			pageSize : 3
		},
        scrollable : true,
		pageable : true,
        columns: [{
            field: "FirstName",
            title: "ContractNaam"
        }, {
            field: "BirthDate",
            title: "Startdatum",
            template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
        }, {
            field: "CreateDate",
            title: "Einddatum",
            template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
        }]
    });
}

function personDetailInit(e) {
	var detailRow = e.detailRow;
	var availableTags = [{
		text : "Zorgverzekeraar",
		value : "1"
	}, {
		text : "Zorgaanbieder",
		value : "2"
	}, {
		text : "Patient",
		value : "3"
	}, {
		text : "Tandarts",
		value : "4"
	}, {
		text : "Ziekenhuis",
		value : "5"
	}, {
		text : "Huisarts",
		value : "6"
	}, {
		text : "Toevoegen",
		value : "7"
	}];

	detailRow.find(".tabstrip").kendoTabStrip({
		animation : {
			open : {
				effects : "fadeIn"
			}
		}
	});

	$('#divContractDetails input:text, input:password').button().css({
		'font' : 'inherit',
		'color' : 'inherit',
		'text-align' : 'left',
		'outline' : 'none',
		'cursor' : 'text'
	});

	$(".inputField").qtip({
		content : {
			attr : "title"
		},
		style : {
			classes : 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded'
		},
		position : {
			my : 'left top'
			//corner : {
			//	arget : 'rightMiddle',
			//	tooltip : 'leftMiddle'
			//}
		},
		show : {
			when : {
				event : 'focus'
			}
		},
		hide : {
			when : {
				event : 'blur'
			}
		}
	});

	$(".imgNotification").qtip({
		content : "Click it set notification",
		style : {
			classes : 'ui-tooltip ui-tooltip-shadow ui-tooltip-rounded'
		},
		position : {
			my : 'left top'
			//corner : {
			//	arget : 'rightMiddle',
			//	tooltip : 'leftMiddle'
			//}
		},
		show : {
			when : {
				event : 'focus'
			}
		},
		hide : {
			when : {
				event : 'blur'
			}
		}
	});

	$(".imgNotification").click(function() {
		$("#divSetNotification").dialog('open');
	});

	$("#divSetNotification").dialog({
		title : 'Notification',
		autoOpen : false,
		height : 200,
		width : 600,
		modal : true,
		buttons : {
			"Save" : function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'Notification Center',
					// (string | mandatory) the text inside the notification
					text : 'New notification have been set.',
					// (string | optional) the image to display on the left
					image : 'images/White_circle/alarm.png',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : false,
					// (int | optional) the time you want it to be alive for before fading out
					time : '3000'
				});

				return false;
			},
			"Return" : function() {
				$("#divSetNotification").dialog('close');
			}
		}
	});

	$(".inputField").hide();

	$("#ddlContractType").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableTags
	});

	$("#btnEdit").button().click(function() {
		if ($("#detailEditStatus").val() == "0") {
			$("#btnEdit span").html('Save');
			$("#detailEditStatus").val("1");

			$("#btnCancelEdit").show();

			$(".contentField").hide();
			$(".inputField").show();
			return;
		}

		if ($("#detailEditStatus").val() == "1") {
			$("#btnEdit span").html('Aanpassen');
			$("#detailEditStatus").val("0");

			$("#btnCancelEdit").hide();

			$(".contentField").show();
			$(".inputField").hide();

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title : 'Notification Center',
				// (string | mandatory) the text inside the notification
				text : 'Contract Algemeen has been updated.',
				// (string | optional) the image to display on the left
				image : 'images/White_circle/document_blank.png',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky : false,
				// (int | optional) the time you want it to be alive for before fading out
				time : '3000'
			});

			return false;
		}

		if ($(e.item).children(".k-link").html() == $('#menu-images li:last span').html()) {

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title : 'Notification Center',
				// (string | mandatory) the text inside the notification
				text : 'Help.',
				// (string | optional) the image to display on the left
				image : 'images/White_circle/alarm.png',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky : false,
				// (int | optional) the time you want it to be alive for before fading out
				time : '3000'
			});

			$("#divHelpContent").dialog('open');

			return false;
		}
	});

	$("#btnCancelEdit").button().click(function() {
		$("#btnEdit span").html('Aanpassen');
		$("#btnCancelEdit").hide();
		$("#detailEditStatus").val("0");

		$(".contentField").show();
		$(".inputField").hide();
	});

	$('#divContractDetails table').each(function() {
		$(this).addClass("table table-striped table-hover");
	});

	var crudServiceBaseUrl = "http://demos.kendoui.com/service", dataSource = new kendo.data.DataSource({
		transport : {
			read : {
				url : crudServiceBaseUrl + "/Products",
				dataType : "jsonp"
			},
			update : {
				url : crudServiceBaseUrl + "/Products/Update",
				dataType : "jsonp"
			},
			destroy : {
				url : crudServiceBaseUrl + "/Products/Destroy",
				dataType : "jsonp"
			},
			create : {
				url : crudServiceBaseUrl + "/Products/Create",
				dataType : "jsonp"
			},
			parameterMap : function(options, operation) {
				if (operation !== "read" && options.models) {
					return {
						models : kendo.stringify(options.models)
					};
				}
			}
		},
		batch : true,
		pageSize : 10,
		schema : {
			model : {
				id : "ProductID",
				fields : {
					ProductID : {
						editable : false,
						nullable : true
					},
					ProductName : {
						validation : {
							required : true
						}
					}
				}
			}
		}
	});

	$("#divContractContact").kendoGrid({
		dataSource : {
			data : createContactPersonRandomData(5),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						LastName : {
							type : "string"
						},
						Functie : {
							type : "string"
						},
						Email : {
							type : "string"
						},
						Telephone : {
							type : "string"
						}
					}
				}
			},
			pageSize : 5
		},
		pageable : true,
		toolbar : ["create"],
		columns : [{
			field : "FirstName",
			title : "Achtemaan"
		}, {
			field : "LastName",
			title : "Voornaam"
		}, {
			field : "Functie",
			title : "Functie"
		}, {
			field : "Email",
			title : "E-mailadres"
		}, {
			field : "Telephone",
			title : "Tel. nummer"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}]
	});

	$("#divCreatePersonAddress").kendoGrid({
		dataSource : {
			data : createAdresRandomData(5),
			pageSize : 10,
			schema : {
				model : {
					fields : {
						Adres : {
							type : "string"
						},
						Postbus : {
							type : "string"
						},
						Postcode : {
							type : "string"
						},
						Plaats : {
							type : "string"
						},
						Land : {
							type : "string"
						}
					}
				}
			}
		},
		scrollable : true,
		pageable : true,
		toolbar : ["create"],
		editable : "inline",
		columns : [{
			field : "Adres",
			title : "Adres"
		}, {
			field : "Postbus",
			title : "Post bus"
		}, {
			field : "Postcode",
			title : "Post Code"
		}, {
			field : "Plaats",
			title : "Plaats"
		}, {
			field : "Land",
			title : "Land"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}]
	});

	$("#divPersonContract").kendoGrid({
		dataSource : {
			data : createContractRandomData(1),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						BirthDate : {
							type : "date"
						},
						CreateDate : {
							type : "date"
						}
					}
				}
			},
			pageSize : 3
		},
		scrollable : true,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "ContractNaam"
		}, {
			field : "BirthDate",
			title : "Startdatum",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}, {
			field : "CreateDate",
			title : "Einddatum",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}]
	});
}