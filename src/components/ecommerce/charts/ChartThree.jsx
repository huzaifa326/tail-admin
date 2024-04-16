import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ChartThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [65, 34, 45, 12],  
      labels: ['Asdlkkdlskldskldsklsd', 'B', 'C', 'D'],
      options: {
        colors: ['#3c50e0', '#6577f3', '#8fd0ef', '#0fadcf'],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'donut',
        },
       
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false,             
              position: 'bottom',
            },
            toolbar: {
              show: false
            },
            
          }
        }]
      },
    
    
    };
  }

  render() {
    return (
      <div className=''>
        <div id="chart">
          <ReactApexChart className="mx-auto" options={this.state.options} series={this.state.series} type="donut" />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartThree;

