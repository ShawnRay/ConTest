$(document).ready(function() {
	$("#divHelpContent").dialog({
		title : 'HET Portaal -- Contract',
		autoOpen : false,
		height : 380,
		width : 600,
		modal : true
	});

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

	$("#ddlContrtStatus").width(180).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractStatus
	});

	var availableContractType = [{
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

	$("#ddlContractType").width(180).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractType
	});

	var availableContractEngineer = [{
		text : "Gijs.V",
		value : "1"
	}, {
		text : "Maarten.D",
		value : "2"
	}, {
		text : "Maarten.R",
		value : "3"
	}];

	$("#ddlContractEngineer").width(180).kendoComboBox({
		dataTextField : "text",
		dataValueField : "value",
		filter : "contains",
		dataSource : availableContractEngineer
	});

	$("#datepickerVan").kendoDatePicker();
	$("#datepickerTot").kendoDatePicker();

	$(".tableTileItems tr td a").each(function() {
		if ($(this).text() == 'Contract') {
			$(this).attr('href', 'http://127.0.0.1:8020/ConTest/OverviewContract.html?openCreatePopup=1');
			//$(this).attr('href', 'http://192.168.166.16/ContractDemo/OverviewContract.html?openCreatePopup=1');
			$(this).button();
		}

		if ($(this).text() == 'Partij') {
			$(this).attr('href', 'http://127.0.0.1:8020/ConTest/OverviewParty.html?openCreatePopup=1');
			//$(this).attr('href', 'http://192.168.166.16/ContractDemo/OverviewParty.html?openCreatePopup=1');
			$(this).button();
		}

		if ($(this).text() == 'Persoon') {
			$(this).attr('href', 'http://127.0.0.1:8020/ConTest/OverviewPerson.html?openCreatePopup=1');
			//$(this).attr('href', 'http://192.168.166.16/ContractDemo/OverviewPerson.html?openCreatePopup=1');
			$(this).button();
		}
	});

	$('#btnSearch').button();
	
	$('#btnSearch').click(function(){
		window.location.replace("http://127.0.0.1:8020/ConTest/Search.html?openGetResult=1");
		//window.location.replace("http://192.168.166.16/ContractDemo/Search.html?openGetResult=1");
	});

	var chart3 = new AwesomeChart('chartCanvas3');
	chart3.chartType = "exploded pie";
	//chart3.title = "Worldwide browser market share: December 2010";
	chart3.data = [51.62, 31.3, 10.06, 4.27, 1.96, 0.78];
	chart3.labels = ['Active', 'Wait', 'Expired', 'Extended', 'Notified', 'Other'];
	chart3.colors = ['#006CFF', '#FF6600', '#34A038', '#945D59', '#93BBF4', '#F493B8'];
	chart3.animate = true;
	chart3.draw();
	
	$("#tblNotifications tr td a").attr('href', 'http://127.0.0.1:8020/ConTest/OverviewNotification.html');
	$("#tblContracts tr td a").attr('href', 'http://127.0.0.1:8020/ConTest/OverviewContract.html');
	
	//$("#tblNotifications tr td a").attr('href', 'http://192.168.166.16/ContractDemo/OverviewNotification.html');
	//$("#tblContracts tr td a").attr('href', 'http://192.168.166.16/ContractDemo/OverviewContract.html');
});
