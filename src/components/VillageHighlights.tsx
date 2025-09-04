import React from "react";
import PopularNews from "./highlights/PopularNews";
import VillageAchievements from "./highlights/VillageAchievements";
import FlagshipPrograms from "./highlights/FlagshipPrograms";

const VillageHighlights: React.FC = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <PopularNews />
        <VillageAchievements />
        <FlagshipPrograms />
      </div>
    </section>
  );
};

export default VillageHighlights;
