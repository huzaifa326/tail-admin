import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartSeven extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [ 
        {
          name: "Product-One",
          data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
        },
        {
          name: "Product-Two",
          data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
        },
      ],
      options: {
       
        colors: ['#3c50e0', '#C7D2E2'],
        chart: {
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
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
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 300
            }
            
          }
        }],
        yaxis: {
          min: 0 ,
          max: 100 ,
          stepSize: 20,
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
            height={320}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartSeven;
