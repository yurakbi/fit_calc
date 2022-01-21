import { Component } from 'react';

import MainName from '../mainName/MainName';
import InputActivity from '../inputActivity/InputActivity';
import ResultList from '../resultList/ResultList';
import BestResult from '../bestResult/BestResult';

import '../style/index.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        // {months: 'January 11', activity: 'run', distance: "5 km", time: '35 min', speed: '5 km/h', id: 1},
        // {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h', id: 2},
        // {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h', id: 3}

      ],
    }
    this.maxId = 1;
  }

  addItem = (starttime, finishtime, distance, activity) => {
    
    const finish = finishtime.split(':');
    const start = starttime.split(':');
    const time_hour = Math.abs(Math.floor(finish[0] - start[0]));
    const time_min = Math.abs(Math.floor(finish[1] - start[1]));
    
    const time = time_hour + 'h ' + time_min + ' min';
    
    if (distance.length <= 0) {
      return distance
    }

    const speed = Math.round(distance / time_hour) + ' km/h';
    console.log(speed);

    const months_all = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
    const d = new Date();
    const months_name = months_all[d.getMonth()];
    const date = d.getDate();
    const months = months_name + date;
      
    const newItem = {
      months: months,
      activity: activity,
      distance: distance +' km',
      time:  time,
      speed: speed,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

 render () {
   const {data} = this.state;
    return (
      <div className="App">
        <>
          <MainName/>
          <InputActivity onAdd={this.addItem}/>
          <BestResult/>
          <ResultList data={this.state.data}/>
          
        </>  
      </div>
    );
 }
}

export default App;
