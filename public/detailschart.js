var reportchartcanvas = document.getElementById('reportchart').getContext('2d');

var reportChart = new Chart(reportchartcanvas, {
    type: 'line',
    data: {
        // labels: [1, 2, 3, 4, 5, 6],
        // datasets: [
        //     {
        //         label: 'line1',
        //         fill: false,
        //         backgroundColor: 'red',
        //         data: [12, 21, 42, 55, 21, 32]
        //     }
        // ]
    }
});


function addDetail(query, color)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            var dataobj = data.data;
            var dataArrPM25 = [];
            var dataArrPM10 = [];
            var dataArrNO2 = [];
            var dataArrCO = [];
            var dataArrSO2 = [];
            var dataArrO3 = [];
            var dataArrAQI = [];
            var dataArrAQIXY = [];
            //var dataArrTimeLables = [];
            let dtSet = new Set(reportChart.data.labels);
            for(let i=0; i<dataobj.length; i+=5)
            {
                dataArrAQI.push(dataobj[i].aqi);
                dataArrPM25.push(dataobj[i].pm25);
                dataArrPM10.push(dataobj[i].pm10);
                dataArrNO2.push(dataobj[i].no2);
                dataArrCO.push(dataobj[i].co);
                dataArrSO2.push(dataobj[i].so2);
                dataArrO3.push(dataobj[i].o3);
                // dataArrTimeLables.push(dataobj[i].timestamp_local);
                dtSet.add(dataobj[i].timestamp_local);
                dataArrAQIXY.push({x: dataobj[i].timestamp_local, y:dataobj[i].aqi});
            }
            //console.log(dataArrAQI, dataArrTimeLables);
            
            reportChart.data.labels = Array.from(dtSet).sort();
            reportChart.data.datasets.push({
                label: data.city_name,
                fill: false,
                backgroundColor: color,
                data: dataArrAQIXY
            });
            reportChart.update();
        }
    };
    let path = `https://api.weatherbit.io/v2.0/history/airquality?postal_code=${query}&key=4e2ecb4fa34c4b8699cfe3f478f69818`;
    xhttp.open("GET", path, true);
    xhttp.send();
}

//addDetail(384002, '#777');