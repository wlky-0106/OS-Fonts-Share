window.onload = function() {
    let url = "main.json";
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if (request.status === 200) {
            updateTable(request.responseText); 
        }
    };
    request.send(null);
}

function updateTable(responseText) {
    let undisposed=document.getElementById('data');
    let columnDatas = JSON.parse(responseText);
    let tbody = document.createElement("tbody");
    for (var i = 0; i < columnDatas.length; i++) {
        tbody.innerHTML+=  '</td><td>' + columnDatas[i].ID + "</td><td>" + columnDatas[i].Name + '</td><td>' + columnDatas[i].country + '</td><td>' + columnDatas[i].type + '</td><td><div class=\"btn btn-outline-success btn-sm\" type=\"submit\">' + columnDatas[i].button + '</div></td><td><div class=\"btn btn-outline-success btn-sm\" type=\"submit\">' + columnDatas[i].button_down1 + '</div></td><td><span class=\"badge bg-success\">' + columnDatas[i].License + '</span></td><td>' + columnDatas[i].other + '</td></tr>';
        undisposed.appendChild(tbody);

    }

}
