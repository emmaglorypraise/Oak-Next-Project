import ChartContainer from "../components/ChartContainer";
import TaskContainer from "../components/TaskContainer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ChartContainer />
        <TaskContainer/>
     </div>
    </div>
  );
}

export default Home;
