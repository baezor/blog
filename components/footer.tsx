import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          <h3 className="text-sm font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Angel Baez &copy; 2022
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
