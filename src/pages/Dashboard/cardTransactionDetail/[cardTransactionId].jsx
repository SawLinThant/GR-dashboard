import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "../../../modules/common/icon/loading-icon";
import { GET_CARDS_TRANSACTION_BY_ID } from "../../../graphql/query/card-transaction-query";
import { UPDATE_CASHIN_AMOUNT_BY_ID } from "../../../graphql/mutation/cashin-mutation";

const CardTransactionDetail = () => {
  const { cardTransactionId } = useParams();
  console.log(cardTransactionId);
  const navigate = useNavigate();
  const [isEdit, setisEdit] = useState(false);
  const { data: getCardTransactionbyId, loading: fetchCardTransactionbyId } =
    useQuery(GET_CARDS_TRANSACTION_BY_ID, {
      variables: { id: cardTransactionId },
    });

  const [cardTransactionData, setCardTransactionData] = useState({
    id: "",
    transaction_number: "",
    amount: "",
    terminal_id: "",
    card_id: "",
    card_transaction_type: "",
    created_at: "",
    updated_at: "",
    card: {
      card_number: "",
    },
    cardTransactionTypeByCardTransactionType: {
      name: "",
    },
    terminal: {
      terminal_number: "",
    },
  });

  useEffect(() => {
    if (getCardTransactionbyId) {
      setCardTransactionData(getCardTransactionbyId.card_transactions[0]);
    }
  }, [getCardTransactionbyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardTransactionData({
      ...cardTransactionData,
      [name]: value,
    });
  };

  const [updateCardTransactionById, { loading: updateCardTransactionLoading }] =
    useMutation(UPDATE_CASHIN_AMOUNT_BY_ID);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(cardTransactionData);
    // try {
    //   await updateCardTransactionById({
    //     variables: {
    //       id: cardTransactionData.id,
    //       amount: cardTransactionData.amount,
    //       updated_at: Date.now()
    //     },
    //   });
    //   toast.success("Saved changes");
    // } catch (error) {
    //   console.error("Failed to update cardTransaction:", error);
    //   toast.error("Failed to update cardTransaction.");
    // }
  };

  if (fetchCardTransactionbyId) return <div></div>;

  return (
    <div className="w-full flex flex-col gap-4 pr-5 pl-5">
      <Toaster />
      <div className="w-full max-h-[80vh] h-[80vh] flex flex-col justify-end border border-purple-900 rounded p-8 mt-6">
        <div className="w-full h-full overflow-auto rounded grid grid-cols-2">
          <div className="w-full h-full p-6 border bg-gray-100 rounded">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-[4rem] flex flex-row items-center p-4 justify-between rounded-t rounded-tr bg-gradient-to-r from-blue-900 to-gray-600">
                <button
                  onClick={() => navigate("/dashboard/cardtransaction")}
                  className="bg-transparent"
                >
                  <FaArrowLeft size={20} color="white" />
                </button>
                {/* <button
                  onClick={() => setisEdit(!isEdit)}
                  className="min-h-8 border border-white bg-transparent text-white"
                >
                  {isEdit ? "Close" : "Update Info"}
                </button> */}
              </div>
              <div className="w-full h-full">
                <form
                  className="w-full h-full overflow-y-auto flex flex-col gap-4"
                  action=""
                  onSubmit={handleUpdate}
                >
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 ml-3 font-semibold">
                        Transaction No:
                      </p>
                    </div>
                    <input
                      className={clsx(
                        "w-full border text-black focus:outline-none rounded p-2",
                        {
                          "border-purple-800": isEdit,
                          "border-transparent": !isEdit,
                        }
                      )}
                      type="text"
                      disabled={!isEdit}
                      name="amount"
                      value={cardTransactionData.transaction_number || ""}
                      placeholder={cardTransactionData.transaction_number || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 ml-3 font-semibold">
                        Amount:
                      </p>
                    </div>
                    <input
                      className={clsx(
                        "w-full border text-black focus:outline-none rounded p-2",
                        {
                          "border-purple-800": isEdit,
                          "border-transparent": !isEdit,
                        }
                      )}
                      type="text"
                      disabled={!isEdit}
                      name="amount"
                      value={cardTransactionData.amount || ""}
                      placeholder={cardTransactionData.amount || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 ml-3 font-semibold">
                        Terminal No:
                      </p>
                    </div>
                    <input
                      className={clsx(
                        "w-full border text-black focus:outline-none rounded p-2",
                        {
                          "border-purple-800": isEdit,
                          "border-transparent": !isEdit,
                        }
                      )}
                      type="text"
                      disabled={!isEdit}
                      name="terminal_number"
                      value={cardTransactionData.terminal.terminal_number || ""}
                      placeholder={cardTransactionData.terminal.terminal_number || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 ml-3 font-semibold">
                        Card No:
                      </p>
                    </div>
                    <input
                      className={clsx(
                        "w-full border text-black focus:outline-none rounded p-2",
                        {
                          "border-purple-800": isEdit,
                          "border-transparent": !isEdit,
                        }
                      )}
                      type="text"
                      disabled={!isEdit}
                      name="card_number"
                      value={cardTransactionData.card.card_number || ""}
                      placeholder={cardTransactionData.card.card_number || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full h-auto grid grid-cols-2">
                    <div>
                      <p className="text-left mt-2 ml-3 font-semibold">
                        Type:
                      </p>
                    </div>
                    <input
                      className={clsx(
                        "w-full border text-black focus:outline-none rounded p-2",
                        {
                          "border-purple-800": isEdit,
                          "border-transparent": !isEdit,
                        }
                      )}
                      type="text"
                      disabled={!isEdit}
                      name="card_number"
                      value={cardTransactionData.cardTransactionTypeByCardTransactionType.name || ""}
                      placeholder={cardTransactionData.cardTransactionTypeByCardTransactionType.name || ""}
                      onChange={handleInputChange}
                    />
                  </div>

                  {isEdit ? (
                    <div className="w-full h-12 mt-4">
                      <button
                        type="submit"
                        className="w-full h-full flex flex-row items-center justify-center text-white bg-gradient-to-r from-blue-900 to-gray-600"
                      >
                        {updateCardTransactionLoading ? (
                          <LoadingButton size={20} />
                        ) : (
                          "Save Changes"
                        )}
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
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
export default CardTransactionDetail;
