import { ChartConfiguration } from "chart.js";

export const lineChartConfig: ChartConfiguration = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
          easing: 'easeInCubic'
        },
        elements: {
          point:{
              radius: 0
          }
      }
    }
}