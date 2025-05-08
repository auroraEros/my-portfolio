import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SocialsList from "./SocialsList";

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary-30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
            <ContactList />

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <SocialsList />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
