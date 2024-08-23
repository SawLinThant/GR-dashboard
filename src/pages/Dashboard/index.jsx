import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../../modules/common/components/sidebar";
import { FaCircleUser } from "react-icons/fa6";
import UserList from "../../modules/user-lists";
import CreateUser from "../../modules/user-lists/create-user-form";
import { useEffect,useState } from "react";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
import CustomerDetail from "./customerDetail/[customerId]";

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    const loadData = async () => {
      nProgress.configure({
           parent: '#progress-bar-container',
             showSpinner: true
           });
      nProgress.start();
      nProgress.done();
    };

    loadData();
  }, [location]);

  const startProgress = () => nProgress.start();
  const stopProgress = () => nProgress.done();

    return(
        <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="flex-1 flex-col h-screen ml-[17vw] w-dashboard-main-content overflow-auto pl-5 pb-5">
          <div  className="w-full h-24 border-b border-gray-500 p-2 bg-gray-100 fixed z-10">
            <div className="w-full h-full flex flex-row items-center justify-between">
              <div className="h-full flex items-center justify-center text-purple-900">
                <h2 className="text-3xl font-bold">Dashboard</h2>
              </div>
              <div className="h-full flex flex-row items-center">
                <div></div>
                <div className="w-14 h-14 rounded-full border border-purple-900 flex items-center justify-center">
                  <FaCircleUser color="purple" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div id="progress-bar-container" className="flex-1 mt-[6rem] h-[calc(100% - 6rem)] overflow-y-auto w-full bg-white relative">
            <Routes>
              <Route path="*" element={<UserList/>} />
              <Route path="customerlists/createcustomer" element={<CreateUser />} />
              <Route path="customerlists/customerdetail/:customerId" element={<CustomerDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    )
}

export default Dashboard;