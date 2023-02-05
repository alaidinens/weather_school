const dateDiv = document.getElementById("time");

function myDateFunction() {
  const now = new Date();
  const nowStr = now.toLocaleString('lv-EU');
  dateDiv.innerHTML = nowStr;
}
setInterval(myDateFunction, 1000);
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
  xmlhttp.open("GET", URL, false);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
  xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
  xmlhttp.send(ItemJSON);
  alert(xmlhttp.responseText);
  document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

function callbackFunction(xmlhttp) 
{
    //alert(xmlhttp.responseXML);
}
