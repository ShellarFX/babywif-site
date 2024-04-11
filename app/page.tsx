import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon, TelegramIcon } from '@/components/icons';
import { AuroraBackground } from '@/components/aurora-background';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/react';
import { BabywifHero } from '@/components/heros/babywif';
import { AboutUsHero } from '@/components/heros/about-us';
import { HowToBuy } from '@/components/heros/how-to-buy';
import { Tokenomics } from '@/components/heros/tokenomics';
import { Roadmap } from '@/components/heros/roadmap';

export default function Home() {
  return (
      <section className="flex flex-col items-center justify-center">
        <BabywifHero />
        <AboutUsHero />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
      </section>
  );
}
