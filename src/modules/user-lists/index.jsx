import { useState } from "react"
import CustomTable from "../common/components/custom-table"
import { userColumn } from "../common/components/custom-table/columns"
import { dummyUserLists } from "../common/components/custom-table/dummydata"
import CustomFilter from "../common/components/custom-filter"
import { useNavigate } from "react-router-dom"

const UserList = () => {
    const [filter,setFilter] = useState();
    const navigate = useNavigate();
    return(
        <div className="w-full flex flex-col gap-4">
            <div className="w-full h-20 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <input className="w-[15vw] p-2 rounded border border-purple-800" type="text" />
                    <button className="border border-purple-800">Search</button>
                </div>
                <div className="flex flex-row items-center gap-8">
                    <div className="">
                    <CustomFilter setCategory={setFilter}/>
                    </div>
                    <div className="h-12">
                        <button 
                        className="bg-green-600 hover:border-green-500 text-white duration-500 hover:bg-green-400 hover:text-gray-800"
                        onClick={() => navigate('userlists/createuser')}
                        >New</button>
                    </div>
                </div>
            </div>
            <CustomTable column={userColumn} tableData={dummyUserLists}/>
        </div>
    )
}
export default UserList