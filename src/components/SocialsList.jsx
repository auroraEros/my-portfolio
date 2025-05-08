import { Github, Instagram, Linkedin } from "lucide-react";

function SocialsList() {
  return (
    <div className="flex space-x-4 justify-center">
      <a
        href="#"
        target="_blank"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <Linkedin />
      </a>

      <a
        href="#"
        target="_blank"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <Instagram />
      </a>
      <a
        href="#"
        target="_blank"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <Github />
      </a>
    </div>
  );
}

export default SocialsList;
