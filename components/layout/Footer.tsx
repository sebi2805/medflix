import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkGreen-500 text-white py-4 flex-col w-full">
      <div className="container mx-auto text-center">
        <Link href="/privacy" className="hover:text-lightGreen-300 mr-4">
          Terms & Privacy
        </Link>
        <span>&copy; {currentYear} MedFlix. All rights reserved.</span>
      </div>
      <div className="container mx-auto text-center mt-2">
        {" "}
        +40 728 076 496 cristinavalentinavica@gmail.com
      </div>
    </footer>
  );
};
export default Footer;
