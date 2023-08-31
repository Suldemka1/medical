import { ContactsInfo } from "./info/ui";
import { Schedule } from "./schedule/ui";

const ContactsGrid = () => {
  return (
    <section className="section-gap contact-top-wrappper">
      <div className="container">
        <div className="row justify-content-center">
          <ContactsInfo />
          <Schedule />
        </div>
      </div>
    </section>
  );
};

export { ContactsGrid };
