import SVGDelete from "../../shared/icons/SVGDelete"
import SVGEdit from "../../shared/icons/SVGEdit"
import Table from "../../shared/tables/Table"

const HomeTable = ({ tasks, setTaskId, taskId, setTasks }) => {

    const headers = ["id,1", "Responsable,3", "Descripción,4", "Opciones,2"]

    const deleteTask = id => {
        const result = tasks.filter(task => task.id !== id)
        setTasks(result)
    }

    return (
        <Table headers={headers}>
            {
                tasks.length > 0 &&
                tasks.map(task => (
                    <tr key={task.id}>
                        <th className="table__row__1">{task.id}</th>
                        <td className="table__row__3">{task.responsable}</td>
                        <td className="table__row__4">{task.description}</td>
                        <td className="table__row__2">
                            <div>
                                <span onClick={() => setTaskId(task.id)}>
                                    <SVGEdit size={15} color={(taskId && task.id === taskId) ? "#80a842" : undefined} />
                                </span>
                                <span onClick={() => deleteTask(task.id)} className={taskId && "d-none"}>
                                    <SVGDelete size={23} color="crimson" />
                                </span>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </Table>
    )
}

export default HomeTable
