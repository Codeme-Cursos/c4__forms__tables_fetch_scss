import { useState } from 'react';
import HomeForm from '../../components/pages/home/HomeForm';
import HomeTable from '../../components/pages/home/HomeTable';

const Home = () => {

    const [tasks, setTasks] = useState([
        { id: 1, responsable: "Limpiar", description: "zona 1" },
        { id: 2, responsable: "Cocinar", description: "zona 2" }
    ])

    const [taskId, setTaskId] = useState(null)

    return (
        <main className="main">

            <div className="main__form">
                <HomeForm {...{ tasks, setTasks, taskId, setTaskId }} />
            </div>

            <div className="main__table">
                <HomeTable {...{ tasks, setTasks, taskId, setTaskId }} />
            </div>

        </main>
    )
}

export default Home
