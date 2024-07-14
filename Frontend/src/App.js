import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './Pages/web_pages/ErrorsPages/PageNotFound';
import Home from './Pages/web_pages/Home';
import ToastContainers from './Services/ToastContainer';
import Login from './Pages/web_pages/Login';
// import AdminLogin from './Pages/admin_pages/AdminLogin';
import { useContext } from 'react';
import { Store } from './Services/Store';
import Dashboard from './Pages/admin_pages/Dashboard';
import Ideas from './Pages/admin_pages/Ideas';
import Contracts from './Pages/admin_pages/Contracts';
import Main from './Pages/web_pages/Main';
import MainAdmin from './Pages/admin_pages/Main';
import About from './Pages/web_pages/About';
import Services from './Pages/web_pages/Services';
import Registration from './Pages/web_pages/Registration';
import Add_Ideas from './Pages/admin_pages/Add_Ideas';
import Add_Contracts from './Pages/admin_pages/Add_contract';
import Ideas_details from './Pages/admin_pages/Idea_details';
import SkilledPerson from './Pages/admin_pages/SkilledPerson';
import Gigs from './Pages/admin_pages/Gigs';
import Add_Gigs from './Pages/admin_pages/Add_gigs';
import All_Ideas from './Pages/admin_pages/All_Ideas_contract';
import Enterprenuer from './Pages/admin_pages/Enterprenuer';
import Investor from './Pages/admin_pages/Investor';
import Skilled_Person from './Pages/admin_pages/Skilled_users';
import All_Contracts from './Pages/admin_pages/All_Contract';
import Edit_Gigs from './Pages/admin_pages/Edit_Gig';
import ProjectTracking from './Pages/admin_pages/Project_Tracking';
import Add_Project_tracking from './Pages/admin_pages/Add_project_tracking';
import UpdateTracking from './Pages/admin_pages/UpdateTracking';
function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Navbar */}

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Main header="Home"><Home /></Main>} />
          <Route path='/about' element={<Main header="About"><About /></Main>} />
          <Route path='/services' element={<Main header="Services"><Services /></Main>} />
          <Route path='/login' element={<Main header="Login"><Login /></Main>} />
          <Route path='/signup' element={<Main header="Registration"><Registration /></Main>} />
          <Route path='*' element={<PageNotFound />} />

          {/* Admin Routes */}
          {/* <Route path='/admin' element={<AdminLogin/>} />    */}
          <Route path='/admin/dashboard' element={<Dashboard><MainAdmin /></Dashboard>} />

          <Route path='/admin/ideas' element={<Dashboard><Ideas /></Dashboard>} />
          <Route path='/admin/add/ideas' element={<Dashboard><Add_Ideas /></Dashboard>} />
          <Route path='/admin/ideas/details' element={<Dashboard><Ideas_details /></Dashboard>} />


          <Route path='/admin/contracts' element={<Dashboard><Contracts /></Dashboard>} />
          <Route path='/admin/add/contracts/:id' element={<Dashboard><Add_Contracts /></Dashboard>} />

          <Route path='/admin/skilled_person' element={<Dashboard><SkilledPerson /></Dashboard>} />
          <Route path='/admin/gigs' element={<Dashboard><Gigs /></Dashboard>} />
          <Route path='/admin/add/gigs' element={<Dashboard><Add_Gigs /></Dashboard>} />
          <Route path='/admin/edit/gig' element={<Dashboard><Edit_Gigs /></Dashboard>} />


          {/* INVESTOR */}
          <Route path='/admin/all/ideas' element={<Dashboard><All_Ideas /></Dashboard>} />
          <Route path='/admin/contract/tracking' element={<Dashboard><ProjectTracking /></Dashboard>} />
          <Route path='/admin/add/contract/tracking' element={<Dashboard><Add_Project_tracking /></Dashboard>} />
          <Route path='/admin/update/contract/tracking' element={<Dashboard><UpdateTracking /></Dashboard>} />


          {/* ADMIN */}
          <Route path='/admin/all/enterprenuer' element={<Dashboard><Enterprenuer /></Dashboard>} />
          <Route path='/admin/all/investor' element={<Dashboard><Investor /></Dashboard>} />
          <Route path='/admin/all/Skilled_Person' element={<Dashboard><Skilled_Person /></Dashboard>} />
          <Route path='/admin/all/contracts' element={<Dashboard><All_Contracts /></Dashboard>} />



        </Routes>

        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
