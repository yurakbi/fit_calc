
import '../style/index.css'; 

const BestResult = ({data}) => {
    const ride_activity = data.filter(item => item.activity === 'Ride');
 
    let max_ride = ride_activity.reduce((prev, cur) => { return (prev.distance > cur.distance) ? prev : cur});
 
    let total_ride = ride_activity.map((prev, cur) => parseInt(prev.distance + cur.distance));

    let sum_total = total_ride.reduce((prev, cur) => prev + cur);


    const run_activity = data.filter(item => item.activity === 'Run');

    let total_run = run_activity.map((prev, cur) => parseInt(prev.distance + cur.distance));
    let sum_total_run = total_run.reduce((prev, cur) => prev + cur);

    let max_run = run_activity.reduce((prev, cur) => { return (prev.distance > cur.distance) ? prev : cur});
    console.log(max_run);

    

    return(
        <div className='result_best'>
            <div className="longest">
            <div className="longest_ride">
                <h3>Longest ride</h3>
                <div className="longest_ride_text">
                    <div className="longest_ride_day">{max_ride.months}</div>
                    <div className="longest_ride_distance">{max_ride.distance}</div>
                    <div className="longest_ride_time">{max_ride.time}</div>
                </div>
            </div> 
                <div className="longest_run">
                    <h3>Longest run</h3>
                    <div className="longest_run_text">
                        <div className="longest_run_day" >{max_run.months}</div>
                        <div className="longest_run_distance">{max_run.distance}</div>
                        <div className="longest_run_time">{max_run.time}</div>
                    </div>
                </div>      
            </div>
            <div className="total">
                <div className="total_ride_distance">
                    <h4>Total ride distance:</h4>
                    <div className="total_ride"> {sum_total + ' km'}</div>
                </div>
                <div className="total_run_distance">
                    <h4>Total run distance:</h4>
                    <div className="total_run">{sum_total_run + ' km'}</div>
                </div>
            </div>
        </div>
        
    )
    
}

export default BestResult;
