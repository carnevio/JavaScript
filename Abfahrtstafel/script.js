var btn = document.getElementById("load");
btn.addEventListener("click", getTransfers);

async function getTransfers() {
    var input = document.getElementById("station");
    var response = await fetch("http://transport.opendata.ch/v1/stationboard?station=" + input.value);
    var data = await response.json();
    console.log(data);
    var table = document.getElementById("table");
    table.innerHTML = "";
    for (var i = 0; i < data.stationboard.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = data.stationboard[i].stop.departure;
        cell2.innerHTML = data.stationboard[i].to;
        cell3.innerHTML = data.stationboard[i].stop.platform;
    }
}

