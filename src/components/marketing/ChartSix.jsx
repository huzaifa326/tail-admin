import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartSix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [ 
        {
          name: "Product-One",
          data: [168, 285, 131, 248, 187, 295, 191, 269, 201, 185, 252, 151],
        },
        {
          name: "Product-Two",
          data: [268, 185, 251, 198, 287, 205, 281, 199, 259, 185, 150, 111],
        },
      ],
      options: {
       
        colors: ['#10b981', '#3c50e0'],
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
        yaxis: {
          min: 100 ,
          max: 350 ,
          stepSize: 50,
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
         <style>
          {`
            .apexcharts-area-series path {
              stroke-width: 2px !important;
            }
          `}
        </style>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={200}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartSix;
