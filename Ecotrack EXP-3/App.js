
import Header from "./components/header";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/login";
import Viewlogs from "./pages/Viewlogs";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardSummary from "./pages/DashboardSummary";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Logout from "./pages/logout";


function App (){
  return (
  <BrowserRouter>
    <Header title="Eco Track : Experiment 2 "/>
      <Routes>
        <Route path= "login" element={<Login/>}/>
        <Route path= "/" element=
        {
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
        }>

        <Route index />
        <Route path="Summary" element={<DashboardSummary/>}/>
        <Route path="Analytics" element={<DashboardAnalytics/>}/>
        <Route path="logs" element={<Viewlogs/>}/>

        

        </Route>
      </Routes>
      <Routes>
        <Route path="logout" element={<Logout/>}/>
      </Routes>
    
  </BrowserRouter>
)
}
export default App;

