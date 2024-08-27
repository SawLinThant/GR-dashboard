import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_CUSTOMERS_BY_ID } from "../../../graphql/query/customer-query";
import { useEffect, useState } from "react";
import nProgress from "nprogress";
import { FaArrowLeft } from "react-icons/fa";
import { UPDATE_CUSTOMER } from "../../../graphql/mutation/customer-mutation";
import LoadingButton from "../../../modules/common/icon/loading-icon";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";

const CustomerDetail = () => {
  const navigate = useNavigate();
  const { customerId } = useParams();

  const {
    data: customerById,
    loading: fetchCustomerId,
    error: fetchCustomerError,
  } = useQuery(GET_CUSTOMERS_BY_ID, {
    variables: { id: customerId },
  });

  const [
    updateCustomer,
    { loading: updateCustomerLoading, error: updateCustomerError },
  ] = useMutation(UPDATE_CUSTOMER);

  const [customerData, setCustomerData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    created_at: "",
    updated_at: "",
    card_id: "",
    disabled: false,
    unique_password: "",
  });

  const [isCustomerDisable, setIsCustomerDisable] = useState(false);

  const handleRadioChange = (status) => {
    setIsCustomerDisable(status);
    setCustomerData((prevData) => ({
      ...prevData,
      disabled: status,
    }));
    console.log(status);
    console.log(customerData);
  };

  useEffect(() => {
    if (customerById && customerById.customers.length > 0) {
      setCustomerData(customerById.customers[0]);
      setIsCustomerDisable(customerById.customers[0].disabled);
    }
  }, [customerById]);

  useEffect(() => {
    if (fetchCustomerId) {
      nProgress.configure({
        parent: "#progress-bar-container",
        showSpinner: false,
      });
      nProgress.start();
    } else {
      nProgress.done();
    }

    return () => {
      nProgress.done();
    };
  }, [fetchCustomerId, fetchCustomerError]);

  const handleUpdateCustomer = () => {
    updateCustomer({
      variables: {
        id: customerId,
        name: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        card_id: customerData.card_id,
        disabled: customerData.disabled,
        unique_password: customerData.unique_password,
      },
    })
      .then((response) => {
        console.log("Customer updated successfully", response.data);
        toast.success(
          `${
            customerData.disabled
              ? "Customer Is Disabled"
              : "Customer is Enabled"
          }`
        );
      })
      .catch((error) => {
        console.error("Error updating customer", error);
      });
  };

  //   if(fetchCustomerId) return <div></div>

  return (
    <div className="w-full flex flex-col gap-4 pr-5 pl-5">
      <Toaster />
      <div className="w-full max-h-[80vh] h-[80vh] flex flex-col justify-end border border-purple-900 rounded mt-6">
        <div className="h-[8vh] w-full border border-gray-400 p-4 flex flex-row bg-gradient-to-r from-blue-900 to-gray-700 items-center justify-start">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex flex-row items-center gap-2 bg-transparent"
          >
            <FaArrowLeft color="white" />
          </button>
        </div>
        <div className="grid grid-cols-2 w-full h-[72vh] ">
          <div className="w-full h-full p-14 border-r border-purple-800 flex flex-col items-center gap-4 overflow-y-auto">
            <div className="w-full h-auto bg-gray-100 flex flex-col overflow-y-auto">
              <div className="w-full min-h-[10rem] p-6 border border-gray-400 flex flex-col gap-4">
                <div className="w-full grid grid-cols-2">
                  <h3 className="text-left font-bold">Customer Id:</h3>
                  <p className="text-left">{customerId}</p>
                </div>
                <div className="w-full grid grid-cols-2">
                  <h3 className="text-left font-bold">Customer Name:</h3>
                  <p className="text-left">
                    {customerData ? customerData.name : ""}
                  </p>
                </div>
                <div className="w-full grid grid-cols-2">
                  <h3 className="text-left font-bold">Phone Number:</h3>
                  <p className="text-left">{customerData.phone}</p>
                </div>
                <div className="w-full grid grid-cols-2">
                  <h3 className="text-left font-bold">Email:</h3>
                  <p className="text-left">{customerData.email}</p>
                </div>
                <div className="w-full grid grid-cols-2">
                  <h3 className="text-left font-bold">Card No:</h3>
                  <p className="text-left">{customerData.card_id}</p>
                </div>
              </div>
              <div className="w-full min-h-[3rem] p-6 border border-gray-400 flex flex-col gap-4">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className="w-full grid grid-cols-2">
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="radio"
                        name="customerStatus"
                        value="enabled"
                        checked={!isCustomerDisable}
                        onChange={() => handleRadioChange(false)}
                      />
                      <p>Enabled</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="radio"
                        name="customerStatus"
                        value="disabled"
                        checked={isCustomerDisable}
                        onChange={() => handleRadioChange(true)}
                      />
                      <p>Disable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-14">
              <button
                onClick={() => handleUpdateCustomer()}
                className="w-full h-full flex flex-row items-center justify-center text-white bg-gradient-to-r from-blue-900 to-gray-700"
              >
                {updateCustomerLoading ? (
                  <LoadingButton size={20} />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
          <div className="w-full h-full p-6 flex flex-col items-center gap-4 overflow-y-auto">
            <div className="w-full h-full border border-purple-800 flex flex-col relative">
              <div className={clsx("w-full h-16 flex items-center justify-center bg-gray-100 border-b border-purple-800 absolute z-10")}>
                <h3 className="font-bold text-lg">Transaction History</h3>
              </div>
              <div className="w-full mt-16 h-[calc(100%-4rem)] border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerDetail;
