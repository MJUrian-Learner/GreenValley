import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { MISSION_VISION_CARDS, SECTION_TITLES } from "@/constants";
import { motion } from "framer-motion";
import {
  Award,
  Eye,
  Globe,
  Headphones,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import StyledCard from "./styled-card";

function MissionVision() {
  return (
    <section className="min-h-fit container py-20 flex flex-col gap-12">
      <div className="w-4/12 mx-auto">
        <SectionTitle>
          <SectionTitleHeader>
            {SECTION_TITLES.missionVision.title}
          </SectionTitleHeader>
          <SectionTitleDescription>
            {SECTION_TITLES.missionVision.description}
          </SectionTitleDescription>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <StyledCard {...MISSION_VISION_CARDS.mission} color="primary" />
        <StyledCard {...MISSION_VISION_CARDS.vision} color="accent" />
      </div>
    </section>
  );
}

export default MissionVision;
