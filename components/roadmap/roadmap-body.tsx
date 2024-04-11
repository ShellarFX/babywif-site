import Image from 'next/image';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface RoadmapBodyProps {
  title: string;
  label: 'green' | 'red';
  children: ReactNode;
  classNames?: string
  rocket?: 1 | 2
}

export const RoadmapBody = ({ title, label, children, classNames, rocket }: RoadmapBodyProps) => {
  return (
      <div className={clsx('relative flex flex-col items-start', classNames)}>
          <div className="relative">
            <Image width={0}
                   height={0}
                   sizes="100vw"
                   src={`/${label}-label.png`}
                   alt="logo"
                   className="w-[300px] h-auto" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">{title}</div>

            {!!rocket && <Image width={0}
                    height={0}
                    sizes="100vw"
                    src={`/rocket-${rocket}.png`}
                    alt="logo"
                    className="absolute hidden lg:block w-[100px] h-auto left-1/2 -translate-x-1/2 top-[-400%] pointer-events-none" />}
          </div>

          <div className="border-l-2 border-white pl-6 py-2 text-left flex flex-col gap-6">
            {children}
          </div>
      </div>
  );
};