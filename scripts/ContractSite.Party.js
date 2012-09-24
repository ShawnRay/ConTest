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
		dataSource : dataSource,
		pageable : true,
		toolbar : ["create"],
		columns : [{
			field : "ProductName",
			title : "Achtemaan"
		}, {
			field : "ProductName",
			title : "Voornaam"
		}, {
			field : "ProductName",
			title : "Functie"
		}, {
			command : ["edit", "destroy"],
			title : "&nbsp;"
		}],
		editable : "inline"
	});
}

$(document).ready(function () {
	$("#btnPrint").printPreview();
	
    $("#menu-images").kendoMenu({
        dataSource: [{
            text: "Home",
            imageUrl: "images/Black_circle/home.png"
        }, {
            text: "Contracten",
            imageUrl: "images/Black_circle/document.png",
            items: [{
                text: "Nieuw"
            }, {
                text: "Bewerk/Bekijk"
            }]
        }, {
            text: "Notificaties",
            imageUrl: "images/Black_circle/alarm.png"
        }, {
            text: "Partij",
            imageUrl: "images/Black_circle/profile_group.png",
            items: [{
                text: "Nieuw"
            }, {
                text: "Bewerk/Bekijk"
            }]
        }, {
            text: "Persoon",
            imageUrl: "images/Black_circle/profile_add.png",
            items: [{
                text: "Nieuw"
            }, {
                text: "Bewerk/Bekijk"
            }]
        }, {
            text: "Zoek",
            imageUrl: "images/Black_circle/rect_search.png"
        }, {
            text: "Track and Trace",
            imageUrl: "images/Black_circle/satellite.png"
        }, {
            text: "Rapportage",
            imageUrl: "images/Black_circle/chart.png"
        }, {
            text: '',
            imageUrl: "images/Black_circle/question.png"
        }],
        select: onSelect,
        open: onOpen,
        close: onClose
    });

    $('#menu-images li:last').attr('style', 'float: right; padding-left: 8px;');

    $("#divStep2").hide();
    $("#divStep3").hide();
    $("#divStep4").hide();
    $("#stepRecord").val("0");

    $("#labelStepTitle").html(" 1: Partij of Persoon");

    $("#div1").kendoGrid({
        dataSource: {
            data: createContactPersonRandomData(1),
            pageSize: 10,
            schema: {
                model: {
                    fields: {
                       LastName: {
                           type: "string"
                       },
                       FirstName: {
                           type: "string"
                       },
                       Functie: {
                           type: "string"
                       },
                       Email: {
                           type: "string"
                       },
                       Telephone: {
                           type: "string"
                       }
                    }
                }
           }
       },
       height: 300,
       scrollable: true,
       pageable: true,
       toolbar: ["create"],
       editable: "inline",
       columns: [{
           field: "LastName",
           title: "Achternaam"
       }, {
           Field: "FirstName",
           title: "Voornaam"
       }, {
           Field: "Functie",
           title: "Functie"
       }, {
           Field: "Email",
           title: "E-mailadres"
       }, {
           Field: "Telephone",
           title: "Tel. nummer"
       }, {
           command: ["edit", "destroy"],
           title: "&nbsp;"
       }]
   });

   $("#divAddress").kendoGrid({
       dataSource: {
           data: createAdresRandomData(1),
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
       height: 300,
       scrollable: true,
       pageable: true,
       toolbar: ["create"],
       editable: "inline",
       columns: [{
           field: "Adres",
           title: "Adres"
       }, {
           Field: "Postbus",
           title: "Postbus"
       }, {
           Field: "Postcode",
           title: "Postcode"
       }, {
           Field: "Plaats",
           title: "Plaats"
       }, {
           Field: "Land",
           title: "Land"
       }, {
           command: ["edit", "destroy"],
           title: "&nbsp;"
       }]
   });

    $("#divDemoPartyContracsList").kendoGrid({
        dataSource: {
            data: createPartyRandomData(50),
            schema: {
                model: {
                    fields: {
                        Name: {
                            type: "string"
                        },
                        Description: {
                            type: "string"
                        },
                        Nummer: {
                            type: "string"
                        },
                        Contactperson: {
                            type: "string"
                        }
                    }
                }
            },
            pageSize: 16
        },
        height: 600,
        detailTemplate: kendo.template($("#template").html()),
        detailInit: detailInit,
        dataBound: function () {
            //this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        editable: "inline",
        scrollable: true,
        pageable: true,
        columns: [{
            field: "Name",
            title: "Name"
        }, {
            field: "Description",
            title: "Description"
        }, {
            field: "Nummer",
            title: "Nummer"
        }, {
            field: "Contactperson",
            title: "Contactperson"
        }, {
            command: ["edit", "destroy"],
            title: "&nbsp;"
        }]
    });

    $(".imgDeleteConfirm").click(function () {
        $("#divDeleteConfirmation").dialog('open');
    });

    $(".imgArchiveConfirm").click(function () {
        $("#divArchiveConfirmation").dialog('open');
    });

    $("#divDeleteConfirmation").dialog({
        title: 'Contract',
        autoOpen: false,
        height: 120,
        width: 460,
        modal: true
    });

    $("#divArchiveConfirmation").dialog({
        title: 'Contract',
        autoOpen: false,
        height: 120,
        width: 460,
        modal: true
    });

    $("#dialog-form").dialog({
        title: 'Niew Partij',
        autoOpen: false,
        height: 500,
        width: 800,
        modal: true,
        buttons: {
            "Terug": function () {
                if ($("#stepRecord").val() == "1") {
                    $("#divStep1").show();
                    $("#divStep2").hide();
                    $("#divStep3").hide();
                    $("#divStep4").hide();

                    $("#stepRecord").val("0");
                    $("#labelStepTitle").html(" 1: Algemene informatie");
                    return;
                }

                if ($("#stepRecord").val() == "2") {
                    $("#divStep1").hide();
                    $("#divStep2").show();
                    $("#divStep3").hide();
                    $("#divStep4").hide();

                    $("#stepRecord").val("1");
                    $("#labelStepTitle").html(" 2: Contactpersonen");

                    $(".ui-dialog-buttonset span:eq(1)").html('Volgende');
                    return;
                }

                if ($("#stepRecord").val() == "3") {
                    $("#divStep1").hide();
                    $("#divStep2").hide();
                    $("#divStep3").show();
                    $("#divStep4").hide();

                    $("#stepRecord").val("2");
                    $("#labelStepTitle").html(" 3: Adres");

                    return;
                }
            },
            "Volgende": function () {
                if ($("#stepRecord").val() == "0") {
                    $("#divStep1").hide();
                    $("#divStep2").show();
                    $("#divStep3").hide();
                    $("#divStep4").hide();

                    $("#stepRecord").val("1");
                    $("#labelStepTitle").html(" 2: Contactpersonen");
                    return;
                }

                if ($("#stepRecord").val() == "1") {
                    $("#divStep1").hide();
                    $("#divStep2").hide();
                    $("#divStep3").show();
                    $("#divStep4").hide();

                    $("#stepRecord").val("2");
                    $("#labelStepTitle").html(" 3: Adres");
                    $(".ui-dialog-buttonset span:eq(1)").html('Finish');
                    return;
                }

                if ($("#stepRecord").val() == "2") {
                    $.gritter.add({
                        // (string | mandatory) the heading of the notification
                        title: 'Notification Center',
                        // (string | mandatory) the text inside the notification
                        text: 'U heeft alle stappen van de aanmaak van een partij doorlopen. U zult automatisch naar het overzicht van uw bestaande partij worden geleid.',
                        // (string | optional) the image to display on the left
                        image: 'images/White_circle/document_blank.png',
                        // (bool | optional) if you want it to fade out on its own or just sit there
                        sticky: false,
                        // (int | optional) the time you want it to be alive for before fading out
                        time: '3000'
                    });

                    $(this).dialog('close');

                    return false;
                }
            }
        }
    });

    $("#btnCreate").button().click(function () {
        $("#dialog-form").dialog("open");
    });

    $("#btnPrint").button();

    $("#txtContractName").qtip({
        content: {
            attr: "title"
        },
        position: {
            corner: {
                target: 'rightMiddle',
                tooltip: 'leftBottom'
            }
        },
        show: {
            when: {
                event: 'focus'
            }
        },
        hide: {
            when: {
                event: 'blur'
            }
        }
    });

    $("#divHelpContent").dialog({
        title: 'HET Portaal -- Contract',
        autoOpen: false,
        height: 380,
        width: 600,
        modal: true
    });
});
