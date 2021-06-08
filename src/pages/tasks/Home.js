import { useState, useEffect } from "react";
import HomeForm from "./components/HomeForm";
import HomeTable from "./components/HomeTable";
const { REACT_APP_API } = process.env;

const Home = () => {
  /* estado que representa las tareas existentes */
  const [tasks, setTasks] = useState([]);

  /* estado que representa el id de la tarea seleccionada para editar */
  const [taskId, setTaskId] = useState(null);

  const getTasks = async () => {
    try {
      const res = await fetch(`${REACT_APP_API}/tasks`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main className="main">
      <div className="main__form">
        <HomeForm {...{ tasks, setTasks, taskId, setTaskId }} getTasks={getTasks} />
      </div>

      <div className="main__table">
        <HomeTable {...{ tasks, setTasks, taskId, setTaskId }} getTasks={getTasks} />
      </div>
    </main>
  );
};

export default Home;
