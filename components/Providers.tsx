import Image from "next/image";
import provider1 from "@/assets/partner-1.png";
import provider2 from "@/assets/partner-2.png";

const Providers = () => {
  return (
    <div className="text-white w-full px-20 py-10">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xl font-semibold">Providers</h2>
        <p className="text-sm font-semibold">
          Looking for a real-money online casino and sports betting site that
          doesn’t waste your time? You’re in the right place. Cryptoplay is
          built by players, for players. We offer fast payouts, no-nonsense
          bonuses, and a loyalty system that puts you in control. No gimmicks.
          No hype. Just clean, high-performance gaming
        </p>
      </div>

      <div className="flex w-full justify-between items-center gap-4">
        <Image
          src={provider1.src}
          alt="Provider/Partner"
          width={200}
          height={100}
        />
        <Image
          src={provider2.src}
          alt="Provider/Partner"
          width={200}
          height={100}
        />
        <Image
          src={provider1.src}
          alt="Provider/Partner"
          width={200}
          height={100}
        />
        <Image
          src={provider2.src}
          alt="Provider/Partner"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default Providers;
