import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartTen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Media',
          data: [268, 385, 201, 298, 187, 195, 291]
        }, {
          name: 'Photos',
          data: [345, 160, 291, 187, 195, 298, 201]
        },  {
            name: 'Docs',
            data: [195, 260, 191, 258, 265, 160, 213]
          }],
        options: {
            colors: ["#3c50e0", "#13C296", '#F2994A'],
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: 8,
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
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
  export default ChartTen;



  