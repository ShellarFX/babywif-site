import { ReactNode } from 'react';

interface RoadmapSectionProps {
  title: string;
  children: ReactNode;
}

export const RoadmapSection = ({ title, children }: RoadmapSectionProps) => {
  return (
      <div className="flex flex-col gap-2">
        <div className="text-4xl">{title}</div>

        <div className="text-2xl flex flex-col gap-4">
          {children}
        </div>
      </div>
  );
};