import {Button}  from "../Button/Button";
import type { HeroSectionInterface } from "../../types/Hero.interface";

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  image,
  onButtonClick,
  className = "",
  icon,
  iconPosition = "left",
}: HeroSectionInterface) {
  return (
    <div className={className} >
      <div className="hero-section">
        {/* LEFT — TEXT */}
        <div>
          <h1 className="hero-section-title">
            <b>{title}</b>
          </h1>

          <p className="hero-section-subtitle">
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
        <div className="flex justify-center" id="hero-images-container">
          <img
            src={image}
            alt="Hero Banner"
            id="hero-img-id"
            className="block w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}