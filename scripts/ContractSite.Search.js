$(document).ready(function() {
	$("#btnSearch").button();
	
	$("#btnSearch").click(function() {
		$("#divSearch").toggle();
		$("#divResult").toggle();
	});
	
	var data = [{
		text : "Alles",
		value : "1"
	}, {
		text : "Not Expired",
		value : "2"
	}, {
		text : "Expired",
		value : "3"
	}];

	// create DropDownList from input HTML element
	$("#contrtStatus").kendoDropDownList({
		dataTextField : "text",
		dataValueField : "value",
		dataSource : data,
		index : 0
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
});
