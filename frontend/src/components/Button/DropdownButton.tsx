import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "../../icons/antdImports";
import { DownOutlined } from "../../icons/antdImports";
import type { DropdownButtonInterface } from "../../types/Dropdown.interface";
import { useNavigate } from "react-router-dom";

const DropdownButton: React.FC<DropdownButtonInterface> = ({
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

export default DropdownButton;
