import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 1 | 2 | 3; // 1 = basic, 2 = intermediate, 3 = advanced
  className?: string;
  style?: React.CSSProperties;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, className = '', style }) => {
  // Determine the color based on the level
  const getColorClasses = () => {
    switch (level) {
      case 1:
        return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
      case 2:
        return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/30';
      case 3:
        return 'bg-orange-500 text-white border-orange-600 dark:border-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  return (
    <div 
      className={`py-2 px-3 rounded-lg border flex items-center justify-between ${getColorClasses()} ${className}`}
      style={style}
    >
      <span className="font-medium">{name}</span>
      <div className="flex space-x-1 ml-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level 
                ? 'bg-current opacity-100' 
                : 'bg-current opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;