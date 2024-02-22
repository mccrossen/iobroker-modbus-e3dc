on({id: 'modbus.0.holdingRegisters.40052_Firmware'/*Firmware Release*/, change: "ne"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  if(value != oldValue){
    var messsage = ('Neue Firmware für Speicher: '+value)

    /** Senden via Pushover-Adapter */
    sendTo("pushover", "send", {
            message: messsage,
            sound: "",
            title: 'Speicherfirmware'
        });

    /** Senden via Signal-Adapter */
    sendTo('signal-cmb.0', 'send', {
      text:  messsage, 
      });
    }
});
