import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import "./Charts.css";

const options1 = {
  chart: {
      type: 'pie'
  },
  title: {
      text: 'Your portfolio'
  },
  plotOptions: {
      series: {
          dataLabels: {
              enabled: true,
              format: '{point.name}: {point.y:.1f}%'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  "series": [
      {
          "name": "Portfolio",
          innerSize: '70%',
          "colorByPoint": true,
          "data": [
              {
                  "name": "Income eREIT",
                  "y": 62.74,
                  "drilldown": "Income eREIT"
              },
              {
                  "name": "Growth eREIT",
                  "y": 10.57,
                  "drilldown": "Growth eREIT"
              },
              {
                  "name": "Income eREIT",
                  "y": 7.23,
                  "drilldown": "Income eREIT"
              },
              {
                  "name": "Heartland",
                  "y": 5.58,
                  "drilldown": "Heartland"
              },
              {
                  "name": "West Coast",
                  "y": 4.02,
                  "drilldown": "West Coast"
              },
              {
                  "name": "Los Angeles",
                  "y": 1.92,
                  "drilldown": "Opera"
              },
              {
                  "name": "National",
                  "y": 7.62,
                  "drilldown": null
              }
          ]
      }
  ],
  "drilldown": {
      "series": [
          {
              "name": "Chrome",
              "id": "Chrome",
              "data": [
                  [
                      "v65.0",
                      0.1
                  ],
                  [
                      "v64.0",
                      1.3
                  ],
                  [
                      "v63.0",
                      53.02
                  ],
                  [
                      "v62.0",
                      1.4
                  ],
                  [
                      "v61.0",
                      0.88
                  ],
                  [
                      "v60.0",
                      0.56
                  ],
                  [
                      "v59.0",
                      0.45
                  ],
                  [
                      "v58.0",
                      0.49
                  ],
                  [
                      "v57.0",
                      0.32
                  ],
                  [
                      "v56.0",
                      0.29
                  ],
                  [
                      "v55.0",
                      0.79
                  ],
                  [
                      "v54.0",
                      0.18
                  ],
                  [
                      "v51.0",
                      0.13
                  ],
                  [
                      "v49.0",
                      2.16
                  ],
                  [
                      "v48.0",
                      0.13
                  ],
                  [
                      "v47.0",
                      0.11
                  ],
                  [
                      "v43.0",
                      0.17
                  ],
                  [
                      "v29.0",
                      0.26
                  ]
              ]
          },
          {
              "name": "Firefox",
              "id": "Firefox",
              "data": [
                  [
                      "v58.0",
                      1.02
                  ],
                  [
                      "v57.0",
                      7.36
                  ],
                  [
                      "v56.0",
                      0.35
                  ],
                  [
                      "v55.0",
                      0.11
                  ],
                  [
                      "v54.0",
                      0.1
                  ],
                  [
                      "v52.0",
                      0.95
                  ],
                  [
                      "v51.0",
                      0.15
                  ],
                  [
                      "v50.0",
                      0.1
                  ],
                  [
                      "v48.0",
                      0.31
                  ],
                  [
                      "v47.0",
                      0.12
                  ]
              ]
          },
          {
              "name": "Internet Explorer",
              "id": "Internet Explorer",
              "data": [
                  [
                      "v11.0",
                      6.2
                  ],
                  [
                      "v10.0",
                      0.29
                  ],
                  [
                      "v9.0",
                      0.27
                  ],
                  [
                      "v8.0",
                      0.47
                  ]
              ]
          },
          {
              "name": "Safari",
              "id": "Safari",
              "data": [
                  [
                      "v11.0",
                      3.39
                  ],
                  [
                      "v10.1",
                      0.96
                  ],
                  [
                      "v10.0",
                      0.36
                  ],
                  [
                      "v9.1",
                      0.54
                  ],
                  [
                      "v9.0",
                      0.13
                  ],
                  [
                      "v5.1",
                      0.2
                  ]
              ]
          },
          {
              "name": "Edge",
              "id": "Edge",
              "data": [
                  [
                      "v16",
                      2.6
                  ],
                  [
                      "v15",
                      0.92
                  ],
                  [
                      "v14",
                      0.4
                  ],
                  [
                      "v13",
                      0.1
                  ]
              ]
          },
          {
              "name": "Opera",
              "id": "Opera",
              "data": [
                  [
                      "v50.0",
                      0.96
                  ],
                  [
                      "v49.0",
                      0.82
                  ],
                  [
                      "v12.1",
                      0.14
                  ]
              ]
          }
      ]
  }
}

class Charts extends Component {
  render() {
    return (
      <div className="scatter-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={options1}
        />
      </div>
    );
  }
}




export default Charts;
