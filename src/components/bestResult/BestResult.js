

import '../style/index.css'; 

const BestResult = ({data}) => {
    console.log(data);
    const ride_activity = data.filter(item => item.activity === 'Ride');
    // const best_ride = ride_activity.find(elem => {
    return(
        <div className='result_best'>
            <div className="longest">
            <div className="longest_ride">
                <h3>Longest ride</h3>
                <div className="longest_ride_text">
                    <div className="longest_ride_day">{}</div>
                    <div className="longest_ride_distance">{}</div>
                    <div className="longest_ride_time">{}</div>
                </div>
            </div>
            <div className="longest_run">
                <h3>Longest run</h3>
                <div className="longest_run_text">
                    <div className="longest_run_day">Sep 11</div>
                    <div className="longest_run_distance">10km</div>
                    <div className="longest_run_time">30m</div>
                </div>
            </div>
            </div>
            <div className="total">
                <div className="total_ride_distance">
                    <h4>Total ride distance:</h4>
                    <div className="total_ride"> 25.2 km</div>
                </div>
                <div className="total_run_distance">
                    <h4>Total run distance:</h4>
                    <div className="total_run">12.4 km</div>
                </div>
            </div>
        </div>
        
    )
    
}

export default BestResult;
