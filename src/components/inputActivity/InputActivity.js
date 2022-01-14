import {Component} from 'react';


import '../style/index.css';

class  InputActivity extends Component {
    constructor(props) {
        super(props)
        this.state={
            starttime: '',
            finishtime: '',
            distance: '',

        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.starttime, this.finishtime, this.state.distance);
        this.setState({
            starttime: '',
            finishtime: '',
            distance: '',
        })
    }


    render () {
        const {starttime, finishtime, distance} = this.state
        return (
            <section className="input_activity">
            <div className="input">
                <h3>Add new activity</h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                        className='start'
                        name='starttime'
                        type="time" 
                        value={starttime}
                        onChange={this.onValueChange}
                        />
                    <input 
                        className='finish'
                        name='finishtime'
                        type="time" 
                        value={finishtime}
                        onChange={this.onValueChange}
                        />
                    <input 
                        className='distance'
                        name='distance'
                        type="text" 
                        placeholder="Distance"
                        value={distance}
                        onChange={this.onValueChange}
                        />
                    <select className="select_activity">
                        <option selected>Select type of activity</option>
                        <option value="ride">Ride</option>
                        <option value="run">Run</option>
                    </select>
                    <button className="save"> Save </button>
                </form> 
            </div>  
        </section>   
        )
    }  
    
}

export default InputActivity;