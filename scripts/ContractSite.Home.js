function onSelect(e) {
	if ($(e.item).children(".k-link").text() == 'Home') {
		window.location.replace("http://127.0.0.1:8020/KendoUIDemos/Home.html");
		
		//http://192.168.166.16/ContractDemo/Home.html
	}

	if ($(e.item).children(".k-link").text() == 'Bewerk/Bekijk') {
		window.location.replace("http://127.0.0.1:8020/KendoUIDemos/OverviewContract.html");
		
		//http://192.168.166.16/ContractDemo/OverviewContract.html
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
	
	if ($(e.item).children(".k-link").text() == 'Notificaties') {
	}
}

$(document).ready(function() {
	$("#menu-images").kendoMenu({
		dataSource : [{
			text : "Home",
			imageUrl : "images/Black_circle/home.png"
		}, {
			text : "Contracten",
			imageUrl : "images/Black_circle/document.png",
			items : [{
				text : "Nieuw"
			}, {
				text : "Bewerk/Bekijk"
			}]
		}, {
			text : "Notificaties",
			imageUrl : "images/Black_circle/alarm.png"
		}, {
			text : "Partij",
			imageUrl : "images/Black_circle/profile_group.png",
			items : [{
				text : "Nieuw"
			}, {
				text : "Bewerk/Bekijk"
			}]
		}, {
			text : "Persoon",
			imageUrl : "images/Black_circle/profile_add.png",
			items : [{
				text : "Nieuw"
			}, {
				text : "Bewerk/Bekijk"
			}]
		}, {
			text : "Zoek",
			imageUrl : "images/Black_circle/rect_search.png"
		}, {
			text : "Track and Trace",
			imageUrl : "images/Black_circle/satellite.png"
		}, {
			text : "Rapportage",
			imageUrl : "images/Black_circle/chart.png"
		}, {
			text : '',
			imageUrl : "images/Black_circle/question.png"
		}],
		select : onSelect
	});
	
	$('#menu-images li:last').attr('style', 'float: right; padding-left: 8px;');
	
	$("#divHelpContent").dialog({
		title : 'HET Portaal -- Contract',
		autoOpen : false,
		height : 380,
		width : 600,
		modal : true
	});
});
