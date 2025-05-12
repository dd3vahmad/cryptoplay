import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="bg-secondary mx-20 rounded-tl-[100px] rounded-br-[100px] px-10 py-20 flex flex-col justify-center items-center text-white gap-y-6">
      <h2 className="text-5xl font-semibold">Weekly Newsletter</h2>
      <p className="text-sm max-w-lg text-center">
        Sign up for our weekly newsletter with a casino bonus, new casinos and
        free spin announcements
      </p>

      <div className="flex gap-x-5 mt-5 min-w-[300px]">
        <Input
          placeholder="Enter your email..."
          className="flex-1 bg-white placeholder:text-gray-500 text-tertiary rounded-full px-10 py-7 text-xl"
        />
        <Button className="bg-tertiary font-semibold rounded-full px-10 py-7 text-xl">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
