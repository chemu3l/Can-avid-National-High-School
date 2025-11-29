import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;                    // Text to display on the button
  className?: string;                // CSS classes applied externally
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Reusable onClick
  icon?: React.ReactNode; // Optional icon
  iconPosition?: "left" | "right"; // Icon placement
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  className, 
  onClick,   
  icon,
  iconPosition = "left",
  ...rest 
}) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {label}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;