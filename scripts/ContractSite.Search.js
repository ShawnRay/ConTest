$(document).ready(function() {

	var availableContractStatus = [{
		text : "Alles",
		value : "1"
	}, {
		text : "Expired",
		value : "2"
	}, {
		text : "Not Expired",
		value : "3"
	}];

	$("#ddlContrtStatus").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractStatus
	});

	var availableContractType = [{
		text : "unknow",
		value : "1"
	}, {
		text : "Expired",
		value : "2"
	}, {
		text : "Not Expired",
		value : "3"
	}];

	$("#ddlContractType").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractType
	});

	var availableContractEngineer = [{
		text : "unknow",
		value : "1"
	}, {
		text : "Expired",
		value : "2"
	}, {
		text : "Not Expired",
		value : "3"
	}];

	$("#ddlContractEngineer").width(220).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractEngineer
	});

	$("#datepickerVan").kendoDatePicker();
	$("#datepickerTot").kendoDatePicker();

	$("#btnSearch").button();

	$("#btnSearch").click(function() {
		$("#divSearch").toggle();
		$("#divResult").toggle();
	});

	$("#divSearchResult").kendoGrid({
		dataSource : {
			data : createSearchContractData(50),
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
			pageSize : 16
		},
		scrollable : true,
		pageable : true,
		columns : [{
			field : "FirstName",
			title : "Contract soort"
		}, {
			field : "LastName",
			title : "Contract naam"
		}, {
			field : "City",
			title : "Partij"
		}, {
			field : "BirthDate",
			title : "Start datum",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}, {
			field : "BirthDate",
			title : "Eind datum",
			template : '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
		}, {
			field : "Title",
			title : "Contactpersoon"
		}]
	});

	if (getParameterByName('openGetResult') == "1") {
		$('#btnSearch').trigger('click');
	}
});
