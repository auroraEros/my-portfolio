import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfo from "./ContactInfo";

const contactInfo = [
  {
    title: "Email",
    text: "sahar.javadi.h@gmail.com",
    href: "mailto:sahar.javadi.h@gmail.com",
    icon: <Mail className="w-6 h-6 text-primary" />,
  },
  {
    title: "Phone",
    text: "+98 (912) 260-2818",
    href: "tel:+989122602818",
    icon: <Phone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Location",
    text: "Karaj, Alborz, Iran",
    href: "",
    icon: <MapPin className="h-6 w-6 text-primary" />,
  },
];
function ContactList() {
  return (
    <ul className="space-y-6 justify-center">
      {contactInfo.map((info, key) => (
        <ContactInfo
          key={key}
          title={info.title}
          text={info.text}
          href={info.href}
        >
          {info.icon}
        </ContactInfo>
      ))}
    </ul>
  );
}

export default ContactList;
