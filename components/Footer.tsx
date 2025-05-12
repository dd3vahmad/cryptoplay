import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-secondary py-5 text-white">
      <div className="flex gap-30 border-b-1 border-gray-700 py-10 px-20">
        <div className="flex flex-col gap-y-6 max-w-xs">
          <h1 className="text-tertiary text-xl font-semibold">CryptoPlay</h1>

          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p>@lorem</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">About us</h2>

          <ul className="list-none text-sm space-y-2">
            <li>Lorem</li>
            <li>Portflio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">Contact us</h2>

          <ul className="list-none max-w-xs space-y-3 text-sm">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </li>
            <li>+908 89097 890</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4 justify-end">
          <ul className="list-none flex gap-3">
            <li className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-tertiary">
              <Facebook />
            </li>
            <li className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-tertiary">
              <Instagram />
            </li>
            <li className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-tertiary">
              <Twitter />
            </li>
            <li className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-tertiary">
              <Linkedin />
            </li>
          </ul>
        </div>
      </div>

      <p className="w-full pb-4 mt-6 text-sm text-center">
        Copyright ® 2021 Lorem All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
