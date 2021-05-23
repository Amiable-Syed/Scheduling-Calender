import './App.css';
import DayRows from "./calender/DayRows";
import HeaderRow from "./calender/HeaderRow";
import HoursRows from "./calender/HoursRows";
const days = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]
const hours=[
  "1-3",
  "4-6",
  "7-9",
  "10-12",
  "13-15",
  "16-18",
  "19-21",
  "22-24"
]
function App() {
  return (
    <div className="App p-6 items-center flex justify-start">
       <div className="flex flex-col w-1/5">
          {days.map((item,idx)=>
            <DayRows check={item && true} day={item} key={`d${idx}`}/>   
          )}
       </div>
       <div className="flex flex-col w-9/12 border">
          <div class="flex flex-row">
              {hours.map((item,index)=>(
                  <HeaderRow header={item} key={`h${index}`}/>
              ))}
          </div>
          {days.map((item,idx)=>{
            return (<div className="flex flex-row" key={`dh${idx}`}>
                     { [...Array(24)].map((value, index) => (
                      item && <HoursRows key={index}/> 
                    ))}
                    </div>
            )


            
          })}
       </div>
    </div>
  );
}

export default App;