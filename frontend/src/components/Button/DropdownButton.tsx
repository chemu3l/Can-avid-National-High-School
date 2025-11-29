import React, { useState } from "react";
import type { MenuProps, DropdownProps } from "antd";
import { DownOutlined } from "../../icons";
import { Dropdown, Space } from "antd";

// Type for each menu item
export interface DropdownItem {
  key: string;
  label: React.ReactNode;
}

// Props for the component
interface DropdownButtonProps {
  label: string;
  items: DropdownItem[];
  onSelect?: (key: string) => void;
  closeOnSelect?: boolean; // if true, dropdown closes on item click
  className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  items,
  onSelect,
  closeOnSelect = true,
    className,
}) => {
  const [open, setOpen] = useState(false);

  // handle menu click
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    onSelect?.(e.key);
    if (closeOnSelect) setOpen(false);
  };

  // handle dropdown open/close
  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <span
        onClick={(e) => e.preventDefault()}
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
