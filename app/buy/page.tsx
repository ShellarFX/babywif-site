'use client';

import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/link';

export default function Chart() {

  useEffect(() => {
    // @ts-ignore
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: 'https://api.mainnet-beta.solana.com',
      strictTokenList: false,
      formProps: {
        fixedOutputMint: true,
        initialInputMint: 'So11111111111111111111111111111111111111112',
        initialOutputMint: '9ceEjz32cv8jBcqsppgjrryiE2tor7PCm7j9mYk8gzTk',
      },
    });
  }, []);

  return (
      <div className="flex items-center h-full w-full justify-center gap-8 md:flex-row flex-col">
        <div className="max-w-md overflow-hidden z-0" id="integrated-terminal" />
        <div className="font-bold text-2xl">OR</div>
        <div className="flex flex-col gap-4">
          <Button size="lg"
                  // color="primary"
                  as={Link}
                  isExternal
                  className="uppercase bg-amber-400"
                  href="https://jup.ag/swap/SOL-9ceEjz32cv8jBcqsppgjrryiE2tor7PCm7j9mYk8gzTk">
            Buy on jup.ag
          </Button>
          <Button size="lg"
                  // color="primary"
                  as={Link}
                  isExternal
                  className="uppercase bg-amber-400"
                  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=9ceEjz32cv8jBcqsppgjrryiE2tor7PCm7j9mYk8gzTk&fixed=in">
            Buy on raydium.io
          </Button>
        </div>
      </div>
  );
}