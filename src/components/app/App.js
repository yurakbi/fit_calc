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
        {months: 'January 11', activity: 'run', distance: "5 km", time: '35 min', speed: '5 km/h'},
        {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h'},
        {months: 'January 12', activity: 'ride', distance: "10 km", time: '1 hour', speed: '10 km/h'}

      ],

    }
  }

  addItem = ({starttime, finishtime, distance, activity}) => {
    const newItem = {
      starttime,
      finishtime,
      distance,
      activity
     
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
          <ResultList data={data}/>
        </>  
      </div>
    );
 }
}

export default App;
