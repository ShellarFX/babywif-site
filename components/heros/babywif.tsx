import { title } from '@/components/primitives';
import { Button } from '@nextui-org/react';
import { TelegramIcon } from '@/components/icons';
import { AuroraBackground } from '@/components/aurora-background';
import { Link } from '@nextui-org/link';
import Image from "next/image";

export const BabywifHero = () => {
  return (
      <AuroraBackground>
        <div className="pt-8 md:pt-16 py-12 w-full items-center flex justify-center z-10">
          <div className="flex w-full justify-between items-center gap-12 md:gap-32 max-w-7xl flex-col md:flex-row md:px-0 px-6">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex-shrink-0">
              <Image width={0} height={0} sizes="100vw" src="/logo.png" alt="logo" className="w-[360px] md:w-[660px] h-auto" />
              </div>
              <div className="text-xl md:text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Babywif embodies a passion for exploring
                                        the world of cryptocurrencies, always
                                        seeking new horizons. With a unique
                                        sense
                                        of humor and a playful spirit, it
                                        connects with the community and spreads
                                        joy.
                                        Its central mission is to promote
                                        financial and educational inclusion, as
                                        well as to
                                        inspire positive change in the world.
                                        Join us on this exciting journey with
                                        Babywif, where each step brings us
                                        closer
                                        to
                                        a future full of possibilities to make
                                        the
                                        world a better place.
              </div>
              <div className="flex w-full justify-center mt-2 md:mt-8">
                <Button size="lg"
                        as={Link}
                        href="https://t.me/BabydogwifhatonSol"
                        isExternal
                        className="bg-amber-400 text-background min-w-unit-64 min-h-unit-18 text-4xl hover:scale-110"
                        endContent={<TelegramIcon className={'h-16 w-16'} />}>JOIN
                                                                              US</Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image width={0} height={0} className="w-[180px] md:w-[400px] h-auto"
                         sizes="100vw"
                     src="/babywif.png"
                     alt="BabyWif" />
            </div>
          </div>
        </div>
      </AuroraBackground>
  );
};