import { Component } from 'react';

import MainName from '../mainName/MainName';
import InputActivity from '../inputActivity/InputActivity';
import ResultSection from '../resultSection/ResultSection';

import '../style/index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {starttime: '11:50', finishtime: '12:50', distance: "5 km", time: '35 min', speed: '5 km/h'}
      ],

    }
  }

  addItem = (starttime, finishtime, distance) => {
    const newItem = {
      starttime,
      finishtime,
      distance,
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
          <ResultSection data={data}/>
        </>  
      </div>
    );
 }
}

export default App;
