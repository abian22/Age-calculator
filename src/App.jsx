import "./App.css";
import icon from "./assets/images/icon-arrow.svg";
import { useState } from "react";

function App() {
  const [userDay, setUserDay] = useState([]);
  const [userMonth, setUserMonth] = useState([]);
  const [userYear, setUserYear] = useState([]);
  const [daysCalc, setDayCalc] = useState("- -");
  const [monthCalc, setMonthCalc] = useState("- -");
  const [yearCalc, setYearCalc] = useState("- -");

  function ageCalc() {
    let today = new Date();
    let year = today.getFullYear();
    let month = Math.round(today.getMonth() + 1);
    let actualDay = today.getDate();
    let monthDays = new Date(userYear, userMonth, 0).getDate();
    let substractMonth = [];
    let substractDay = [];

    if (
      year < userYear ||
      userYear < 1907 ||
      userMonth < 1 ||
      userMonth > 12 ||
      userDay > monthDays ||
      userDay < 1
    ) {
        alert("error");
    } else if (yearCalc && monthCalc && daysCalc) {
        setYearCalc(year - userYear);
        substractMonth.push(month, parseInt(userMonth));
        substractMonth.sort(function (a, b) {
        return b - a;
      });
        setMonthCalc(substractMonth[0] - substractMonth[1]);
        substractDay.push(actualDay, parseInt(userDay));
        substractDay.sort(function (a, b) {
        return b - a;
      });
      setDayCalc(substractDay[0] - substractDay[1]);
    }
  }

  return (
    <>
      <div className="card border-2 space-x-10 bg-white">
        <div className="inputText space-x-20 mt-8 flex flex-row ml-14">
          <div>
            <b>DAY</b>
          </div>
          <div>
            <b>MONTH</b>
          </div>
          <div>
            <b>YEAR</b>
          </div>
        </div>
        <div className="inputContainer space-x-6 mt-2 flex flex-row h-10">
          <input
            className="day w-24 flex flex-row border-2"
            placeholder=" DD"
            value={userDay}
            onChange={(e) => setUserDay(e.target.value)}
          ></input>
          <input
            className="month w-24 flex flex-row border-2"
            placeholder=" MM "
            value={userMonth}
            onChange={(e) => setUserMonth(e.target.value)}
          ></input>
          <input
            className="year w-24 flex flex-row border-2"
            placeholder=" YYYY"
            value={userYear}
            onChange={(e) => setUserYear(e.target.value)}
          ></input>
        </div>
        <div className="flex">
          <div className="border mt-10 w-96 h-0 flex" />
          <button
            className="bg-white border rounded-full border-none outline-none no-outline-button"
            onClick={() => ageCalc()}
          >
            <img
              src={icon}
              className="icon mt-1 border rounded-full bg-[#854dff] p-3"
            />
          </button>
        </div>
        <div className="ageCalc">
          <div className="flex text-black ">
            <div className="dateOutput">{yearCalc}</div>years
          </div>
          <div className="flex text-black">
            <div className="dateOutput">{monthCalc}</div>months
          </div>
          <div className="flex text-black">
            <div className="dateOutput">{daysCalc}</div>days
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
