import ResultSection from '../resultSection/ResultSection';
import '../style/index.css';

const ResultList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ResultSection
               key={id}
               {...itemProps} />
        )
    })

    return(
        <ul className='result'>
            {elements}
        </ul>
    )
    
}

export default ResultList;