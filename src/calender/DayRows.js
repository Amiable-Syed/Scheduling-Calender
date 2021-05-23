import React from 'react';
import { Checkbox } from '@material-ui/core';

const DayRows = (props) => {
    return (
        <div className="flex flex-row">
            <div className="border h-12 w-1/4">
               {props.check?
                    <Checkbox
                        checked={true}
                        onChange={()=>{console.log("Clicked")}}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                :
                ""}
            </div>
    
            <div className="border h-12 w-2/4 text-left font-bold flex items-center">
               {props.day}
            </div>
        </div>
    );
};

export default DayRows;