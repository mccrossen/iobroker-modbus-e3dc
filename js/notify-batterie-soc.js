on({id: 'modbus.0.holdingRegisters.40083_Batterie_SOC'/*Batterie-SOC in Prozent*/, change: "ne"}, function (obj) {
    var value = obj.state.val;
    var oldValue = obj.oldState.val;
    
    if(value == 50 && oldValue == 51){
        /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
                message: 'Speicher bei 50%, wird entladen',
                sound: "",
                title: 'Speicherüberwachung'
            });
        }

    if(value == 50 && oldValue == 49){
        /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
              message: 'Speicher bei 50%, wird geladen',
              sound: "",
              title: 'Speicherüberwachung'
          });
      }

    if(value == 95 && oldValue == 94){
      /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
              message: 'Speicher bei 95%, wird geladen',
              sound: "",
              title: 'Speicherüberwachung'
          });
      }

    if(value == 0 && oldValue == 1){
        /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
              message: 'Speicher bei 0%',
              sound: "",
              title: 'Speicherüberwachung'
          });
      }

    if(value == 20 && oldValue == 21){
        /** Senden via Pushover-Adapter */
        sendTo("pushover", "send", {
              message: 'Speicher bei 20%, wird entladen',
              sound: "",
              title: 'Speicherüberwachung'
          });
      }
  });