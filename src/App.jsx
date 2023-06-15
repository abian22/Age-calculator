import "./App.css"
import icon from "./assets/images/icon-arrow.svg"
import React, {useState, useEffect } from 'react';



function App() {

const [day, setDay] = useState([])
const [month, setMonth] = useState([])
const [year, setYear] = useState([])

 const ageCalc = () => {
  let today = new Date()
  console.log(today.getFullYear() - year)
  console.log(Math.round(today.getMonth() +1 - month))
  console.log(today.getDate() - day)
}

ageCalc()

const handleChange = () => {
  console.log(day, month, year)
}

useEffect(() => {
  handleChange()
}, [])

  return (
    <>
      <div className="card border-2 space-x-10 bg-white">
          <div className="inputText space-x-20 mt-8 flex flex-row ml-14">
            <div><b>DAY</b></div>
            <div><b>MONTH</b></div>
            <div><b>YEAR</b></div>
          </div>
        <div className="inputContainer space-x-6 mt-2 flex flex-row h-10">
          <input className="day w-24 flex flex-row border-2" placeholder=" DD" value={day} onChange={(e) => setDay(e.target.value)}></input>
          <input className="month w-24 flex flex-row border-2" placeholder=" MM " value={month} onChange={(e) => setMonth(e.target.value)}></input>
          <input className="year w-24 flex flex-row border-2" placeholder=" YYYY" value={year} onChange={(e) => setYear(e.target.value)}></input>
          </div>
          <div className="flex">
          <div className="border mt-10 w-96 h-0 flex" />
          <button className="bg-white border rounded-full border-none outline-none no-outline-button" onClick={() => handleChange()}>
          <img src={icon} className="icon mt-1 border rounded-full bg-[#854dff] p-3"/>
          </button>
          </div>
        <div className="ageCalc">
          <div className="flex text-black "><div className="dateOutput">- -</div>years</div>
          <div className="flex text-black"><div className="dateOutput">- -</div>months</div>
          <div className="flex text-black"><div className="dateOutput">- -</div>days</div>
        </div>
      </div>
    </>
  );
}

export default App;
