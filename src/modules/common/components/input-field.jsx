import clsx from "clsx";
import { FaLessThanEqual } from "react-icons/fa";

const InputField = ({
  label,
  inputType,
  placeholder,
  require,
  fullSize,
  autoGenerate = false,
  isLabel=true
}) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div 
      //className="w-full flex flex-row items-center justify-between"
      className={clsx("flex flex-row items-center justify-between",{
        "w-full": fullSize,
          "w-3/4": !fullSize,
          "h-0":!isLabel
      })}
      >
        <label className="h-8 mt-2" htmlFor="">
          {label}
        </label>
        {autoGenerate ? (
          <button className="bg-transparent border-none p-0 text-purple-800 h-8 text-sm flex flex-col items-center justify-center">
            generate
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <input
        className={clsx("border border-purple-900 p-2 rounded", {
          "w-full": fullSize,
          "w-3/4": !fullSize,
        })}
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputField;
