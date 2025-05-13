import Image from "next/image";
import spinTheWheel from "@/assets/spin-the-wheel.png";
import cashBack from "@/assets/cash-back.png";
import extraBonus from "@/assets/extra-bonus.png";

const Activities = () => {
  const activities = [
    {
      title: "Cashback",
      description: "Every Monday",
      thumbnail: cashBack.src,
    },
    {
      title: "Spin the wheel",
      description: "Reward for achieving objectives",
      thumbnail: spinTheWheel.src,
    },
    {
      title: "Reload bonus",
      description: "Every Weekend",
      thumbnail: extraBonus.src,
    },
    {
      title: "Deposit with crypto",
      description: "Get 5% bonus",
      thumbnail: spinTheWheel.src,
    },
  ];
  return (
    <div className="w-full flex overflow-auto flex-nowrap justify-between gap-6 mb-5 px-20">
      {activities.map((activity, i) => (
        <div className="flex p-3 rounded bg-secondary gap-x-4 w-[250px]">
          <Image
            key={i}
            src={activity.thumbnail}
            alt={`${activity.title} thumbnail`}
            width={80}
            height={80}
            className="rounded object-cover"
          />

          <div className="flex flex-col gap-y-2 text-white items-end flex-1">
            <h3 className="font-semibold text-lg">{activity.title}</h3>
            <p className="text-sm text-end">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
