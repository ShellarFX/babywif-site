import { title } from '@/components/primitives';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export const HowToBuy = () => {
  return (
      <div className="bg-orange-400 py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">
          <h1 className="text-7xl lg:text-9xl text-background">HOW TO BUY</h1>

          <div className="text-xl md:text-3xl">
            $Babywif is a token on the Solana network, ensuring fast and
            efficient
            transactions with low fees. You can acquire $Babywif on
            decentralized
            exchange platforms
            (DEX) like Raydium, or directly through our website
          </div>

          <Button size="lg"
                  as={NextLink}
                  className="uppercase bg-orange-600 text-2xl w-fit"
                  href="/buy">
            Buy $BABYWIF
          </Button>
        </div>
      </div>
  );
};