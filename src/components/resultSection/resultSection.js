
import '../style/index.css';

const ResultSection = (props) => {
    const {months, activity, distance, time, speed} = props;
    return (
            <li className="result">
                <div className="day_result">
                    <div className="month_day">{months}</div>
                    <div className="type_activity">{activity}</div>
                    <div className="distance">{distance}</div>
                    <div className="time"> {time}</div>
                    <div className="speed"> {speed}</div>
                </div>
            </li>
    )
}

export default ResultSection;