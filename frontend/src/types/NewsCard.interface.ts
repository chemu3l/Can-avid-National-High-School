 export interface NewsCardInterface {
   isAnnouncementsOrEvents: boolean;
   cardType?: string;
   cardTitle?: string;
   cardDescription?: string;
   cardDate?: string;
   className?: string;
   onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Card uses div
   image?: string; // URL for image
 }