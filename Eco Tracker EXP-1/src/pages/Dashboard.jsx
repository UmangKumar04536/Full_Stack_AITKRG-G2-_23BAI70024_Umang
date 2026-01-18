import logs from '../data/logs'
import Header from '../components/header'
import hcarbon from '../data/hcarbon'
import lcarbon from '../data/lcarbon'
const totalCarbon = logs.reduce ((sum, log) => sum+log.carbon,0)

const Dashboard = () => {
    return (
    
    <div >
        <h2>{Header}</h2>
        <p style={{padding :"1rem",backgroundColor:"#3175a2",color:"#d6eaf8",textAlign:"center"}}>Total Carbon Footprint:{totalCarbon}</p>

        <ul style={{padding :"1rem",backgroundColor:"white",color:"#111",textAlign:"center"}}>
            {logs.map((log)=>(
                <li key ={log.id}>
                    {log.activity}:{log.carbon} kgs
                </li>
            ))}
        </ul>
        <p style={{padding :"1rem",backgroundColor:"#3175a2",color:"#d6eaf8",textAlign:"center"}}>High carbon emission</p>
        <ul style={{padding :"1rem",backgroundColor:"#eab6a6",color:"#ff3c00",textAlign:"center"}}>
            {hcarbon.map((log)=>(
                <li key ={log.id}>
                    {log.activity}:{log.carbon} kgs
                </li>
            ))}
        </ul>

        <p style={{padding :"1rem",backgroundColor:"#3175a2",color:"#d6eaf8",textAlign:"center"}}>Low carbon emission</p>
        <ul style={{padding :"1rem",backgroundColor:"#c4f0d7",color:"#0bec6c",textAlign:"center"}}>
            {lcarbon.map((log)=>(
                <li key ={log.id}>
                    {log.activity}:{log.carbon} kgs
                </li>
            ))}
        </ul>
    </div>
    
)
}
export default Dashboard;