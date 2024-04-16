import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series-1",
          data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123,212,270,190,310,115,90,380,112,223,292,170,290,110,115,290,380,312],
        },
      ],
      options: {
        colors: ["#3c50e0"],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "bar",
          // height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: 5,
                },
              },
            },
          },
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
              plotOptions: {
                bar: {
                  columnWidth: 1,
                },
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            columnWidth: 12,
            horizontal: false,
            borderRadius: 3,
            dataLabels: {
              enabled: false,
            },
          },
        },
        xaxis: {
          format: "ddd",
          categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          labels: {
            style: {
              colors: '#AEB7C0'
            }
          }
        },
        yaxis: {
          min: 0,
          max: 400,
          stepSize: 100,
          labels: {
            style: {
              colors: '#AEB7C0'
            }
          }
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
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
            type="bar"
            height={300}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartFour;
