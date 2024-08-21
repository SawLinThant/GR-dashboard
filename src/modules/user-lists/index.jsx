import CustomTable from "../common/components/custom-table"
import { userColumn } from "../common/components/custom-table/columns"
import { dummyUserLists } from "../common/components/custom-table/dummydata"

const UserList = () => {
    return(
        <div className="w-full flex flex-col gap-4">
            <div className="w-full h-20"></div>
            <CustomTable column={userColumn} tableData={dummyUserLists}/>
        </div>
    )
}
export default UserList