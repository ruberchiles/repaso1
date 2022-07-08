//https://www.eclipse.org/paho/clients/js/


function LED1_On() {
	console.log("led1 on");
	message = new Paho.MQTT.Message("L1on");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
}
function LED1_Off(){	
	console.log("led1 off");
	message = new Paho.MQTT.Message("L1off");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function LED2_On() {
	console.log("led2 on");
	message = new Paho.MQTT.Message("L2on");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
}
function LED2_Off() {
	console.log("led2 off");
	message = new Paho.MQTT.Message("L2off");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
}
function Historial() {
	console.log("Historial_1");
	message = new Paho.MQTT.Message("h");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
}
function Historial1() {
	console.log("Historial_2");
	message = new Paho.MQTT.Message("h1");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
		//document.getElementById("sensor").innerHTML=x.split(" ")[0];
		//document.getElementById("sensor1").innerHTML=x.split(" ")[1];
		
}
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "ruberchiles@hotmail.es",
    password: "Campeones1",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ruberchiles@hotmail.es/test");
    message = new Paho.MQTT.Message("Dispositivo Conectado con la Nube");
    message.destinationName = "ruberchiles@hotmail.es/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	x=message.payloadString;	
		//document.getElementById("sensor").innerHTML=x.split(" ")[0];
		//document.getElementById("sensor1").innerHTML=x.split(" ")[1];
		if(x=="LED1_ENCENDIDO"){
		document.getElementById("sensor").innerHTML=x
		}
		else if(x=="LED1_APAGADO"){
		document.getElementById("sensor").innerHTML=x
		}
		else if(x=="LED2_ENCENDIDO"){
		document.getElementById("sensor1").innerHTML=x
		}
		else if(x=="LED2_APAGADO"){
		document.getElementById("sensor1").innerHTML=x
		}
		else if(x=="LED3_ENCENDIDO"){
		document.getElementById("sensor2").innerHTML=x
		}
		else if(x=="LED3_APAGADO"){
		document.getElementById("sensor2").innerHTML=x
		}
		else {
			
			
			document.getElementById("sensor3").innerHTML=x
						
		}
			
		
		}
  