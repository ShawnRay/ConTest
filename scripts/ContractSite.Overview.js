function detailInit(e) {
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
					},
					UnitPrice : {
					},
					UnitsInStock : {
					}
				}
			}
		}
	});

	$("#divContractContact").kendoGrid({
		dataSource : dataSource,
		pageable : true,
		toolbar : ["create"],
		columns : [{
			field : "ProductName",
			title : "Achtemaan"
		}, {
			field : "UnitPrice",
			title : "Voornaam"
		}, {
			field : "UnitsInStock",
			title : "Functie"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}],
		editable : "inline"
	});
	
	$("#divDocumentList").kendoGrid({
		dataSource : {
			data : createRandomData(3),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						LastName : {
							type : "string"
						}
					}
				}
			},
			pageSize : 6
		},
		height : 300,
		scrollable : false,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "Document titel"
		}, {
			field : "LastName",
			title : "Omschrijving"
		}, {
			command : ["destroy"],
			title : "&nbsp;"
		}],
		toolbar : kendo.template("<input type='file' /><input type='button' value='Save' />"),
		editable : "inline"
	});
}

function partyChanged(e) {
	if ($(e.sender.items()).html() == '[Anders]') {
		$('#divPartyInputs input').each(function() {
			$(this).removeAttr('disabled')
		});
	}
};

function personChanged(e) {
	if ($(e.sender.items()).html() == '[Anders]') {
		$('#divPersonInputs input').each(function() {
			$(this).removeAttr('disabled')
		});
	}
};

$(document).ready(function() {
	$(".imgPopUpAlert").click(function() {
		$("#divSetNotification").dialog('open');
	});

	$("#notifyDate").kendoDatePicker();
	
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
				
				$("#divSetNotification").dialog('close');
				
				return false;
			},
			"Return" : function() {
				$("#divSetNotification").dialog('close');
			}
		}
	});
	
	$("#divStep2").hide();
	$("#divStep3").hide();
	$("#divStep4").hide();
	$("#divStep5").hide();
	$("#stepRecord").val("0");

	$("#labelStepTitle").html(" 1: Partij of Persoon");

	$("#divDemoContracsList").kendoGrid({
		dataSource : {
			data : createContractRandomData(50),
			schema : {
				model : {
					fields : {
						ContractType : {
							type : "string"
						},
						ContractName : {
							type : "string"
						},
						Party : {
							type : "string"
						},
						StartDate : {
							type : "date"
						},
						EndDate : {
							type : "date"
						},
						ContactPerson : {
							type : "string"
						}
					}
				}
			},
			pageSize : 16
		},
		height : 600,
		detailTemplate : kendo.template($("#template").html()),
		detailInit : detailInit,
		dataBound : function() {
			//this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		scrollable : true,
		pageable : true,
		columns : [{
			field : "ContractType",
			title : "Contract soort"
		}, {
			field : "ContractName",
			title : "Contract naam"
		}, {
			field : "Party",
			title : "Partij"
		}, {
			field : "StartDate",
			title : "Start datum",
			template : '#= kendo.toString(StartDate,"MM/dd/yyyy") #'
		}, {
			field : "EndDate",
			title : "Eind datum",
			template : '#= kendo.toString(EndDate,"MM/dd/yyyy") #'
		}, {
			field : "ContactPerson",
			title : "Contactpersoon"
		}, {
			title : " ",
			width : 50,
			template : "<img class='imgDeleteConfirm' src='images/delete.png' rel='delete' />"
		}]
	});

	$(".imgDeleteConfirm").click(function() {
		$("#divDeleteConfirmation").dialog('open');
	});

	//$(".imgArchiveConfirm").click(function() {
	//	$("#divArchiveConfirmation").dialog('open');
	//});
	
	$("#divArchiveConfirmation").dialog({
		title : 'Contract',
		autoOpen : false,
		height : 120,
		width : 460,
		modal : true
	});

	$("#dialog-form").dialog({
		title : 'Niew Contract',
		autoOpen : false,
		height : 600,
		width : 1000,
		modal : true,
		buttons : [{
			text : "Terug",
			click : function() {
				if ($("#stepRecord").val() == "1") {
					$("#divStep1").show();
					$("#divStep2").hide();
					$("#divStep3").hide();
					$("#divStep4").hide();
					$("#divStep5").hide();

					$("#stepRecord").val("0");
					$("#labelStepTitle").html(" 1: Partij of Persoon");
					return;
				}

				if ($("#stepRecord").val() == "2") {
					$("#divStep1").hide();
					$("#divStep2").show();
					$("#divStep3").hide();
					$("#divStep4").hide();
					$("#divStep5").hide();

					$("#stepRecord").val("1");
					$("#labelStepTitle").html(" 2: Contact personen");
					return;
				}

				if ($("#stepRecord").val() == "3") {
					$("#divStep1").hide();
					$("#divStep2").hide();
					$("#divStep3").show();
					$("#divStep4").hide();
					$("#divStep5").hide();

					$("#stepRecord").val("2");
					$("#labelStepTitle").html(" 3: Algemene contract gegevens");
					return;
				}

				if ($("#stepRecord").val() == "4") {
					$("#divStep1").hide();
					$("#divStep2").hide();
					$("#divStep3").hide();
					$("#divStep4").show();
					$("#divStep5").hide();

					$("#stepRecord").val("3");
					$("#labelStepTitle").html(" 4: Date en tijd");

					$("#btnNext span").html('Volgende');
					return;
				}
			}
		}, {
			id : "btnNext",
			text : "Volgende",
			click : function() {
				if ($("#stepRecord").val() == "0") {
					$("#divStep1").hide();
					$("#divStep2").show();
					$("#divStep3").hide();
					$("#divStep4").hide();
					$("#divStep5").hide();

					$("#stepRecord").val("1");
					$("#labelStepTitle").html(" 2: Contact personen");
					return;
				}

				if ($("#stepRecord").val() == "1") {
					$("#divStep1").hide();
					$("#divStep2").hide();
					$("#divStep3").show();
					$("#divStep4").hide();
					$("#divStep5").hide();

					$("#stepRecord").val("2");
					$("#labelStepTitle").html(" 3: Algemene contract gegevens");
					return;
				}

				if ($("#stepRecord").val() == "2") {
					$("#divStep1").hide();
					$("#divStep2").hide();
					$("#divStep3").hide();
					$("#divStep4").show();
					$("#divStep5").hide();

					$("#stepRecord").val("3");
					$("#labelStepTitle").html(" 4: Date en tijd");
					return;
				}

				if ($("#stepRecord").val() == "3") {
					$("#divStep1").hide();
					$("#divStep2").hide();
					$("#divStep3").hide();
					$("#divStep4").hide();
					$("#divStep5").show();

					$("#stepRecord").val("4");
					$("#labelStepTitle").html(" 5: Financiele gegevens");

					$("#btnNext span").html('Finish');
					return;
				}

				if ($("#stepRecord").val() == "4") {
					$.gritter.add({
						// (string | mandatory) the heading of the notification
						title : 'Notification Center',
						// (string | mandatory) the text inside the notification
						text : 'U heeft alle stappen van de aanmaak van een contract doorlopen. U zult automatisch naar het overzicht van uw bestaande contracten worden geleid.',
						// (string | optional) the image to display on the left
						image : 'images/White_circle/document_blank.png',
						// (bool | optional) if you want it to fade out on its own or just sit there
						sticky : false,
						// (int | optional) the time you want it to be alive for before fading out
						time : '3000'
					});
					
					$(this).dialog('close');

					return false;
				}
			}
		}]
	});

	$("#txtContractName").qtip({
		content : {
			attr : "title"
		},
		position : {
			corner : {
				target : 'rightMiddle',
				tooltip : 'leftBottom'
			}
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

	$("#divHelpContent").dialog({
		title : 'HET Portaal -- Contract',
		autoOpen : false,
		height : 380,
		width : 600,
		modal : true
	});

	$("#divDemoContactPersonList").kendoGrid({
		dataSource : {
			data : createRandomData(1),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						LastName : {
							type : "string"
						},
						City : {
							type : "string"
						},
						Title : {
							type : "string"
						},
						BirthDate : {
							type : "date"
						},
						Age : {
							type : "number"
						}
					}
				}
			},
			pageSize : 10
		},
		height : 300,
		scrollable : false,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "Archternaam"
		}, {
			field : "LastName",
			title : "Voornaam"
		}, {
			field : "City",
			title : "Functie"
		}, {
			field : "BirthDate",
			title : "E-mail",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}, {
			field : "Title",
			title : "Telnummer"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}],
		toolbar : ["create"],
		editable : "inline"
	});

	$("#divDemoFinancialList").kendoGrid({
		dataSource : {
			data : createRandomData(1),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						LastName : {
							type : "string"
						},
						City : {
							type : "string"
						},
						Title : {
							type : "string"
						},
						BirthDate : {
							type : "date"
						},
						Age : {
							type : "number"
						},
						TestNumber : {
							type : "number"
						}
					}
				}
			},
			pageSize : 10
		},
		height : 300,
		scrollable : false,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "Code"
		}, {
			field : "LastName",
			title : "Budget regel"
		}, {
			field : "City",
			title : "Product code"
		}, {
			field : "BirthDate",
			title : "Omschrijving",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}, {
			field : "Title",
			title : "Afspraak aantallen"
		}, {
			field : "Age",
			title : "Afspraak eenheid"
		}, {
			field : "TestNumber",
			title : "Afspraak prijs"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}],
		toolbar : ["create"],
		editable : "inline"
	});
	
	$("#divDocumentCreateList").kendoGrid({
		dataSource : {
			data : createRandomData(3),
			schema : {
				model : {
					fields : {
						FirstName : {
							type : "string"
						},
						LastName : {
							type : "string"
						}
					}
				}
			},
			pageSize : 6
		},
		height : 200,
		scrollable : false,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "Document titel"
		}, {
			field : "LastName",
			title : "Omschrijving"
		}, {
			command : ["destroy"],
			title : "&nbsp;"
		}],
		toolbar : kendo.template("<input type='file' /><input type='button' value='Save' />"),
		editable : "inline"
	});

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

	$("#ddlContractType").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableTags
	});
	
	var tabstrip = $(".tabstripNewContract").kendoTabStrip({
		animation : {
			open : {
				effects : "fadeIn"
			}
		}
	}).data("kendoTabStrip");

	var partyTab = tabstrip.tabGroup.children("li").eq(0);
	var personTab = tabstrip.tabGroup.children("li").eq(1);

	$("input:radio[name='rdContact']").change(function() {
		if ($(this).val() == 'person') {
			$('#divContractDetails').show();

			tabstrip.select(personTab);
			tabstrip.enable(personTab, true);
			tabstrip.enable(partyTab, false);
		}

		if ($(this).val() == 'party') {
			$('#divContractDetails').show();

			var selectedItem = tabstrip.tabGroup.children("li").eq(0);
			tabstrip.select(partyTab);
			tabstrip.enable(partyTab, true);
			tabstrip.enable(personTab, false);
		}
	});

	$('.partyInput, .personInput').button().css({
		'font' : 'inherit',
		'color' : 'inherit',
		'text-align' : 'left',
		'outline' : 'none',
		'cursor' : 'text'
	});

	$(".partyInput, .personInput").each(function() {
		$(this).attr('disabled', 'disabled');
	});

	var availablePerson = [{
		text : "[Anders]",
		value : "1"
	}];

	var availableParty = [{
		text : "[Anders]",
		value : "1"
	}];

	var partyList = $("#ddlParty").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableParty,
		change : partyChanged
	});

	var personList = $("#ddlPerson").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availablePerson,
		change : personChanged
	});
});
