const InputField = ({
    label,
    inputType,
    placeholder,
    require
}) => {
    return(
        <div className="flex flex-col gap-2 items-start">
            <label htmlFor="">{label}</label>
            <input
            className="border border-purple-900 p-2 rounded"
             type={inputType} 
             placeholder={placeholder}
             />
        </div>
    )
}
export default InputField;