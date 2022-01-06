
import '../style/index.css';

const ResultSection = () => {

    return (
        <section className="result">
            <div className="day_result">
                <div class="month_day">December 11</div>
                <div className="type_activity">Run</div>
                <div className="distance">1 km</div>
                <div className="time"> 35 minutes</div>
                <div className="speed"> 3.5 km/hour</div>
            </div>
            <div className="longest">
                <div className="longest_ride">
                    <h3>Longest ride</h3>
                    <div className="longest_ride_text">
                        <div className="longest_ride_day">Oct 23</div>
                        <div className="longest_ride_distance">25km</div>
                        <div className="longest_ride_time">1h 40m</div>
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
        </section>
    )
}

export default ResultSection;