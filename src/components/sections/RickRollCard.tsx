import React from "react";

interface RickRollCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const RickRollCard: React.FC<RickRollCardProps> = ({ title, icon, description }) => {
  const handleDoubleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="cursor-pointer bg-gray-800 rounded-xl p-6 hover:shadow-xl transition duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-orange-900/30 rounded-xl">{icon}</div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
};

export default RickRollCard;
