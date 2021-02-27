import "./css/App.css";
import React, { Component } from "react";

import { BryntumScheduler } from "bryntum-react-shared";

let resources, events;
class App extends Component {
  events = [
    {
      id: 1,
      resourceId: 1,
      name: "Fight crime",
      startDate: new Date(2018, 4, 1, 9),
      endDate: new Date(2018, 4, 1, 17),
    },
    {
      id: 2,
      resourceId: 1,
      name: "Attend banquet",
      startDate: new Date(2018, 4, 1, 11),
      endDate: new Date(2018, 4, 1, 23),
    },
    {
      id: 3,
      resourceId: 2,
      name: "Drink beer",
      startDate: new Date(2018, 4, 1, 9),
      duration: 8,
      durationUnit: "hour",
    },
    {
      id: 4,
      resourceId: 4,
      name: "Drink beer",
      startDate: new Date(2018, 4, 1, 13),
      duration: 8,
      durationUnit: "hour",
    },
  ];
  resources = [
    { id: 1, name: "Batman" },
    { id: 2, name: "Wolverine1" },
    { id: 3, name: "Wolverine2" },
    { id: 4, name: "Wolverine3" },
  ];

  render() {
    console.log(this.resources);
    return (
      <>
        
        <BryntumScheduler
          resources={this.resources}
          events={this.events}
          startDate={new Date(2018, 4, 1, 1)}
          endDate={new Date(2018, 4, 1, 20)}
          viewPreset="hourAndDay"
          rowHeight={50}
          barHeight={5}
          columns={[
            { text: "MyCol1", field: "name", width: 150 }
          ]}
        />
      </>
    );
  }
}

export default App;
