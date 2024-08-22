import InputField from "../common/components/input-field";

const CreateUser = () => {
  return (
    <div className=" w-full h-full relative p-5 flex flex-col items-center justify-center overflow-y-auto">
      <div className="min-w-[40rem] border border-gray-500 p-8 flex flex-col gap-12 rounded">
        <div>
          <h3 className="text-left text-2xl text-purple-900 font-semibold">
            Onboard User
          </h3>
        </div>
        <div className="w-full">
          <form className="w-full flex flex-col gap-6" action="">
            <div className="w-full h-full grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start gap-2 pb-4">
                <InputField
                  label="Username"
                  placeholder="Enter Username"
                  inputType="text"
                  fullSize={false}
                />
                <InputField
                  label="Phone"
                  placeholder="Enter phone number"
                  inputType="text"
                />
                <InputField
                  label="Email"
                  placeholder="Enter email"
                  inputType="email"
                />
                {/* <InputField
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
                  placeholder="Unique password"
                  inputType="password"
                /> */}
              </div>
              <div className="flex flex-col items-start gap-2 pb-4">
              <InputField
                  label="Unique Password"
                  placeholder="Unique password"
                  inputType="password"
                  autoGenerate={true}
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
                  fullSize={false}
                />
                
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-[20vw] h-[20vh] border border-gray-700 mt-5 rounded-md"></div>
                <InputField
                  label=""
                  placeholder="0001 0001"
                  inputType="text"
                  fullSize={true}
                  isLabel={false}
                />
              </div>
            </div>
            <div className="h-12 w-full flex flow-row gap-4 items-center justify-start">
                <button className="text-black transition min-w-24 duration-500 border-purple-900 hover:text-white from-blue-900 to-gray-600 rounded font-light hover:bg-gradient-to-l">Create</button>
                <button className="text-black transition min-w-24 duration-500 border-purple-900 hover:text-white from-blue-900 to-gray-600 rounded font-light hover:bg-gradient-to-l">Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
