import { ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "available",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "available",
    },

    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "available",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "coming-soon",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
      status: "coming-soon",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Millitary-grade encryption and secure wallet handling",
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
            <div className="p-4 rounded-full bg-secondary text-tertiary">
              <Icon />
            </div>

            <h3 className="font-semibold text-sm">{feature.title}</h3>
            <p className="text-xs max-w-[120px] text-center">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
