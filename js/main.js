document.addEventListener("DOMContentLoaded", init)

function init() {

    let categoriesLeft = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    let categoriesRight = ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 2'];

    let dataValuesLeft = [4.5, 1.9, 2.2, 4.7, 1.2, 4.7, 4.7, 1.9, 2.2, 4.7, 1.2, 4.7];

    let dataValuesRight = [90, 71, 22, 60, 22]


    let optionsLeft = {
        series: [{
            data: dataValuesLeft
        }],
        chart: {
            height: 220,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: ['#FF5733'],
        plotOptions: {
            bar: {
                columnWidth: '30%',
                distributed: true,
                borderRadius: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: categoriesLeft,
            labels: {
                style: {
                    colors: ['#616E85'],
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            min: 1,
            max: 5,
            tickAmount: 4,
            labels: {
                formatter: function (val) {
                    return val.toFixed(0);
                }
            }
        }
    };

    let optionsRight = {
        series: [{
            data: dataValuesRight
        }],
        chart: {
            height: 220,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: ['#5155C3', '#597DBE', '#5F99BB', '#65B8B7', '#6CDDB1'],
        plotOptions: {
            bar: {
                columnWidth: '65%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 12,
                height: 12,
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            }
        },
        xaxis: {
            categories: categoriesRight,
            labels: {
                style: {
                    colors: ['#616E85'],
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,
            labels: {
                formatter: function (val) {
                    return val.toFixed(0) + '%';
                }
            }
        }
    };

    let chartLeft = new ApexCharts(document.querySelector("#chart-left"), optionsLeft);
    chartLeft.render();
    let chartRight = new ApexCharts(document.querySelector("#chart-right"), optionsRight);
    chartRight.render();

}
