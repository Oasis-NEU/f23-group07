const Footer = () => (
    <footer className="bg-red-500 py-4 text-center">
      <p className="centered-right-align">
      <span className="centered-text">
      &nbsp;&nbsp;&nbsp;
      © {new Date().getFullYear()} NUGym
      </span>
      <span className="right-aligned-text">
      Questions? Contact <u> help@nugym.com</u> &nbsp;&nbsp;&nbsp;
        </span>
      </p>
    </footer>
  );
  
  export default Footer;