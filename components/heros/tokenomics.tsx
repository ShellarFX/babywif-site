import Image from 'next/image';

export const Tokenomics = () => {
  return (
      <div className="bg-gray-400 py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl lg:px-0 items-center text-center px-6">
          <h1 className="text-7xl lg:text-9xl text-background">TOKENOMICS</h1>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-16 md:items-start items-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-5xl lg:text-7xl text-background">TOTAL SUPPLY</h2>
                <h2 className="text-5xl lg:text-7xl text-background">999,985,440</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <div className="flex flex-col gap-2 md:gap-4 items-start">
                    <h2 className="text-4xl lg:text-5xl text-background">LP</h2>
                    <h2 className="text-4xl lg:text-5xl text-background">TAX</h2>
                    <h2 className="text-4xl lg:text-5xl text-background">TICKER</h2>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-4 items-start">
                    <h2 className="text-4xl lg:text-5xl text-background whitespace-nowrap">100% BURNED</h2>
                    <h2 className="text-4xl lg:text-5xl text-background">0%</h2>
                    <h2 className="text-4xl lg:text-5xl text-background">$BABYWIF</h2>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <h2 className="text-4xl lg:text-5xl text-background whitespace-nowrap">TOKEN
                                                                                         ADDRESS</h2>
                  <h2 className="text-xl lg:text-3xl text-background">9ceEjz32cv8jBcqsppgjrryiE2tor7PCm7j9mYk8gzTk</h2>
                </div>


              </div>
            </div>

            <div className="flex-shrink-0">
              <Image src="/tokenomics.png"
                     alt="tokenomics"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="h-[200px] lg:h-[440px] w-auto" />
            </div>
          </div>
        </div>
      </div>
  );
};