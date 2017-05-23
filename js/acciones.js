// JavaScript Document

$(document).ready(function(e) {
    document .addEventListener("deviceready", onDeviceReady, false);
	
});

function onDeviceREady(){
	
	$('#posicion').on('click', function(){
		getposition();
	});
	
	$('#watch').on('click', function(){
		watchposition();
	});
	
}

 function getposition(){
	
	var options = {
		enableHighAccuracy : true,
		maximumAge: 3600000
	}
	
	var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position){
		
		alert('latitude:'    +position.coords.latitude      +'\n' +
		'longitude:'         +position.coords.longitude     +'\n' +
		'Altitude:'         +position.coords.altitude     +'\n' + 
		'Accuracy:'         +position.coords.accuracy     +'\n' +
		'Altitude Accuracy:'         +position.coords.altitudeAccuracy     +'\n' +
		'Heading:'         +position.coords.heading     +'\n' +
		'Speed:'         +position.coords.speed     +'\n' +
		'Timestamp:'         +position.timestamp     +'\n' );
	};
	
	function onError(error) {
		alert('code:'    +error.code    +'\n' + 'message:'+error.message+'\n');
	}
 }
 
 function watchPosition(){
	 
	 var options = {
		 maximumAge : 3600000,
		 timeout : 3000,
		 enableHighAccuracy : true,
	 }
	 
	 var watchID = navigator.geolocation.watchPosition(onSuccess, onError, option);
	 
	 function onSuccess(position){
		 
		 $('#latitud').html(position.coords.latitude);
		  $('#longitud').html(position.coords.longitude);
		   $('#altitud').html(position.coords.altitude);
		    $('#accuracy').html(position.coords.accuracy);
			 $('#aaccuracy').html(position.coords.altitudeAccuracy);
			  $('#headingg').html(position.coords.hesding);
			   $('#speed').html(position.coords.speed);
			    $('#timestamp').html(position.coords.timestamp);
	 };
	 
	 function onError(error){
		 alert('code:'   +error.code      +'\n'+'message'+error.message+'\n');
	 }
	 
 }