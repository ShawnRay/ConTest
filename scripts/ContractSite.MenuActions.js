/**
 * @author gary.gan
 */
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
			window.location.replace("http://127.0.0.1:8020/ConDemos/OverviewContract.html");
			//window.location.replace("http://192.168.166.16/ContractDemo/OverviewContract.html");
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
	
	if ($(e.item).children(".k-link").text() == 'Home') {
		$("#divHelpContent").dialog('open');
	}

}