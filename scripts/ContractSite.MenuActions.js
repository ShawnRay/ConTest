/**
 * @author gary.gan
 */
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if (results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function onOpen(e) {
	//kendoConsole.log("Opened: " + $(e.item).children(".k-link").text());

}

function onClose(e) {
	//kendoConsole.log("Closed: " + $(e.item).children(".k-link").text());
}

function onSelect(e) {
	if ($(e.item).children(".k-link").text() == 'Home') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/Home.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/Home.html");
	}

	if ($(e.item).children(".k-link").text() == 'Contracten') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewContract.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/OverviewContract.html");
	}
	
	if ($(e.item).children(".k-link").text() == 'Partij') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewParty.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/OverviewParty.html");
	}

	if ($(e.item).children(".k-link").text() == 'Persoon') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewPerson.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/OverviewPerson.html");
	}

	if ($(e.item).children(".k-link").text() == 'Bewerk/Bekijk') {
		if ($(e.item).parents("div").prev("span").text() == 'Contracten') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewContract.html");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewContract.html");

			$("#checkSource").val("0");
		}

		if ($(e.item).parents("div").prev("span").text() == 'Partij') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewParty.html");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewParty.html");
		}

		if ($(e.item).parents("div").prev("span").text() == 'Persoon') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewPerson.html");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewPerson.html");
		}
	}

	if ($(e.item).children(".k-link").text() == 'Nieuw') {
		if ($(e.item).parents("div").prev("span").text() == 'Contracten') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewContract.html?openCreatePopup=1");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewContract.html?openCreatePopup=1");
		}

		if ($(e.item).parents("div").prev("span").text() == 'Partij') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewParty.html?openCreatePopup=1");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewParty.html?openCreatePopup=1");
		}

		if ($(e.item).parents("div").prev("span").text() == 'Persoon') {
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewPerson.html?openCreatePopup=1");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewPerson.html?openCreatePopup=1");
		}
	}

	if ($(e.item).children(".k-link").children('label').text() == 'Notificaties') {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title : 'Notification Center',
			// (string | mandatory) the text inside the notification
			text : '5 notifications.',
			// (string | optional) the image to display on the left
			image : 'images/White_circle/alarm.png',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky : false,
			// (int | optional) the time you want it to be alive for before fading out
			time : '3000'
		});
		
		window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewNotification.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/OverviewNotification.html");

		return false;
	}
	
	if ($(e.item).children(".k-link").text() == 'Zoek') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/Search.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/Search.html");
	}
	
	if ($(e.item).children(".k-link").text() == 'Track and Trace') {
		window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewTrackAndTrace.html");
		//window.location.replace("http://192.168.166.16/ContractDemo/OverviewTrackAndTrace.html");
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
			text : "<label>Notificaties</label><div style=\"margin-top: 4px; margin-left: 6px; float: right; color: white; font-weight: bold; height: 20px; width:20px; background-image: url('images/notification_error_medium.png');\"><div style='margin-left: 6px; margin-top: 2px;'>5</div></div>",
			encoded : false,
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
		select : onSelect,
		open : onOpen,
		close : onClose
	});

	$('#menu-images li:last').attr('style', 'float: right; padding-left: 8px;');
	$($('#menu-images li').get(4)).find('span').attr('style', 'width: 120px;');

	if ($("#btnPrint").length > 0) {
		$("#btnPrint").printPreview();
		$("#btnPrint").button();
	}

	if ($("#btnCreate").length > 0) {
		$("#btnCreate").button().click(function() {
			$("#dialog-form").dialog("open");
		});

		if (getParameterByName('openCreatePopup') == "1") {
			$('#btnCreate').trigger('click');
		}
	}
});
