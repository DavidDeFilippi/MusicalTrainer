var notas = ["C1", "C1#", "D1", "D1#", "E1", "F1", "F1#", "G1", "G1#", "A1", "A1#",
"B1", "C2", "C2#", "D2", "D2#", "E2", "F2", "F2#", "G2", "G2#", "A2", "A2#", "B2",
"C3", "C3#", "D3", "D3#", "E3", "F3", "F3#", "G3", "G3#", "A3", "A3#", "B3"];

var notaslatinas = ["Do1", "Do1#", "Re1", "Re1#", "Mi1", "Fa1", "Fa1#", "Sol1", "Sol1#", "La1", "La1#",
"Si1", "Do2", "Do2#", "Re2", "Re2#", "Mi2", "Fa2", "Fa2#", "Sol2", "Sol2#", "La2", "La2#", "Si2",
"Do3", "Do3#", "Re3", "Re3#", "Mi3", "Fa3", "Fa3#", "Sol3", "Sol3#", "La3", "La3#", "Si3"];

var idAudios = ["audioC1", "audioC1sharp", "audioD1", "audioD1sharp", "audioE1",
"audioF1", "audioF1sharp", "audioG1", "audioG1sharp", "audioA1", "audioA1sharp",
"audioB1", "audioC2", "audioC2sharp", "audioD2", "audioD2sharp", "audioE2",
"audioF2", "audioF2sharp", "audioG2", "audioG2sharp", "audioA2", "audioA2sharp",
"audioB2", "audioC3", "audioC3sharp", "audioD3", "audioD3sharp", "audioE3",
"audioF3", "audioF3sharp", "audioG3", "audioG3sharp", "audioA3", "audioA3sharp",
"audioB3"];//los id del html tag "<audio>"

var nombreArchivos = ["C1", "C1sharp", "D1", "D1sharp", "E1",
"F1", "F1sharp", "G1", "G1sharp", "A1", "A1sharp",
"B1", "C2", "C2sharp", "D2", "D2sharp", "E2",
"F2", "F2sharp", "G2", "G2sharp", "A2", "A2sharp",
"B2", "C3", "C3sharp", "D3", "D3sharp", "E3",
"F3", "F3sharp", "G3", "G3sharp", "A3", "A3sharp",
"B3"]; //nombres de los archivos de audio sin su extensión

//////////////////////////////////////////////////////
//////////////Menu de la pagina//////////////////////

function pageMenu(page) {
  if(page === "home"){
    window.location = "http://localhost/musicaltrainer";
  }
}

function bloquearPiano() {
  document.getElementById('teclado').style.pointerEvents = "none";
  document.onkeydown = null;

  document.getElementById("estado-teclado").style.backgroundColor = "red";
  document.getElementById("estado-teclado").innerHTML = "Bloqueado";
}

function desbloquearPiano() {
  document.getElementById('teclado').style.pointerEvents = "auto";
  document.onkeydown = saveKeyboard;

  document.getElementById("estado-teclado").style.backgroundColor = "limegreen";
  document.getElementById("estado-teclado").innerHTML = "Desbloqueado";
}

for (var i = 0; i < 36; i++) {
  //Se carga el instrumento por defecto
  document.getElementById(idAudios[i]).src = "media/sound/piano/"+nombreArchivos[i]+".mp3";
}

for (var i = 0; i < 36; i++) {
  document.getElementById('keyname'+[i]).innerHTML = notaslatinas[i];
}

function nombreNota(){//aqui selecciona si quieres ver el nombre de las notas en el piano
  var shek = document.getElementById('nombreteclas');
  var tiponota = document.getElementById('selecttiponota').value;
  if(shek.checked == false){ //no se por que al ser true lo lee como false
    for (var i = 0; i < 36; i++) {
      if(tiponota == "abc"){
          document.getElementById('keyname'+[i]).innerHTML = notas[i];
      }else {
          document.getElementById('keyname'+[i]).innerHTML = notaslatinas[i];
      }

    }
  }else{
    for (var i = 0; i < 36; i++) {
      document.getElementById('keyname'+[i]).innerHTML = "";
    }
  }
}

function cambiarNombreTecla() {
  var tiponota = document.getElementById('selecttiponota').value;
  for (var i = 0; i < 36; i++) {
    if(tiponota == "abc"){
      document.getElementById('keyname'+[i]).innerHTML = notas[i];
    }else{
      document.getElementById('keyname'+[i]).innerHTML = notaslatinas[i];
    }
  }
}

function cambiarInstrumento(valor) {
  var inst = document.getElementById("selectInstrumento").value;
  if (inst == "piano") {
    for (var i = 0; i < 36; i++) {
      document.getElementById(idAudios[i]).src = "media/sound/piano/"+nombreArchivos[i]+".mp3";
    }
  }
  if (inst == "arpa") {
    for (var i = 0; i < 36; i++) {
      document.getElementById(idAudios[i]).src = "media/sound/arpa/"+nombreArchivos[i]+".mp3";
    }
  }
  if (inst == "clave") {
    for (var i = 0; i < 36; i++) {
      document.getElementById(idAudios[i]).src = "media/sound/clave/"+nombreArchivos[i]+".mp3";
    }
  }
}

  function do1() {
      var audioC1 = document.getElementById("audioC1");
      audioC1.pause();
      audioC1.currentTime = 0;
      audioC1.play();
      marcar(nombreArchivos[0]);

      setTimeout(function(){
        desmarcar(nombreArchivos[0]);
      }, 250);
  }

  function do1sharp() {
      var audioC1sharp = document.getElementById("audioC1sharp");
      audioC1sharp.pause();
      audioC1sharp.currentTime = 0;
      audioC1sharp.play();
      marcar(nombreArchivos[1]);

      setTimeout(function(){
        desmarcar(nombreArchivos[1]);
      }, 250);
  }

  function re1() {
      var audioD1 = document.getElementById("audioD1");
      audioD1.pause();
      audioD1.currentTime = 0;
      audioD1.play();
      marcar(nombreArchivos[2]);

      setTimeout(function(){
        desmarcar(nombreArchivos[2]);
      }, 250);
  }

  function re1sharp() {
      var audioD1sharp = document.getElementById("audioD1sharp");
      audioD1sharp.pause();
      audioD1sharp.currentTime = 0;
      audioD1sharp.play();
      marcar(nombreArchivos[3]);

      setTimeout(function(){
        desmarcar(nombreArchivos[3]);
      }, 250);
  }

  function mi1() {
      var audioE1 = document.getElementById("audioE1");
      audioE1.pause();
      audioE1.currentTime = 0;
      audioE1.play();
      marcar(nombreArchivos[4]);

      setTimeout(function(){
        desmarcar(nombreArchivos[4]);
      }, 250);
  }

  function fa1() {
      var audioF1 = document.getElementById("audioF1");
      audioF1.pause();
      audioF1.currentTime = 0;
      audioF1.play();
      marcar(nombreArchivos[5]);

      setTimeout(function(){
        desmarcar(nombreArchivos[5]);
      }, 250);
  }

  function fa1sharp() {
      var audioF1sharp = document.getElementById("audioF1sharp");
      audioF1sharp.pause();
      audioF1sharp.currentTime = 0;
      audioF1sharp.play();
      marcar(nombreArchivos[6]);

      setTimeout(function(){
        desmarcar(nombreArchivos[6]);
      }, 250);
  }

  function sol1() {
      var audioG1 = document.getElementById("audioG1");
      audioG1.pause();
      audioG1.currentTime = 0;
      audioG1.play();
      marcar(nombreArchivos[7]);

      setTimeout(function(){
        desmarcar(nombreArchivos[7]);
      }, 250);
  }

  function sol1sharp() {
      var audioG1sharp = document.getElementById("audioG1sharp");
      audioG1sharp.pause();
      audioG1sharp.currentTime = 0;
      audioG1sharp.play();
      marcar(nombreArchivos[8]);

      setTimeout(function(){
        desmarcar(nombreArchivos[8]);
      }, 250);
  }

  function la1() {
      var audioA1 = document.getElementById("audioA1");
      audioA1.pause();
      audioA1.currentTime = 0;
      audioA1.play();
      marcar(nombreArchivos[9]);

      setTimeout(function(){
        desmarcar(nombreArchivos[9]);
      }, 250);
  }

  function la1sharp() {
      var audioA1sharp = document.getElementById("audioA1sharp");
      audioA1sharp.pause();
      audioA1sharp.currentTime = 0;
      audioA1sharp.play();
      marcar(nombreArchivos[10]);

      setTimeout(function(){
        desmarcar(nombreArchivos[10]);
      }, 250);
  }

  function si1() {
      var audioB1 = document.getElementById("audioB1");
      audioB1.pause();
      audioB1.currentTime = 0;
      audioB1.play();
      marcar(nombreArchivos[11]);

      setTimeout(function(){
        desmarcar(nombreArchivos[11]);
      }, 250);
  }

  function do2() {
      var audioC2 = document.getElementById("audioC2");
      audioC2.pause();
      audioC2.currentTime = 0;
      audioC2.play();
      marcar(nombreArchivos[12]);

      setTimeout(function(){
        desmarcar(nombreArchivos[12]);
      }, 250);
  }

  function do2sharp() {
      var audioC2sharp = document.getElementById("audioC2sharp");
      audioC2sharp.pause();
      audioC2sharp.currentTime = 0;
      audioC2sharp.play();
      marcar(nombreArchivos[13]);

      setTimeout(function(){
        desmarcar(nombreArchivos[13]);
      }, 250);
  }

  function re2() {
      var audioD2 = document.getElementById("audioD2");
      audioD2.pause();
      audioD2.currentTime = 0;
      audioD2.play();
      marcar(nombreArchivos[14]);

      setTimeout(function(){
        desmarcar(nombreArchivos[14]);
      }, 250);
  }

  function re2sharp() {
      var audioD2sharp = document.getElementById("audioD2sharp");
      audioD2sharp.pause();
      audioD2sharp.currentTime = 0;
      audioD2sharp.play();
      marcar(nombreArchivos[15]);

      setTimeout(function(){
        desmarcar(nombreArchivos[15]);
      }, 250);
  }

  function mi2() {
      var audioE2 = document.getElementById("audioE2");
      audioE2.pause();
      audioE2.currentTime = 0;
      audioE2.play();
      marcar(nombreArchivos[16]);

      setTimeout(function(){
        desmarcar(nombreArchivos[16]);
      }, 250);
  }

  function fa2() {
      var audioF2 = document.getElementById("audioF2");
      audioF2.pause();
      audioF2.currentTime = 0;
      audioF2.play();
      marcar(nombreArchivos[17]);

      setTimeout(function(){
        desmarcar(nombreArchivos[17]);
      }, 250);
  }

  function fa2sharp() {
      var audioF2sharp = document.getElementById("audioF2sharp");
      audioF2sharp.pause();
      audioF2sharp.currentTime = 0;
      audioF2sharp.play();
      marcar(nombreArchivos[18]);

      setTimeout(function(){
        desmarcar(nombreArchivos[18]);
      }, 250);
  }

  function sol2() {
      var audioG2 = document.getElementById("audioG2");
      audioG2.pause();
      audioG2.currentTime = 0;
      audioG2.play();
      marcar(nombreArchivos[19]);

      setTimeout(function(){
        desmarcar(nombreArchivos[19]);
      }, 250);
  }

  function sol2sharp() {
      var audioG2sharp = document.getElementById("audioG2sharp");
      audioG2sharp.pause();
      audioG2sharp.currentTime = 0;
      audioG2sharp.play();
      marcar(nombreArchivos[20]);

      setTimeout(function(){
        desmarcar(nombreArchivos[20]);
      }, 250);
  }

  function la2() {
      var audioA2 = document.getElementById("audioA2");
      audioA2.pause();
      audioA2.currentTime = 0;
      audioA2.play();
      marcar(nombreArchivos[21]);

      setTimeout(function(){
        desmarcar(nombreArchivos[21]);
      }, 250);
  }

  function la2sharp() {
      var audioA2sharp = document.getElementById("audioA2sharp");
      audioA2sharp.pause();
      audioA2sharp.currentTime = 0;
      audioA2sharp.play();
      marcar(nombreArchivos[22]);

      setTimeout(function(){
        desmarcar(nombreArchivos[22]);
      }, 250);
  }

  function si2() {
      var audioB2 = document.getElementById("audioB2");
      audioB2.pause();
      audioB2.currentTime = 0;
      audioB2.play();
      marcar(nombreArchivos[23]);

      setTimeout(function(){
        desmarcar(nombreArchivos[23]);
      }, 250);
  }

  function do3() {
      var audioC3 = document.getElementById("audioC3");
      audioC3.pause();
      audioC3.currentTime = 0;
      audioC3.play();
      marcar(nombreArchivos[24]);

      setTimeout(function(){
        desmarcar(nombreArchivos[24]);
      }, 250);
  }

  function do3sharp() {
      var audioC3sharp = document.getElementById("audioC3sharp");
      audioC3sharp.pause();
      audioC3sharp.currentTime = 0;
      audioC3sharp.play();
      marcar(nombreArchivos[25]);

      setTimeout(function(){
        desmarcar(nombreArchivos[25]);
      }, 250);
  }

  function re3() {
      var audioD3 = document.getElementById("audioD3");
      audioD3.pause();
      audioD3.currentTime = 0;
      audioD3.play();
      marcar(nombreArchivos[26]);

      setTimeout(function(){
        desmarcar(nombreArchivos[26]);
      }, 250);
  }

  function re3sharp() {
      var audioD3sharp = document.getElementById("audioD3sharp");
      audioD3sharp.pause();
      audioD3sharp.currentTime = 0;
      audioD3sharp.play();
      marcar(nombreArchivos[27]);

      setTimeout(function(){
        desmarcar(nombreArchivos[27]);
      }, 250);
  }

  function mi3() {
      var audioE3 = document.getElementById("audioE3");
      audioE3.pause();
      audioE3.currentTime = 0;
      audioE3.play();
      marcar(nombreArchivos[28]);

      setTimeout(function(){
        desmarcar(nombreArchivos[28]);
      }, 250);
  }

  function fa3() {
      var audioF3 = document.getElementById("audioF3");
      audioF3.pause();
      audioF3.currentTime = 0;
      audioF3.play();
      marcar(nombreArchivos[29]);

      setTimeout(function(){
        desmarcar(nombreArchivos[29]);
      }, 250);
  }

  function fa3sharp() {
      var audioF3sharp = document.getElementById("audioF3sharp");
      audioF3sharp.pause();
      audioF3sharp.currentTime = 0;
      audioF3sharp.play();
      marcar(nombreArchivos[30]);

      setTimeout(function(){
        desmarcar(nombreArchivos[30]);
      }, 250);
  }

  function sol3() {
      var audioG3 = document.getElementById("audioG3");
      audioG3.pause();
      audioG3.currentTime = 0;
      audioG3.play();
      marcar(nombreArchivos[31]);

      setTimeout(function(){
        desmarcar(nombreArchivos[31]);
      }, 250);
  }

  function sol3sharp() {
      var audioG3sharp = document.getElementById("audioG3sharp");
      audioG3sharp.pause();
      audioG3sharp.currentTime = 0;
      audioG3sharp.play();
      marcar(nombreArchivos[32]);

      setTimeout(function(){
        desmarcar(nombreArchivos[32]);
      }, 250);
  }

  function la3() {
      var audioA3 = document.getElementById("audioA3");
      audioA3.pause();
      audioA3.currentTime = 0;
      audioA3.play();
      marcar(nombreArchivos[33]);

      setTimeout(function(){
        desmarcar(nombreArchivos[33]);
      }, 250);
  }

  function la3sharp() {
      var audioA3sharp = document.getElementById("audioA3sharp");
      audioA3sharp.pause();
      audioA3sharp.currentTime = 0;
      audioA3sharp.play();
      marcar(nombreArchivos[34]);

      setTimeout(function(){
        desmarcar(nombreArchivos[34]);
      }, 250);
  }

  function si3() {
      var audioB3 = document.getElementById("audioB3");
      audioB3.pause();
      audioB3.currentTime = 0;
      audioB3.play();
      marcar(nombreArchivos[35]);

      setTimeout(function(){
        desmarcar(nombreArchivos[35]);
      }, 250);
  }


function toca(id){

  if(id == "C1"){
    do1();
  }
  if(id == "C1sharp"){
    do1sharp();
  }
  if(id == "D1"){
    re1();
  }
  if(id == "D1sharp"){
    re1sharp();
  }
  if(id == "E1"){
    mi1();
  }
  if(id == "F1"){
    fa1();
  }
  if(id == "F1sharp"){
    fa1sharp();
  }
  if(id == "G1"){
    sol1();
  }
  if(id == "G1sharp"){
    sol1sharp();
  }
  if(id == "A1"){
    la1();
  }
  if(id == "A1sharp"){
    la1sharp();
  }
  if(id == "B1"){
    si1();
  }
  if(id == "C2"){
    do2();
  }
  if(id == "C2sharp"){
    do2sharp();
  }
  if(id == "D2"){
    re2();
  }
  if(id == "D2sharp"){
    re2sharp();
  }
  if(id == "E2"){
    mi2();
  }
  if(id == "F2"){
    fa2();
  }
  if(id == "F2sharp"){
    fa2sharp();
  }
  if(id == "G2"){
    audioG2.pause();
    sol2();
  }
  if(id == "G2sharp"){
    sol2sharp();
  }
  if(id == "A2"){
    la2();
  }
  if(id == "A2sharp"){
    la2sharp();
  }
  if(id == "B2"){
    si2();
  }
  if(id == "C3"){
    do3();
  }
  if(id == "C3sharp"){
    do3sharp();
  }
  if(id == "D3"){
    re3();
  }
  if(id == "D3sharp"){
    re3sharp();
  }
  if(id == "E3"){
    mi3();
  }
  if(id == "F3"){
    fa3();
  }
  if(id == "F3sharp"){
    fa3sharp();
  }
  if(id == "G3"){
    sol3();
  }
  if(id == "G3sharp"){
    sol3sharp();
  }
  if(id == "A3"){
    la3();
  }
  if(id == "A3sharp"){
    la3sharp();
  }
  if(id == "B3"){
    si3();
  }
  //document.getElementById('muestra-nota').innerHTML = id;
  return id;
}

function marcar(id){
  if(id.includes("sharp")){
    document.getElementById(id).style.background = "#ff8906";
  }else {
    document.getElementById(id).style.background = "#00a4a4";
  }
}

function desmarcar(id){
  if (id.includes("sharp")) {
    document.getElementById(id).style.background = "black";
  }else {
    document.getElementById(id).style.background = "white";
  }
}

document.onkeydown = function(evt){

  tecla = evt.keyCode;
  var id;
  if(tecla == 90){
    id = nombreArchivos[0];
    toca(id);
  }
  if(tecla == 83){
   id = nombreArchivos[1];
   toca(id);
  }
  if(tecla == 88){
    id = nombreArchivos[2];
    toca(id);
  }
  if(tecla == 68){
   id = nombreArchivos[3];
   toca(id);
  }
  if(tecla == 67){
    id = nombreArchivos[4];
    toca(id);
  }
  if(tecla == 86){
    id = nombreArchivos[5];
    toca(id);
  }
  if(tecla == 71){
    id = nombreArchivos[6];
    toca(id);
  }
  if(tecla == 66){
    id = nombreArchivos[7];
    toca(id);
  }
  if(tecla == 72){
    id = nombreArchivos[8];
    toca(id);
  }
  if(tecla == 78){
    id = nombreArchivos[9];
    toca(id);
  }
  if(tecla == 74){
    id = nombreArchivos[10];
    toca(id);
  }
  if(tecla == 77){
    id = nombreArchivos[11];
    toca(id);
  }
  if(tecla == 188 || tecla == 81){
    id = nombreArchivos[12];
    toca(id);
  }
  if(tecla == 76 || tecla == 50){
    id = nombreArchivos[13];
    toca(id);
  }
  if(tecla == 190 || tecla == 87){
    id = nombreArchivos[14];
    toca(id);
  }
  if(tecla == 192 || tecla == 51){
    id = nombreArchivos[15];
    toca(id);
  }
  if(tecla == 189 || tecla == 69){
    id = nombreArchivos[16];
    toca(id);
  }
  if(tecla == 82){
    id = nombreArchivos[17];
    toca(id);
  }
  if(tecla == 53){
    id = nombreArchivos[18];
    toca(id);
  }
  if(tecla == 84){
    id = nombreArchivos[19];
    toca(id);
  }
  if(tecla == 54){
    id = nombreArchivos[20];
    toca(id);
  }
  if(tecla == 89){
    id = nombreArchivos[21];
    toca(id);
  }
  if(tecla == 55){
    id = nombreArchivos[22];
    toca(id);
  }
  if(tecla == 85){
    id = nombreArchivos[23];
    toca(id);
  }
  if(tecla == 73){
    id = nombreArchivos[24];
    toca(id);
  }
  if(tecla == 57){
    id = nombreArchivos[25];
    toca(id);
  }
  if(tecla == 79){
    id = nombreArchivos[26];
    toca(id);
  }
  if(tecla == 48){
    id = nombreArchivos[27];
    toca(id);
  }
  if(tecla == 80){
    id = nombreArchivos[28];
    toca(id);
  }
  if(tecla == 186){
    id = nombreArchivos[29];
    toca(id);
  }
  if(tecla == 221){
    id = nombreArchivos[30];
    toca(id);
  }
  if(tecla == 187){
    id = nombreArchivos[31];
    toca(id);
  }
  if(tecla == "G3sharp"){
    id = nombreArchivos[32];
    toca(id);
  }
  if(tecla == "A3"){
    id = nombreArchivos[33];
    toca(id);
  }
  if(tecla == "A3sharp"){
    id = nombreArchivos[34];
    toca(id);
  }
  if(tecla == "B3"){
    id = nombreArchivos[35];
    toca(id);
  }
  if(id === undefined){
    document.getElementById('muestra-nota').innerHTML = "";
  }else {
    var x = document.getElementById(id).children[0].innerHTML;
    document.getElementById('muestra-nota').innerHTML = x;
  }

}

var saveKeyboard = document.onkeydown;

function cambiarPuntero(id) {
  document.getElementById(id).style.cursor = "pointer";
}

function cancionXML() {

  var selectedValue = document.getElementById('selectCancion').value;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        bloquearPiano();
        document.getElementById('btnReproducir').disabled = true;
        document.getElementById('tempo').disabled = true;
        track1(xmlhttp);
        track2(xmlhttp);

    }
  }
  xmlhttp.open("GET", "xml/"+selectedValue+".xml", true);
  xmlhttp.send();
}

var tempo = 1.6;

function track1(xmlhttp) {
  var step = "";
  var octave = 0;
  var notes = ["do", "re", "mi", "fa", "sol", "la", "si"];
  var americanKey = ["C","D","E","F","G","A","B"];
  var alter = 0;
  var duration = 0;
  var getNote = "asdf";
  var xmlDoc = xmlhttp.responseXML;
  var z = xmlDoc.getElementsByTagName("part");
  var m;
  var x;
  var y;
  var alteracion = "";
  var tiempo = 0;
  /////////////////////////////////////////////
  for (var i = 0; i < z.length; i++) {
    if (z[i].getAttribute('id') == "p0") {
      x = z[i].getElementsByTagName('note');
    }
  }
  ///////////////////////////////////////////////
  for (var i = 0; i < x.length; i++) {
    y = x[i].getElementsByTagName("pitch");
    if(i == 0 ){
      duration = 0;
    }else {
      duration = parseInt(x[i - 1].getElementsByTagName("duration")[0].childNodes[0].nodeValue);
    }

    for (var j = 0; j < y.length; j++) {
      step = y[j].getElementsByTagName("step")[0].childNodes[0].nodeValue;
      octave = y[j].getElementsByTagName("octave")[0].childNodes[0].nodeValue;
      if (typeof y[j].getElementsByTagName("alter")[0] == 'undefined') {
        alter = 0;
      }else {
        alter = parseInt(y[j].getElementsByTagName("alter")[0].childNodes[0].nodeValue);
      }
    }

    if(alter == 1){
      alteracion = "sharp";
    }
    if(alter == 0){
      alteracion = "";
    }
    if(typeof x[i].getElementsByTagName('chord')[0] == 'undefined'){
      tiempo = (tiempo + duration);
    }

    ejecutarCancion(i, step, octave, alteracion, tiempo, duration, tempo);
  }
  setTimeout(function() {
    desbloquearPiano();
    document.getElementById('btnReproducir').disabled = false;
    document.getElementById('tempo').disabled = false;
  }, tiempo / tempo);
}

function track2(xmlhttp) {
  //segunda pista de una misma cancionXML
  var step = "";
  var octave = 0;
  var notes = ["do", "re", "mi", "fa", "sol", "la", "si"];
  var americanKey = ["C","D","E","F","G","A","B"];
  var alter = 0;
  var duration = 0;
  var getNote = "asdf";
  var xmlDoc = xmlhttp.responseXML;
  var z = xmlDoc.getElementsByTagName("part");
  var m;
  var x;
  var y;
  var alteracion = "";
  var tiempo = 0;
  /////////////////////////////////////////////
  for (var i = 0; i < z.length; i++) {
    if (z[i].getAttribute('id') == "p1") {
      x = z[i].getElementsByTagName('note');
    }
  }
  ///////////////////////////////////////////////
  for (var i = 0; i < x.length; i++) {
    y = x[i].getElementsByTagName("pitch");
    if(i == 0 ){
      duration = 0;
    }else {
      duration = parseInt(x[i - 1].getElementsByTagName("duration")[0].childNodes[0].nodeValue);
    }

    for (var j = 0; j < y.length; j++) {
      step = y[j].getElementsByTagName("step")[0].childNodes[0].nodeValue;
      octave = y[j].getElementsByTagName("octave")[0].childNodes[0].nodeValue;
      if (typeof y[j].getElementsByTagName("alter")[0] == 'undefined') {
        alter = 0;
      }else {
        alter = parseInt(y[j].getElementsByTagName("alter")[0].childNodes[0].nodeValue);
      }
    }

    if(alter == 1){
      alteracion = "sharp";
    }
    if(alter == 0){
      alteracion = "";
    }
    if(typeof x[i].getElementsByTagName('chord')[0] == 'undefined'){
      tiempo = (tiempo + duration);
    }

    ejecutarCancion(i, step, octave, alteracion, tiempo, duration, tempo);
  }

  setTimeout(function() {
    desbloquearPiano();
    document.getElementById('btnReproducir').disabled = false;
    document.getElementById('tempo').disabled = false;
  }, tiempo / tempo);

}
  ////////////////////////////////////////////////////////////////////////////
var timenota;

function ejecutarCancion(i, step, octave, alteracion, tiempo, durationParsed, tempo) {
  if(octave < 1){
    octave = 1;
  }
  if(octave > 3 ){
    octave = 3;
  }
  var id = step + (octave-1) + alteracion;

  setTimeout(function () {
    toca(id);
    marcar(id);
    listenKey(id);
    setTimeout(function(){
      desmarcar(id);
    }, 200);
  }, tiempo / tempo);
}

function pararCancion() {
  for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
    }
    document.getElementById('btnReproducir').disabled = false;
    document.getElementById('tempo').disabled = false;
    var blancas = document.getElementsByClassName('key');
    var negras = document.getElementsByClassName('keyBlack');
    for (var i = 0; i < blancas.length; i++) {
      blancas[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < negras.length; i++) {
      negras[i].style.backgroundColor = "black";
    }
    desbloquearPiano();
}

function paraElisa() {
  bloquearPiano();
  mi3();
  setTimeout(function(){
    re3sharp();
  }, 300 / 1.2);
  setTimeout(function(){
    mi3();
  }, 600 / 1.2);
  setTimeout(function(){
    re3sharp();
  }, 900 / 1.2);
  setTimeout(function(){
    mi3();
  }, 1200 / 1.2);
  setTimeout(function(){
    si2();
  }, 1500 / 1.2);
  setTimeout(function(){
    re3();
  }, 1800 / 1.2);
  setTimeout(function(){
    do3();
  }, 2100 / 1.2);
  setTimeout(function(){
    la2();
  }, 2400 / 1.2);
  setTimeout(function(){
    la1();
  }, 2400 / 1.2);
  setTimeout(function(){
    do2();
  }, 2700 / 1.2);
  setTimeout(function(){
    mi2();
  }, 3000 / 1.2);
  setTimeout(function(){
    do2();
  }, 3300 / 1.2);
  setTimeout(function(){
    mi2();
  }, 3600 / 1.2);
  setTimeout(function(){
    la2();
  }, 3900 / 1.2);
  setTimeout(function(){
    si2();
  }, 4200 / 1.2);
  setTimeout(function(){
    mi1();
  }, 4200 / 1.2);
  setTimeout(function(){
    mi2();
  }, 4500 / 1.2);
  setTimeout(function(){
    sol2sharp();
  }, 4800 / 1.2);
  setTimeout(function(){
    mi2();
  }, 5100 / 1.2);
  setTimeout(function(){
    sol2sharp();
  }, 5400 / 1.2);
  setTimeout(function(){
    si2();
  }, 5700 / 1.2);
  setTimeout(function(){
    do3();
  }, 6000 / 1.2);
  setTimeout(function(){
    la1();
  }, 6000 / 1.2);
  setTimeout(function(){
    mi2();
  }, 6300 / 1.2);
  setTimeout(function(){
    la2();
  }, 6600 / 1.2);
  setTimeout(function(){
    mi2();
  }, 6900 / 1.2);
  setTimeout(function(){
    mi3();
  }, 7200 / 1.2);
  setTimeout(function(){
    re3sharp();
  }, 7500 / 1.2);
  setTimeout(function(){
    mi3();
  }, 7800 / 1.2);
  setTimeout(function(){
    re3sharp();
  }, 8100 / 1.2);
  setTimeout(function(){
    mi3();
  }, 8400 / 1.2);
  setTimeout(function(){
    si2();
  }, 8700 / 1.2);
  setTimeout(function(){
    re3();
  }, 9000 / 1.2);
  setTimeout(function(){
    do3();
  }, 9300 / 1.2);
  setTimeout(function(){
    la2();
  }, 9600 / 1.2);
  setTimeout(function(){
    la1();
  }, 9600 / 1.2);
  setTimeout(function(){
    mi2();
  }, 9900 / 1.2);
  setTimeout(function(){
    la2();
  }, 10200 / 1.2);
  setTimeout(function(){
    do2();
  }, 10500 / 1.2);
  setTimeout(function(){
    mi2();
  }, 10800 / 1.2);
  setTimeout(function(){
    la2();
  }, 11100 / 1.2);
  setTimeout(function(){
    mi1();
  }, 11400 / 1.2);
  setTimeout(function(){
    si2();
  }, 11400 / 1.2);
  setTimeout(function(){
    mi2();
  }, 11700 / 1.2);
  setTimeout(function(){
    sol2sharp();
  }, 12000 / 1.2);
  setTimeout(function(){
    mi2();
  }, 12300 / 1.2);
  setTimeout(function(){
    do3();
  }, 12600 / 1.2);
  setTimeout(function(){
    si2();
  }, 12900 / 1.2);
  setTimeout(function(){
    la1();
  }, 13200 / 1.2);
  setTimeout(function(){
    la2();
  }, 13200 / 1.2);
  setTimeout(function(){
    desbloquearPiano();
  }, 13500 / 1.2);
  //
}
/*
    LA PARTE DE LA PROGRAMACION DEL JUEGO
*/



function changeFrame(req) {
  var link;
  if (req === "demo-songs") {
    link = "frames/demos/index.html";
  }else{
    link = "frames/frame2.html";
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("principal").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("principal").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "frames/frame1.html", true);
  xhttp.send();
}

function entrenarOido() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("principal").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "frames/entrenar-oido.html", true);
  xhttp.send();
}

function contador() {
  document.getElementById('btnEntranarOidoGame').style.display = "none";
  document.getElementById("audioeffect").src = "media/sound/tick.wav";
  var effect = document.getElementById("audioeffect");
  document.getElementById('lasnotasseran').innerHTML = "Las notas serán tocadas en:";
  setTimeout(function() {
    document.getElementById('contador').innerHTML = "3";
    effect.pause();
    effect.currentTime = 0;
    effect.play();
  }, 1000);
  setTimeout(function() {
    document.getElementById('contador').innerHTML = "2";
    effect.pause();
    effect.currentTime = 0;
    effect.play();
  }, 2000);
  setTimeout(function() {
    document.getElementById('contador').innerHTML = "1";
    effect.pause();
    effect.currentTime = 0;
    effect.play();
  }, 3000);
  setTimeout(function() {
    document.getElementById('contador').innerHTML = "Vamos!";
  }, 4000);
  setTimeout(function() {
    entrenarOidoGame();
  }, 5000);

}

function entrenarOidoGame(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("principal").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "frames/entrenar-oido/stage1.html", true);
  xhttp.send();
  oidolvl1();
}

var teclaSonar;
var tocada;
var idTeclaSonar;
var correcto = false;
var oidoPerfecto = true;
var puntajeOidoPerfecto = 0;
var intentos = 5;
var puntos = 0;
var puntaje = 0;
var aciertoSeguido = 0;

function oidolvl1(){
  if(intentos > 0){
    intentos -= 1;
    var rangoNotas =  {
      n1: function(){do1();},
      n2: function(){re1();},
      n3: function() {mi1();},
      n4: function(){fa1();}
    };
    var randomNota = [];
    var numeros = ["1", "2", "3", "4"];

    for (var i = 0; i < numeros.length; i++) {
          randomNota[i] = numeros[Math.floor(Math.random()*numeros.length)];
    }
    var randomNumero = randomNota[Math.floor(Math.random()*randomNota.length)];
    bloquearPiano();
    rangoNotas["n" + randomNota[0]]();
    setTimeout(function() {
      rangoNotas["n" + randomNota[1]]();
    }, 1000);
    setTimeout(function() {
      rangoNotas["n" + randomNota[2]]();
    }, 2000);
    setTimeout(function() {
      rangoNotas["n" + randomNota[3]]();
    }, 3000);
    setTimeout(function() {
      document.getElementById('main-title').innerHTML = "Adivina La Nota";
    }, 4000);
    setTimeout(function() {

      if(randomNumero == "1"){
        var audio = document.getElementById("audioC1");
        teclaSonar = document.getElementById('C1').children[0].innerHTML;
        idTeclaSonar = document.getElementById('C1').id;
      }
      if(randomNumero == "2"){
        var audio = document.getElementById("audioD1");
        teclaSonar = document.getElementById('D1').children[0].innerHTML;
        idTeclaSonar = document.getElementById('D1').id;
      }
      if(randomNumero == "3"){
        var audio = document.getElementById("audioE1");
        teclaSonar = document.getElementById('E1').children[0].innerHTML;
        idTeclaSonar = document.getElementById('E1').id;
      }
      if(randomNumero == "4"){
        var audio = document.getElementById("audioF1");
        teclaSonar = document.getElementById('F1').children[0].innerHTML;
        idTeclaSonar = document.getElementById('F1').id;
      }
      desbloquearPiano();
    }, 4000);
    setTimeout(function() {
      document.getElementById("btnReplay").style.display = "block";
      document.getElementById("txtReplay").style.display = "block";

    }, 4000);
    setTimeout(function() {
      document.getElementById("teclado").onclick = compararNotas;
    }, 4000);
  }else{
    recuentolvl();
  }

}

function compararNotas() {
  tocada = document.getElementById("no-muestra-nota").innerHTML;
  if(teclaSonar == tocada){
    document.getElementById("main-title").innerHTML = "Correcto! ;)";
    puntajeOidoPerfecto = 80;
    puntos = 100;
    sumarPuntos(puntos);
    if(correcto){
      aciertoSeguido += 30;
    }
    correcto = true;
  }else{
    correcto = false;
    oidoPerfecto = false;
    document.getElementById("main-title").innerHTML = "Incorrecto! :(";
  }
  bloquearPiano();
  document.getElementById("btnReplay").style.display = "none";
  document.getElementById("txtReplay").style.display = "none";
  setTimeout(
    function () {
      oidolvl1();
    }, 2000);

}


function listenKey(id) {
    if(id === undefined){
      document.getElementById('muestra-nota').innerHTML = "";
    }else {
      var x = document.getElementById(id).children[0].innerHTML;
      document.getElementById('muestra-nota').innerHTML = x;
      document.getElementById('no-muestra-nota').innerHTML = x;
    }
}

function volveraSonar() {
  var audio = document.getElementById("audio"+idTeclaSonar);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
//suma puntos en la vista del juego con animación
function sumarPuntos(puntos) {
  for (var i = 0; i < puntos; i++) {
    vistaSumarPuntos(i);
  }
}

function vistaSumarPuntos(i) {
  setTimeout(function() {
    document.getElementById("puntaje").innerHTML = puntaje += 1;
  }, i+'0');
}

//Aca lleva a la vista y la logica de negocio del recuento del nivel o etapa
var totalNivel = 0;
function recuentolvl() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("principal").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "frames/recuento.html", true);
  xhttp.send();
  desbloquearPiano();
  paraElisa();
    recuentoPuntos();
    setTimeout(function () {
      recuentoAciertosSeguidos();
    }, puntaje);
    setTimeout(function () {
      recuentoOidoPerfecto();
    }, (puntaje + aciertoSeguido));
    setTimeout(function () {
      totalNivel = (puntaje + aciertoSeguido + puntajeOidoPerfecto);
      document.getElementById('total').style.fontSize = '60%';
      document.getElementById('total').innerHTML = totalNivel;
      for (var i = 60; i < 100; i++) {
        efectoTotal(i);
      }
    }, (puntaje + aciertoSeguido + puntajeOidoPerfecto));
}
//suma puntos en la vista Recuento del juego con animación
/////////////////////
function recuentoPuntos() {
  for (var i = 0; i < puntaje; i++) {
    vistaRecuentoPuntos(i);
  }
}
function vistaRecuentoPuntos(i) {
  setTimeout(function() {
    document.getElementById("recuento-puntos").innerHTML = i += 1;
  }, i);
}
/////////////////////
function recuentoAciertosSeguidos() {
  if (aciertoSeguido > 0) {
    for (var i = 0; i < aciertoSeguido; i++) {
      vistaRecuentoAciertosSeguidos(i);
    }
  }else {
    document.getElementById("recuento-puntos").innerHTML = 0;
  }
}
function vistaRecuentoAciertosSeguidos(i) {
  setTimeout(function() {
    document.getElementById("aciertos-seguidos").innerHTML = i += 1;
  }, i);
}
////////////////////////
function efectoTotal(i) {
  setTimeout(function () {
    document.getElementById('total').style.fontSize = (i += 1)+'%';
  }, i);
}
/////////////////////
function recuentoOidoPerfecto() {
  if(oidoPerfecto){
    for (var i = 0; i < puntajeOidoPerfecto; i++) {
      vistaRecuentoOidoPerfecto(i);
    }
  }else {
      document.getElementById("oido-perfecto").innerHTML = 0;
  }
}

function vistaRecuentoOidoPerfecto(i) {
  setTimeout(function() {
    document.getElementById("oido-perfecto").innerHTML = i += 1;
  }, i);
}

function modificarTempo(argument) {
  var cantidad = parseInt(document.getElementById('tempo').value);
  tempo = cantidad /60;
}

function addOptions() {
  for (var i = 20; i < 240; i++) {
    var select = document.getElementById("tempo");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
  }
}

/////////////////////
//Metodo para developers
/////////////////////
function metodoDePruebas() {
}
/////////////////////
//Carga la portada de la wev vista central
/////////////////////
loadDoc();
