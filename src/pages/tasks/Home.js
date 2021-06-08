import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import HomeForm from "./components/HomeForm";
import HomeTable from "./components/HomeTable";
const { REACT_APP_API } = process.env;

const Home = () => {
  /* estado que representa las tareas existentes */
  const [tasks, setTasks] = useState([]);

  /* estado que representa el id de la tarea seleccionada para editar */
  const [taskId, setTaskId] = useState(null);

  /* estado que representa las tareas existentes */
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${REACT_APP_API}/tasks`);
      const data = await res.json();
      setTasks(data);
      setIsLoading(false);
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
        <HomeForm
          {...{ tasks, setTasks, taskId, setTaskId }}
          getTasks={getTasks}
        />
      </div>

      <div className="main__table">
        {
            isLoading ? (
                <Loader />
            ) : (
                <HomeTable
                {...{ tasks, setTasks, taskId, setTaskId }}
                getTasks={getTasks}
              />
            )
        }
      </div>
    </main>
  );
};

export default Home;
