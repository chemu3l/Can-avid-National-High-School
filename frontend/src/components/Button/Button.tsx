import React from "react";
import type { ButtonProps, LinkButtonInterface } from "@/types/Button.interface";
import { Link } from "react-router-dom";

export const Button: React.FC<ButtonProps> = ({ 
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

export const LinkButton: React.FC<LinkButtonInterface> = ({
  label,
  link,
  onClick
}) => {
return (
  <Link className="LinkButton" to={link} onClick={onClick}>{label}</Link>
);
};