import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, Target } from "lucide-react";
import React from "react";

interface StyledCardProps {
  title: string;
  titleIcon: LucideIcon;
  subtitle: string;
  description: string;
  features: { icon: LucideIcon; text: string }[];
  color: "primary" | "accent";
}

function StyledCard({
  title,
  titleIcon,
  subtitle,
  description,
  features,
  color,
}: StyledCardProps) {
  return (
    <Card className="shadow-md bg-muted h-full hover:scale-102 transition-all duration-300">
      <CardContent className="py-6 flex flex-col justify-between gap-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`bg-${color} rounded-lg p-3 w-fit`}>
            {React.createElement(titleIcon, {
              className: "w-7 h-7 text-background",
            })}
          </div>
          <div>
            <div className={`text-sm font-medium text-${color} mb-1`}>
              {title}
            </div>
            <h3 className="text-2xl font-bold leading-tight">{subtitle}</h3>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 bg-${color}/10 rounded-lg flex items-center justify-center`}
              >
                <feature.icon className={`w-4 h-4 text-${color}`} />
              </div>
              <span className="text-muted-foreground font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default StyledCard;
