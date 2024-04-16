import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [44, 55, 41, 67, 22, 43, 65],
        },
        {
          name: "Revenue",
          data: [13, 23, 20, 8, 13, 27, 15],
        },
      ],
      options: {
        colors: ["#3c50e0", "#8fd0ef"],
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
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
              plotOptions: {
                bar: {
                  columnWidth: 6,
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
          max: 100,
          stepSize: 20,
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

export default ChartTwo;
