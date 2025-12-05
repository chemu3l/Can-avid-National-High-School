// Type for each menu item
export interface DropdownItemInterface {
  key: string;
  label: React.ReactNode;
  path?: string
}

// Props for the component
export interface DropdownButtonInterface {
  label: string;
  items: DropdownItemInterface[];
  className?: string;
}