import React from 'react';

const Rank = ({name, enteries}) => {
    return (
        <div>
            <div className='f5 center'>{`Hellooo ${name}, your current rank is`}</div>
            <div className='f2 center'>{`#${enteries}`}</div>
        </div>
    )
}

export default Rank;