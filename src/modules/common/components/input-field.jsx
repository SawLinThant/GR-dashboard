import clsx from "clsx";
import { useState } from "react";
import { FaLessThanEqual } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  label,
  name,
  inputType,
  placeholder,
  require,
  fullSize,
  autoGenerate = false,
  isLabel=true,
  value, 
  onChange, 
  setUniquePassword
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const generateRandomValue = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); 
    const randomText = `UP-${randomNumber}`; 
    //setInputValue(e.target.value)
    setUniquePassword(randomText)
    onChange({ target: { name, value: randomText } });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-2 items-start h-auto w-full">
      <div 
      className={clsx("flex flex-row items-center justify-between",{
        "w-full": fullSize,
          "w-3/4": !fullSize,
          "h-0":!isLabel
      })}
      >
        <label className="min-h-8 mt-2" htmlFor="">
          {label}
        </label>
        {autoGenerate ? (
          <button
           type="button"         
          onClick={generateRandomValue}
          className="bg-transparent outline-none focus:outline-none border-none p-0 text-purple-800 h-8 text-sm flex flex-col items-center justify-center">
            generate
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <div className={clsx("relative flex flex-row items-start",{
         "w-full": fullSize,
         "w-3/4": !fullSize,
      })}>
      <input
        className={clsx("border w-full border-purple-900 p-2 rounded")}
        //type={inputType}
        type={isPasswordVisible && inputType === "password" ? "text" : inputType}
        value={value}
        placeholder={placeholder}
       // onChange={onChange}
        {...require(name, {
          required: `${name} is required`,
        })}
      />
       {inputType === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={clsx("absolute outline-none focus:outline-none top-0.5 text-purple-800 border-none bg-transparent after:bg-transparent after:border-none right-0")}
          >
            {isPasswordVisible ? <FaEyeSlash color="purple"/> : <FaEye color="purple"/>}
          </button>
        )}
        </div>
    </div>
  );
};
export default InputField;
