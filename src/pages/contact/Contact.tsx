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
          <a href="tel:+48692166586">
            <p>Telefon: 692 166 586</p>
          </a>
          <a href="https://www.instagram.com/fillscott/" target="blank">
            <p>Instagram: @Fillscott</p>
          </a>
          <a href="https://www.facebook.com/filip.skotarczak" target="blank">
            <p>Facebook: Filip Scott Skotarczak</p>
          </a>
          <a href="mailto:madmidking@gmail.com">
            <p>Mail: madmidking@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
