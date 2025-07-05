import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="oregano-regular">Każda skóra ma swoją opowieść</h1>
      <span>
        <b>Napisz do mnie i opowiedz swoją</b>
      </span>
      <div className="contact-info">
        <div className="text">
          <a href="tel:+48123456789">
            <p>Telefon: 123 456 789</p>
          </a>
          <a href="https://www.instagram.com/fillscott/" target="blank">
            <p>Instagram: @Fillscott</p>
          </a>
          <a href="mailto:example@email.com">
            <p>Mail: Email@email.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
