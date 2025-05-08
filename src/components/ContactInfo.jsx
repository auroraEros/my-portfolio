function ContactInfo({ children, href, title, text }) {
  return (
    <li className="flex items-start gap-x-4">
      <div className="p-3 rounded-full bg-primary/10">{children}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <a
          href={href}
          className="text-muted-forground hover:text-primary transition-colors duration-300"
        >
          {text}
        </a>
      </div>
    </li>
  );
}

export default ContactInfo;
