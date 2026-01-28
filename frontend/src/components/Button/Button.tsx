import React  from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "../../icons/antdImports";
import { DownOutlined } from "../../icons/antdImports";
import type { DropdownButtonInterface, ButtonProps, LinkButtonInterface } from "../../types/Button.interface";
import { useNavigate, Link } from "react-router-dom";

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

export const DropdownButton: React.FC<DropdownButtonInterface> = ({
  label,
  items,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (e) => {
    const selectedItem = items.find(item => item.key === e.key);
    if (selectedItem?.path) {
      console.log("Navigating to:", selectedItem.path);
      navigate(selectedItem.path); // redirect
    }
  };

  return (
    <Dropdown
      menu={{
        items: items.map((item) => ({ ...item, type: "item" })),
        onClick: handleClick 
      }}
      trigger={["click"]}
    >
      <span
        className={`cursor-pointer text-blue-600 hover:underline ${className || ""}`}
      >
        <Space>
          {label}
          <DownOutlined style={{ fontSize: 12 }} />
        </Space>
      </span>
    </Dropdown>
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