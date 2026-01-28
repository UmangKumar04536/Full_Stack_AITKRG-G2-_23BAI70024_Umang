import logs from "../data/logs";

const Viewlogs = () => {
    return (
        <div>
            <h2>Experiment Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={log.id}>
                    {log.activity}: {log.carbon} kg CO2
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Viewlogs;