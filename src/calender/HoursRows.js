import React,{useState} from 'react';

const HoursRows = () => {
    const [clicked, setClicked] = useState(false);

    const onClickHandler=()=>{
        setClicked(!clicked)
    }
    return (
        <div  onClick={onClickHandler} className={`flex justify-center items-center font-bold border h-12 w-12 ${clicked?"bg-yellow-600":""}`}>
            
        </div>
    );
};

export default HoursRows;