// React

// Data
import { profileData } from "../data/profileData";

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {profileData.socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
        >
          <img src={icon} alt={label} />
        </a>
      ))}
    </div>
  );
}
