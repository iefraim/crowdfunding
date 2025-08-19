import React from "react";

const FormInput: React.FC<{
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: string | number | undefined;
  label: string;
  error?: string;
  required?: boolean;
  classes?: string;
  min?: number;
  max?: number;
}> = ({
  name,
  type,
  value,
  label,
  error,
  required = false,
  classes,
  min,
  max,
}) => {
  //max/min control both number values and text lengths
  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        maxLength={max}
        minLength={min}
        step="1"
        min={min}
        max={max}
      />
      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
};

export default FormInput;
