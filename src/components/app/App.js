import { Component } from 'react';

import MainName from '../mainName/MainName';
import InputActivity from '../inputActivity/InputActivity';
import ResultList from '../resultList/ResultList';

import '../style/index.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {months: 'January 11', activity: 'run', distance: "5 km", time: '35 min', speed: '5 km/h', id: 1},
        {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h', id: 2},
        {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h', id: 3}

      ],
    }
    this.maxId = 4;
  }

  addItem = (starttime, finishtime, distance, activity) => {
    const finish = finishtime.split(':');
    const start = starttime.split(':');
    const time = Math.floor((finish[0], finish[1]) - (start[0],start[1]) ); 
    console.log(time);

    const speed = Math.floor(distance / time);

    const months_all = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
    const d = new Date();
    const months_name = months_all[d.getMonth()];
    const date = d.getDay();
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
          <ResultList data={this.state.data}/>
        </>  
      </div>
    );
 }
}

export default App;
