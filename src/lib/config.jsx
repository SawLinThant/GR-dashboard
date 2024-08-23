import { FaUserGroup } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";

export const SidebarRoutes = [
    {
        id: 'user',
        label: 'User',
        path: 'user',
        icon: <FaUserGroup size={20}/>
    },
    {
        id: 'merchant',
        label: 'Merchant',
        path: 'merchants',
        icon: <FaShop size={20}/>
    },
    {
        id: 'transaction',
        label: 'Transaction',
        path: 'transaction',
        icon: <GrTransaction size={20}/>
    },
]

export const customerFilterOptions = [
    {
        value: "all",
        label: "All"
    },
    {
        value: 'disable',
        label: "Disable"
    },
    {
        value: 'enable',
        label: "Enable"
    },
]