export interface HeroSectionInterface {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  image: string;
  onButtonClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // Optional icon
  iconPosition?: "left" | "right"; // Icon placement
}