import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartNine extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series-1',
          data: [238, 385, 201, 298, 187, 195, 291]
        }, {
          name: 'Series-2',
          data: [345, 160, 291, 187, 195, 298, 201]
        }],
        options: {
            colors: ["#3c50e0", "#8fd0ef"],
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: 6,
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
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
          fill: {
            opacity: 1
          },
         
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={250} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
  export default ChartNine;



  