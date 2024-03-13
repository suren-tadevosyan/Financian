"use client";

const Button = ({
  className,
  label,
  onClick,
  type,
  disabled,
  style,
  imageSrc,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {imageSrc && <img src={imageSrc} alt="Button Icon" className="mr-2" />}
      {label}
    </button>
  );
};

export default Button;
