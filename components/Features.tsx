import {
  Crown,
  HeartHandshake,
  History,
  MessageCircle,
  ShieldCheck,
  Watch,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "available",
    },
    {
      icon: History,
      title: "Bet Tracking",
      description: "Comprehensive history and analytics",
      status: "available",
    },

    {
      icon: HeartHandshake,
      title: "Affiliate Program",
      description: "Earn from referrals",
      status: "available",
    },
    {
      icon: Watch,
      title: "Live Casino",
      description: "Real-time dealer games",
      status: "coming-soon",
    },
    {
      icon: MessageCircle,
      title: "Community",
      description: "Live chat & social features",
      status: "coming-soon",
    },
    {
      icon: Crown,
      title: "VIP Program",
      description: "Exclusive rewards & benefits",
      status: "available",
    },
  ];

  return (
    <div className="px-24 flex py-10 justify-between">
      {features.map((feature, i) => {
        const Icon = feature.icon;

        return (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-y-2 text-white"
          >
            <div className="p-4 rounded-full bg-secondary text-tertiary cursor-pointer">
              <Icon className="hover:animate-bounce" />
            </div>

            <h3 className="font-semibold text-sm">{feature.title}</h3>
            <p className="text-xs max-w-[150px] text-center">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
