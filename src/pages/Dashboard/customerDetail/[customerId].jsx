import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CUSTOMERS_BY_ID } from "../../../graphql/query/customer-query";
import { useEffect } from "react";
import nProgress from "nprogress";

const CustomerDetail = ({ startProgress, stopProgress }) => {
    const {customerId} = useParams();
    const {data:customerById,loading:fetchCustomerId,error:fetchCustomerError} = useQuery(GET_CUSTOMERS_BY_ID,{
        variables:{id:customerId}
    })
  
    const customer = customerById? customerById.customers:[];
    const customerName = customerById && customerById.customers.length>0?customerById.customers[0].name:'';

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

    return(
        <div className="w-full flex flex-col gap-4 pr-5 pl-5">
            <div className="w-full max-h-[80vh] h-[80vh] flex flex-col justify-end border border-purple-900 rounded mt-6">
                <div className="grid grid-cols-2 w-full h-[73vh] border border-purple-800">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default CustomerDetail;