var aqicanvas1 = document.getElementById('aqichart1').getContext('2d');
var aqicanvas2 = document.getElementById('aqichart2').getContext('2d');
var aqicanvas3 = document.getElementById('aqichart3').getContext('2d');
var aqicanvas4 = document.getElementById('aqichart4').getContext('2d');
var aqicanvascomp = document.getElementById('aqichartcomp').getContext('2d');

function makePointer(value, chartid){
    if (value){
        document.getElementById(chartid).classList.add('mkcursor');
    } else {
        document.getElementById(chartid).classList.remove('mkcursor');
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var LabelsForAqi = [ 
    'PM2.5',
    'PM10',
    //'NO',
    'NO2',
    //'NOx',
    'CO',
    'SO2',
    'O3',
    'AQI'
];

var aqichart1 = new Chart(aqicanvas1, {
    type: 'bar',
    data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: LabelsForAqi,
        datasets: [
            // {
            //     label: 'Something', 
            //     data: [10, 20, 30, 12, 42, 10, 56, 65, 32],
            //     backgroundColor: getRandomColor(),
            //     borderWidth: 1,
            //     hoverBorderWidth: 2
            // }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Air Quality Index',
            fontSize: 24
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: 'rbga(0, 0, 0, 0.5)'
            },
            onHover: function(){makePointer(1, 'aqichart1');},
            onLeave: function(){makePointer(0, 'aqichart1');}
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 10,
        //         top: 10,
        //         bottom: 10
        //     }
        // },
        // tooltips: {
        // }
    }
});

var aqichart2 = new Chart(aqicanvas2, {
    type: 'bar',
    data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: LabelsForAqi,
        datasets: []
    },
    options: {
        title: {
            display: false,
            text: 'Air Quality Index',
            fontSize: 24
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: 'rbga(0, 0, 0, 0.5)'
            },
            onHover: function(){makePointer(1, 'aqichart2');},
            onLeave: function(){makePointer(0, 'aqichart2');}
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var aqichart3 = new Chart(aqicanvas3, {
    type: 'bar',
    data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: LabelsForAqi,
        datasets: []
    },
    options: {
        title: {
            display: false,
            text: 'Air Quality Index',
            fontSize: 24
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: 'rbga(0, 0, 0, 0.5)'
            },
            onHover: function(){makePointer(1, 'aqichart3');},
            onLeave: function(){makePointer(0, 'aqichart3');}
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var aqichart4 = new Chart(aqicanvas4, {
    type: 'bar',
    data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: LabelsForAqi,
        datasets: []
    },
    options: {
        title: {
            display: false,
            text: 'Air Quality Index',
            fontSize: 24
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: 'rbga(0, 0, 0, 0.5)'
            },
            onHover: function(){makePointer(1, 'aqichart4');},
            onLeave: function(){makePointer(0, 'aqichart4');}
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var aqichartcomp = new Chart(aqicanvascomp, {
    type: 'bar',
    data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: LabelsForAqi,
        datasets: []
    },
    options: {
        title: {
            display: false,
            text: 'Air Quality Index',
            fontSize: 24
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: 'rbga(0, 0, 0, 0.5)'
            },
            onHover: function(){makePointer(1, 'aqichart4');},
            onLeave: function(){makePointer(0, 'aqichart4');}
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


function addtoTable()
{
    
}

async function pushDataToBar(inpid){
    var inpf = document.getElementById('aqiinp'+inpid);
    var query = inpf.value;
    if(!query || query == '')
    {
        inpf.classList.add('is-invalid');
        return;
    }
    else{
        inpf.classList.remove('is-invalid');
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            console.log(data);
            var dataobj = data.data[0];
            var dataArr = [];
            dataArr.push(dataobj.pm25);
            dataArr.push(dataobj.pm10);
            //dataArr.push(dataobj.NO);
            dataArr.push(dataobj.no2);
            //dataArr.push(dataobj.NOx);
            dataArr.push(dataobj.co);
            dataArr.push(dataobj.so2);
            dataArr.push(dataobj.o3);
            dataArr.push(dataobj.aqi);
            var aqi_idx = dataobj.aqi;
            var aqi_bucket = 'NA';
            if(aqi_idx <= 50)
            {
                aqi_bucket = 'Good';
            }
            else if(aqi_idx <= 100)
            {
                aqi_bucket = 'Satisfactory';
            }
            else if(aqi_idx <= 150)
            {
                aqi_bucket = 'Moderate';
            }
            else if(aqi_idx <= 200)
            {
                aqi_bucket = 'Poor';
            }
            else if(aqi_idx <= 300)
            {
                aqi_bucket = 'VeryPoor';
            }
            else
            {
                aqi_bucket = 'Hazardous';
            }
            
            var randomcolor = getRandomColor();
            
            if(inpid == 1)
            {
                aqichart1.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichartcomp.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichart1.update();
                aqichartcomp.update();
            }
            else if(inpid == 2)
            {
                aqichart2.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichartcomp.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichart2.update();
                aqichartcomp.update();
            }
            else if(inpid == 3)
            {
                aqichart3.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichartcomp.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichart3.update();
                aqichartcomp.update();
            }
            else if(inpid == 4)
            {
                aqichart4.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichartcomp.data.datasets.push({
                    label: data.city_name, 
                    data: dataArr,
                    backgroundColor: randomcolor,
                    borderWidth: 1,
                    hoverBorderWidth: 2
                });
                aqichart4.update();
                aqichartcomp.update();
            }
        }
    };
    let path = `https://api.weatherbit.io/v2.0/current/airquality?postal_code=${query}&key=4e2ecb4fa34c4b8699cfe3f478f69818`;
    xhttp.open("GET", path, true);
    xhttp.send();
}

function popDataFromBar(btn, data_id){
    var index = -1;
    for(let i=0; i<myChart.data.datasets.length; i++)
    {
        if(myChart.data.datasets[i].label === data_id)
        {
            index = i;
            break
        }
    }
    if (index > -1) {
        myChart.data.datasets.splice(index, 1);
        myChart.update();
        CurrDataSets--;
        let accord_id = data_id.replace(' ', 'Accord');
        // console.log(accord_id);
        let accordionItem = document.getElementById(accord_id);
        document.getElementById('aqi_data_accord').removeChild(accordionItem);

        var parentOfButton = btn.parentElement;
        parentOfButton.removeChild(btn);
    }
}


$(document).ready(function() {
    //popDataFromBar(document.getElementById('tobedeleted'), 'Something');
    //pushDataToBar();
});