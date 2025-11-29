import Button  from "../Button/Button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  image: string;
  onButtonClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // Optional icon
  iconPosition?: "left" | "right"; // Icon placement
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  image,
  onButtonClick,
  className = "",
  icon,
  iconPosition = "left",
}: HeroSectionProps) {
  return (
    <div className={className} >
      <div className="hero-section">
        {/* LEFT — TEXT */}
        <div>
          <h1 className="hero-section-title">
            {title}
          </h1>

          <p className="">
            {subtitle}
          </p>

          {buttonText && (
            <div className="hero-home-class-button">
              <Button 
                label={buttonText} 
                className="hero-home-button" 
                onClick={onButtonClick}         
                icon={icon}
                iconPosition={iconPosition}/>
            </div>
          )}
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Hero Banner"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}