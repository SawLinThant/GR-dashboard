import clsx from "clsx";

const InputField = ({
    label,
    inputType,
    placeholder,
    require,
    fullSize
}) => {
    return(
        <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="">{label}</label>
            <input
            className={clsx('border border-purple-900 p-2 rounded',{
              'w-full':fullSize,
              'w-3/4': !fullSize
            })}
             type={inputType} 
             placeholder={placeholder}
             />
        </div>
    )
}
export default InputField;