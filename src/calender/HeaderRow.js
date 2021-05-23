import React from 'react';

const HeaderRow = (props) => {
    return (
        <div  className="flex justify-center items-center font-bold border h-12 w-32">
           {props.header} 
        </div>
    );
};

export default HeaderRow;