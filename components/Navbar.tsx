import { Button } from "@/components/ui/button";
import { Menu, Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <header className="px-16 py-6 flex w-full items-center justify-between border-b-1 border-gray-700">
      <div className="flex items-center gap-x-3">
        <Menu size={28} className="text-gray-400" />
        <h1 className="text-xl text-tertiary font-semibold">CryptoPlay</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button className="text-gray-400">Login</Button>
        <Button className="bg-tertiary">Sign up</Button>
        <Button className="border border-gray-400 text-gray-400 rounded-md">
          <Wallet /> <>Connect Wallet</>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
