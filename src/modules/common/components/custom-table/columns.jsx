import { createColumnHelper } from "@tanstack/react-table";
import { FaRegEdit } from "react-icons/fa";


const columnHelper = createColumnHelper();
export const userColumn = (navigate) => [
      columnHelper.accessor("name", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="">Name</span>,
      }),
      columnHelper.accessor("phone", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="column-head">Phone No</span>,
      }),
      columnHelper.accessor("email", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span className="column-head">Email</span>,
      }),
      columnHelper.accessor("id", {
        cell: (info) => (
          <button
          className="flex w-full flex-row items-center justify-center gap-2 border-none bg-transparent hover:cursor-pointer text-blue-500"
            onClick={() => {
              navigate(`/dashboard/customerlists/customerdetail/${info.getValue()}`);
            }}
          >
           <p>Detail</p> <FaRegEdit />
          </button>
        ),
        header: () => <span className="column-head"></span>,
      }),
]

export const cardColumn = (navigate) => [
  columnHelper.accessor("card_number", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="">Card Number</span>,
  }),
  columnHelper.accessor("disabled", {
    cell: (info) => <span>{info.getValue()?'disabled':'enabled'}</span>,
    header: () => <span className="column-head">Status</span>,
  }),
  columnHelper.accessor("balance", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="column-head">Balance</span>,
  }),
  columnHelper.accessor("id", {
    cell: (info) => (
      <button
      className="flex w-full flex-row items-center justify-center gap-2 border-none bg-transparent hover:cursor-pointer text-blue-500"
        onClick={() => {
          navigate(`/dashboard/customerlists/customerdetail/${info.getValue()}`);
        }}
      >
       <p>Detail</p> <FaRegEdit />
      </button>
    ),
    header: () => <span className="column-head"></span>,
  }),
]

export const facilityColumn = (navigate) => [
  columnHelper.accessor("name", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="">Name</span>,
  }),
  columnHelper.accessor("phone", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="column-head">Phone No</span>,
  }),
  columnHelper.accessor("email", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="column-head">Email</span>,
  }),
  columnHelper.accessor("id", {
    cell: (info) => (
      <button
      className="flex w-full flex-row items-center justify-center gap-2 border-none bg-transparent hover:cursor-pointer text-blue-500"
        onClick={() => {
          navigate(`/dashboard/customerlists/customerdetail/${info.getValue()}`);
        }}
      >
       <p>Detail</p> <FaRegEdit />
      </button>
    ),
    header: () => <span className="column-head"></span>,
  }),
]

export const terminalColumn = (navigate) => [
  columnHelper.accessor("terminal_number", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span className="">Terminal Number</span>,
  }),
  columnHelper.accessor("disabled", {
    cell: (info) => <span>{info.getValue()?'disabled':'enabled'}</span>,
    header: () => <span className="column-head">Status</span>,
  }),
  columnHelper.accessor("id", {
    cell: (info) => (
      <button
      className="flex w-full flex-row items-center justify-center gap-2 border-none bg-transparent hover:cursor-pointer text-blue-500"
        onClick={() => {
          navigate(`/dashboard/customerlists/customerdetail/${info.getValue()}`);
        }}
      >
       <p>Detail</p> <FaRegEdit />
      </button>
    ),
    header: () => <span className="column-head"></span>,
  }),
]
