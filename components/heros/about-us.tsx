
import Image from "next/image";

export const AboutUsHero = () => {
  return (
      <div className="bg-gradient-to-tr from-[#FF705B] to-[#FFB457] py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">
          <div className="flex gap-16 items-center" >
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/about-us.png"
                     alt="about-us"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="h-[420px] w-auto" />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-7xl lg:text-9xl text-background">ABOUT US</h1>


              <div className="text-xl md:text-3xl drop-shadow-lg">
                Babywif represents a new way to interact in the world of
                cryptocurrencies, where value is found in fun, solidarity, and
                community participation. Unlike conventional cryptocurrencies,
                it
                is
                based on emotional connection and community commitment, rather
                than
                solely relying on technological or utilitarian aspects. Born as
                a
                community participation initiative on the Solana network, it
                aspires
                to be more than just a token; it is a symbol of generosity and
                collaboration.
              </div>


              <div className="text-xl md:text-3xl drop-shadow-lg">
                The story behind this project is one of altruistic spirit and
                community commitment. The team was inspired by the idea of
                reinventing
                a token that was not only an investment but also a tool to help
                others. We want to use Babywif as a platform to generate a
                positive
                impact on society, supporting charitable causes and promoting
                financial education and inclusion in the world of
                cryptocurrencies.
              </div>

              <div className="text-xl md:text-3xl drop-shadow-lg">
                The long-term vision is to continue developing and strengthening
                this
                inclusive and supportive community, working in collaboration
                with
                members to explore new ways to make the world a better place for
                everyone
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};