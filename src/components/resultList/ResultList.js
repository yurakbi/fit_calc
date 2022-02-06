import ResultSection from '../resultSection/resultSection';
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
        <ul className='result-list'>
            {elements}
        </ul>
    )
    
}

export default ResultList;