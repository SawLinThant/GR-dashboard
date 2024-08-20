import InputField from "../common/components/input-field";

const CreateUser = () => {
  return (
    <div className=" w-full h-full relative p-5 flex flex-col items-start justify-center overflow-y-auto">
      <div className="min-w-[40rem] border border-gray-500 p-8 flex flex-col gap-12 rounded">
        <div>
          <h3 className="text-left text-2xl text-purple-900 font-semibold">
            Onboard User
          </h3>
        </div>
        <div className="w-full">
          <form className="w-full flex flex-col gap-6" action="">
            <div className="w-full h-full grid grid-cols-2">
              <div className="flex flex-col items-start gap-6 border-r border-r-purple-900 pb-4">
                <InputField
                  label="Username"
                  placeholder="Enter Username"
                  inputType="text"
                />
                <InputField
                  label="Phone"
                  placeholder="Enter phone number"
                  inputType="text"
                />
                <InputField
                  label="Password"
                  placeholder="Enter password"
                  inputType="password"
                />
                <InputField
                  label="Confirm password"
                  placeholder="Confirm password"
                  inputType="password"
                />
                <InputField
                  label="UniquePassword"
                  placeholder="Confirm password"
                  inputType="password"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-[20vw] h-[3vh] border border-gray-700"></div>
              </div>
            </div>
            <div className="h-12 w-full flex flow-row items-center justify-start">
                <button className="text-black transition duration-500 border-purple-900 hover:text-white from-blue-900 to-gray-800 rounded font-light hover:bg-gradient-to-l">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
