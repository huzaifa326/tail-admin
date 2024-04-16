import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [ 
        {
          name: "Product-One",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },
        {
          name: "Product-Two",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        },
      ],
      options: {
        markers: {
          size: 4,
          colors: "white",
          strokeColors: ['#3c50e0', '#8fd0ef'],
          strokeWidth: 3,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
      },
        colors: ['#3c50e0', '#8fd0ef'],
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        xaxis: {
          format: 'MMM',
          categories: ['Sep', 'Oct', 'Nov', 'Dec',
            'Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug'
          ],
          labels: {
            style: {
              colors: '#AEB7C0'
            }
          }
        },
        yaxis: {
          min: 0 ,
          max: 100 ,
          labels: {
            style: {
              colors: '#AEB7C0'
            }
          }
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 250, 
              },
              plotOptions: {
                bar: {
                  columnWidth: 1,                 
                },
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartOne;
