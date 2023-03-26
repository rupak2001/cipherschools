import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import InputBox from "./components/inputbox";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 flex flex-col justify-start items-center">
      <Header
        name="rupak biswas"
        email="rupak.rb2001@gmail.com"
        followers={0}
      />
      <InputBox height={24} />
      <hr className="my-8 w-11/12" />
      <div className="w-11/12">
        <CalendarHeatmap
        
          startDate={new Date("2016-01-01")}
          endDate={new Date("2016-04-01")}
          values={[
            { date: "2016-01-01", count: 12 },
            { date: "2016-01-22", count: 122 },
            { date: "2016-01-30", count: 38 },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
