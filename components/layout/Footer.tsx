const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkGreen-500 text-white py-4  w-full">
      <div className="container mx-auto text-center">
        <a href="/terms-privacy" className="hover:text-lightGreen-300 mr-4">
          Terms & Privacy
        </a>
        <span>&copy; {currentYear} MedFlix. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
