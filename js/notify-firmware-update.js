on({id: 'modbus.0.holdingRegisters.40052_Firmware'/*Firmware Release*/, change: "ne"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  if(value != oldValue){
    sendTo("pushover", "send", {
            message: ('Neue Firmware für Speicher: '+value),
            sound: "",
            title: 'Speicherfirmware'
        });
    }
});
