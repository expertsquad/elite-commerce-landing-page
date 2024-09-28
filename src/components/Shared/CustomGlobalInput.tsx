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
      <label
        htmlFor={label?.toLowerCase()}
        className="text-black-70 [font-size:_clamp(12px,2.5vw,14px)]"
      >
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
          className={`${className} resize-none border py-[clamp(10px,2.5vw,15px)] px-[clamp(10px,2.5vw,20px)] outline-none rounded-[5px] md:rounded-[10px] border-black-10 active:border-primary focus:border-primary placeholder:[font-size:_clamp(12px,2.5vw,14px)] placeholder:text-black-50 [font-size:_clamp(12px,2.5vw,14px)]`}
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
          className={`${className} border py-[clamp(10px,2.5vw,15px)] px-[clamp(10px,2.5vw,20px)] bg-transparent outline-none rounded-[5px] md:rounded-[10px] border-black-10 active:border-primary focus:border-primary placeholder:[font-size:_clamp(12px,2.5vw,14px)] placeholder:text-black-50 [font-size:_clamp(12px,2.5vw,14px)]`}
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
