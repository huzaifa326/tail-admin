import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartFive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series-1",
          data: [168, 385, 201, 298, 187, 195, 291],
        },
      ],
      options: {
        colors: ["#3c50e0"],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "bar",
        //   height: 650,
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
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
              plotOptions: {
                bar: {
                  columnWidth: 5,
                },
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            columnWidth: 8,
            horizontal: false,
            borderRadius: 0,
            dataLabels: {
              enabled: false,
            },
          },
        },
        xaxis: {
          format: "ddd",
          categories: ["M", "T", "W", "T", "F", "S", "S"],
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
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartFive;
