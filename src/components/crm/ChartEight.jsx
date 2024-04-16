import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ChartEight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [70, 20, 10],  
      options: {
        colors: ['#0fadcf', '#80CAEE', '#3c50e0'], 
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            customScale: 0.8  ,
          },
          donut:{
            size: '100%',
          }
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

export default ChartEight;

