import { title } from '@/components/primitives';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';
import Image from 'next/image';

export const HowToBuy = () => {
  return (
      <div className="bg-gradient-to-bl from-[#FF705B] to-[#FFB457] py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">
          <div className="flex gap-12 items-center relative ">
            <div className="whitespace-nowrap hidden lg:block shrink-0">
              <Image width={0}
                     height={0}
                     sizes="100vw"
                     src="/coin.png"
                     alt="logo"
                     className="w-[400px] h-auto" />
            </div>

            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-7xl lg:text-9xl text-background z-10">HOW TO
                                                                   BUY</h1>

              <div className="text-xl md:text-3xl drop-shadow-lg">
                $Babywif is a token on the Solana network, ensuring fast and
                efficient
                transactions with low fees. You can acquire $Babywif on
                decentralized
                exchange platforms
                (DEX) like Raydium, or directly through our website
              </div>

              <Button size="lg"
                      as={NextLink}
                      radius="full"
                      className="uppercase bg-orange-600 text-4xl min-w-unit-64 min-h-unit-18 drop-shadow-xl hover:scale-110"
                      href="/buy">
                Buy $BABYWIF
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};