import { ReactNode } from "react";

interface CustomGlobalInputProps {
  label?: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "textarea"
    | "password"
    | "date"
    | undefined;
  placeholder?: string;
  className?: string;
  containerStyle?: string;
  textareaLength?: number;
  disabled?: boolean;
  name?: string;
  value?: string | number | any;
  defaultValue?: string | number;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CustomGlobalInput = ({
  label,
  type,
  placeholder,
  className,
  containerStyle,
  textareaLength,
  defaultValue,
  disabled,
  name,
  value,
  required,
  onChange,
}: CustomGlobalInputProps) => {
  return (
    <div className={`flex flex-col gap-2.5 w-full ${containerStyle}`}>
      {/* <== Custom Input Label ==> */}
      <label htmlFor={label?.toLowerCase()} className=" text-black-70">
        {label}
      </label>
      {/* <== Custom Input Textarea ==> */}
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          rows={4}
          name={name}
          maxLength={textareaLength}
          className={`${className} resize-none border py-2.5 pl-5 outline-none rounded-[10px] border-black-10 active:border-primary focus:border-primary`}
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      ) : (
        // <== Custom Input Input ==>

        <input
          id={label?.toLowerCase()}
          type={type}
          placeholder={placeholder}
          className={`${className} border py-3 px-3.5 bg-transparent outline-none rounded-[10px] border-black-10 active:border-primary focus:border-primary`}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default CustomGlobalInput;
