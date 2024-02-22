# ioBroker Integration für E3DC über Modbus-Adapter
Diese Anleitung beschreibt das Vorgehen um mit dem Modbus-Adapter des ioBroker einen E3DC über den Modbus auslesen zu können.
Die Datei [e3dc_modbus_register.tsv](./e3dc_modbus_register.tsv) enthält alle Modbus Register-Werte laut Anleitung *Modbus/TCP-Schnittstelle der E3/DC GmbH – Anleitung für Fachkräfte* in Version 1.70 für die E3DC Stromspeicher mit Modbus TCP Unterstützung (bspw. S10 mini, S10 E, S10 E Pro und Quattroporte). 

- [ioBroker Integration für E3DC über Modbus-Adapter](#iobroker-integration-für-e3dc-über-modbus-adapter)
  - [Voraussetzungen](#voraussetzungen)
  - [Konfiguration im ioBroker](#konfiguration-im-iobroker)
  - [Typen der Leistungsmesser](#typen-der-leistungsmesser)
  - [ioBroker Javascript Benachrichtigungen](#iobroker-javascript-benachrichtigungen)
    - [Push-Nachricht über neu installierte Firmware](#push-nachricht-über-neu-installierte-firmware)
    - [Push-Nachricht über Änderung des Emergency-Power Status](#push-nachricht-über-änderung-des-emergency-power-status)
    - [Push-Nachricht über Änderung des Batterie-SOC](#push-nachricht-über-änderung-des-batterie-soc)

## Voraussetzungen
* ioBroker mit Modbus-Adapter
* Im E3DC Stromspeicher muss Modbus TCP im E3DC-Protokoll aktiviert sein.
Eine genaue Anleitung wie dies aktiviert wird ist hier zu finden: https://github.com/Brovning/e3dc/blob/master/README.md#2-vorraussetzungen

## Konfiguration im ioBroker
1. Modbus-Adapter im ioBroker installieren
2. In der Konfiguration des Modbus-Adapter im Register Allgemein die IP des E3DC-Stromspeicher eintragen.
3. In der Konfiguration des Modbus-Adapter im Register Holding Registers im linken oberen Menü auf das Icon mit den gegenläufigen Pfeilen (Als TSV bearbeiten (Tabulatorgetrennte Werte)) gehen.
4. Den Inhalt der TSV-Datei in das Eingabefeld kopieren und unten rechts mit dem Speichern-Icon / Import-Button bestätigen.
![Menü Import aus TSV in der modbus-Adapterkonfiguration im ioBroker](./ioBroker_modbus-adapter_import-tsv.png?raw=true "ioBroker > Instanzen > modbus-Adapter > Konfiguration > Holding Registers > Daten als TSV bearbeiten")
5. Abschließend die Adapterkonfiguration Speichern

## Typen der Leistungsmesser
|Typ|Bezeichnung|Hinweise|
|--- | --- | --- |
|1|Wurzelleistungsmesser| Dies ist der Regelpunkt des Systems. Der Regelpunkt entspricht üblicherweise dem Hausanschlusspunkt.|
|2|Externe Produktion|–|
|3|Zweirichtungszähler|–|
|4|Externer Verbrauch|–|
|5|Farm|–|
|6|Wird nicht verwendet|–|
|7|Wallbox|–|
|8|Externer Leistungsmesser Farm|–|
|9|Datenanzeige|Wird nicht in die Regelung eingebunden, sondern dient nur der Datenaufzeichnung des Kundenportals.|
|10|Regelungsbypass|Die gemessene Leistung wird nicht in die Batterie geladen oder aus der Batterie entladen. |

## ioBroker Javascript Benachrichtigungen

### Push-Nachricht über neu installierte Firmware

[notify-firmware-update.js](js/notify-firmware-update.js)

### Push-Nachricht über Änderung des Emergency-Power Status

[notify-emergency-power-status.js](js/notify-emergency-power-status.js)

Dieses Beispiel sendet via Pushover-Adapter und Signal-Adapter bei einer Änderung des Emergency-Power Status eine Benachrichtigung.

### Push-Nachricht über Änderung des Batterie-SOC

[notify-batterie-soc.js](js/notify-batterie-soc.js)

Dieses Beispiel sendet via Pushover-Adapter beim erreichen der folgenden Batterie-SOC eine Benachrichtigung:

- Speicher bei 50%, wird entladen
- Speicher bei 50%, wird geladen
- Speicher bei 95%, wird geladen
- Speicher bei 20%, wird entladen
- Speicher bei 0%