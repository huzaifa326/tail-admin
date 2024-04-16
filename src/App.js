import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ecommerce from './components/ecommerce/Ecommerce';
import Analytics from './components/analytics/Analytics';
import Marketing from './components/marketing/Marketing';
import CRM from './components/crm/CRM';
import Calender from './components/Calender';
import Profile from './components/Profile';
import './index.css';
import Tables from "./components/tablepages/Tables";
import ProTables from "./components/tablepages/ProTables";
import Error from "./components/pagesfolder/Error";
import Mail from "./components/pagesfolder/Mail";
import Faqs from "./components/pagesfolder/Faqs";
import TermsCondition from "./components/pagesfolder/TermsCondition";
import Team from "./components/pagesfolder/Team";
import Pricing from "./components/pagesfolder/Pricing";
import DataTables from "./components/pagesfolder/DataTables";
import Setting from "./components/pagesfolder/Setting";
import FileManager from "./components/pagesfolder/FileManager";
import Stocks from "./components/stocks/Stocks";
import FormElement from "./components/forms/FormElement";
import ProFormElement from "./components/forms/ProFormElement";
import FormLayout from "./components/forms/FormLayout";
import ProFormLayout from "./components/forms/ProFormLayout";
import Messages from "./components/support/Messages";
import Inbox from "./components/support/Inbox";
import Invoice from "./components/support/Invoice";
import BasicChart from "./components/charts/BasicChart";
import AdvancedChart from "./components/charts/AdvancedChart";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import ResetPass from "./components/authentication/ResetPass";
import CommingSoon from "./components/authentication/CommingSoon";
import Varfication from "./components/authentication/Varfication";
import Maintenance from "./components/authentication/Maintenance";
import List from "./components/task/List";
import Kanban from "./components/task/Kanban";
import PricingPage from './components/pricing/PricingPage';

function App() {

  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/analytics" element={<Analytics />} /> 
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/stocks" element={<Stocks/>} />

        <Route path="/calender" element={<Calender />} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/list" element={<List/>} />
        <Route path="/kanban" element={<Kanban/>} />
 
        <Route path="/formelement" element={<FormElement/>} />
        <Route path="/proformelement" element={<ProFormElement/>} />
        <Route path="/formlayout" element={<FormLayout/>} />
        <Route path="/proformlayout" element={<ProFormLayout/>} />
        
        <Route path="/tables" element={<Tables/>} />
        <Route path="/protables" element={<ProTables/>} />
         
        <Route path="/setting" element={<Setting/> } />        
        <Route path="/filemanager" element={<FileManager/>} />        
        <Route path="/datatables" element={<DataTables/> } />        
        <Route path="/pricingtable" element={<Pricing/> } />
        <Route path="/error" element={<Error/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/termscondition" element={<TermsCondition/>} />
        <Route path="/mail" element={<Mail/>} />

        <Route path="/messages" element={<Messages/>} />
        <Route path="/inbox" element={<Inbox/>} />
        <Route path="/invoice" element={<Invoice/>} />
    
        <Route path="/basicchart" element={<BasicChart/>} />
        <Route path="/advancedchart" element={<AdvancedChart/>} />
       
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/resetpassword" element={<ResetPass/>} />
        <Route path="/commingsoon" element={<CommingSoon/>} />
        <Route path="/twostepvarification" element={<Varfication/>} />
        <Route path="/undermaintenance" element={<Maintenance/>} />

        <Route path="/pricing-page" element={<PricingPage/>} />
        
      </Routes>
    </Router>
  </>
  );
}

export default App;
