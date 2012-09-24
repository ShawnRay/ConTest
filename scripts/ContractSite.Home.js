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
			text : "<label>Notificaties</label><div style=\"margin-top: 4px; margin-left: 6px; float: right; color: white; font-weight: bold; height: 20px; width:20px; background-image: url('images/notification_error_medium.png');\"><div style='margin-left: 6px;'>5</div></div>",
			encoded: false,
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
