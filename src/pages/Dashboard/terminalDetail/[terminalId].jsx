import { useNavigate, useParams } from "react-router-dom";
import InputField from "../../../modules/common/components/input-field";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_TERMINAL_BY_ID } from "../../../graphql/query/terminal-query";
import { useEffect, useState } from "react";

const TerminalDetail = () => {
  const { terminalId } = useParams();
  const navigate = useNavigate();
  const { register: terminalRegister, handleSubmit: updateTerminal } =
    useForm();
  const { data: getTerminalbyId, loading: fetchTerminalbyId } = useQuery(
    GET_TERMINAL_BY_ID,
    {
      variables: { id: terminalId },
    }
  );

  const [terminalData, setTerminalData] = useState({
    id: "",
    terminal_number: "",
    password:"",
    facility_id:"",
    disabled: "",
    created_at: "",
    updated_at: "",
    facility:{
        id:"",
        name:""
    }
  });

  useEffect(() => {
    if (getTerminalbyId) {
      setTerminalData(getTerminalbyId.terminals[0]);
    }
  }, [getTerminalbyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTerminalData({
      ...terminalData,
      [name]: value,
    });
  };

  const handleRadioChange = (status) => {
    setTerminalData((prevData) =>({
        ...prevData,
        disabled: status
    }))
  }

  console.log(terminalData)

  if (fetchTerminalbyId) return <div></div>;

  return (
    <div className="w-full flex flex-col gap-4 pr-5 pl-5">
      <div className="w-full max-h-[80vh] h-[80vh] flex flex-col justify-end border border-purple-900 rounded p-8 mt-6">
        <div className="w-full h-full overflow-auto rounded grid grid-cols-2">
          <div className="w-full h-full p-6 border bg-gray-100 rounded">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-[4rem] flex flex-row items-center p-4 justify-between rounded-t rounded-tr bg-gradient-to-r from-blue-900 to-gray-700">
                <button
                  onClick={() => navigate("/dashboard/terminal")}
                  className="bg-transparent"
                >
                  <FaArrowLeft size={20} color="white" />
                </button>
              </div>
              <div className="w-full h-full">
                <form
                  className="w-full h-full overflow-y-auto flex flex-col gap-4"
                  action=""
                >
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 font-semibold">
                        Terminal Number
                      </p>
                    </div>
                    <input
                      className="w-full border text-black border-purple-800 focus:outline-none rounded p-2"
                      type="text"
                      name="terminal_number"
                      value={terminalData.terminal_number || ""}
                      placeholder={terminalData.terminal_number || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 font-semibold">
                        Facility
                      </p>
                    </div>
                    <input
                      className="w-full border text-black border-purple-800 focus:outline-none rounded p-2"
                      type="text"
                      name="id"
                      value={terminalData.facility.name || ""}
                      placeholder={terminalData.facility.name|| ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="radio"
                        name="customerStatus"
                        value="enabled"
                        checked={!terminalData.disabled}
                        onChange={() => handleRadioChange(false)}
                      />
                      <p>Enabled</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="radio"
                        name="customerStatus"
                        value="disabled"
                        checked={terminalData.disabled}
                        onChange={() => handleRadioChange(true)}
                      />
                      <p>Disable</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default TerminalDetail;
