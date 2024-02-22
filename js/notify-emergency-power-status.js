on({id: 'modbus.0.holdingRegisters.40084_Emergency_Power_Status'/*Emergency-Power Status*/, change: "ne"}, function (obj) {
    var value = obj.state.val;
    var oldValue = obj.oldState.val;
    if(value != oldValue){
        var messsage = ('Änderung des Emergency-Power Status: '+value+'(2= Normalbetrieb, 1 = Notstrombetrieb, 0 = Notstrombetrieb nicht verfügbar)')
      
        /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
              message: messsage,
              sound: "",
              title: 'Emergency-Power Status'
          });
      
        /** Senden via Signal-Adapter */
        sendTo('signal-cmb.0', 'send', {
              text:  messsage, 
              });
      }
  });