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
  onItemClick?: () => void; 
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;                    // Text to display on the button
  className?: string;                // CSS classes applied externally
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Reusable onClick
  icon?: React.ReactNode; // Optional icon
  iconPosition?: "left" | "right"; // Icon placement
}

export interface LinkButtonInterface {
  label: string,
  link: string,
  onClick?: () => void; 
}

export interface NavigationUnOrderListProps {
  onItemClick?: () => void;
  enableActive?: boolean;
}