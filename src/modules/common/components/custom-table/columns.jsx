import { createColumnHelper } from "@tanstack/react-table";
import { FaRegEdit } from "react-icons/fa";


const columnHelper = createColumnHelper();
export const userColumn = [
    columnHelper.accessor("id", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="column-head">Id</span>,
      }),
      columnHelper.accessor("name", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="">Name</span>,
      }),
      columnHelper.accessor("ph_number", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="column-head">Phone No</span>,
      }),
      columnHelper.accessor("id", {
        cell: (info) => (
          <button
          className="flex w-full flex-row items-center justify-center gap-2 border-none bg-transparent hover:cursor-pointer text-blue-500"
            onClick={() => {
             // navigate(`/dashboard/detail/${info.getValue()}`);
            }}
          >
           <p>Detail</p> <FaRegEdit />
          </button>
        ),
        header: () => <span className="column-head"></span>,
      }),
]