import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import '../style/index.css';

const InputActivity = () => {

    const [activity, setActivity] = useState();
    const [distance, setDistance] = useState();
    const [time, setTime] = useState();

    const onSubmitHundler = (e) => {
        e.preventDefault();

        const newActivity = {
            id: uuidv4(),
            dist: distance,
            time: time,
            currentDateTime: Date().toLocaleString(),
            activity: activity

        }

        setActivity('');
        setDistance('');
        setTime('');
    }

    return (
        <section className="input_activity">
            <div className="input">
                <h3>Add new activity</h3>
                <form onSubmit={onSubmitHundler}>
                    <input 
                        id="start" 
                        type="text" 
                        placeholder="Start time"/>
                    <input 
                        id="finish" 
                        type="text" 
                        placeholder="Finish time"/>
                    <input 
                        id="distance" 
                        type="text" 
                        placeholder="Distance"/>
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

export default InputActivity;