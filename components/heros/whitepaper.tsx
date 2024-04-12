import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/link';

export const Whitepaper = () => {
  return (
      <div className="bg-zinc-400 py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">

            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-7xl lg:text-9xl text-background z-10">WHITEPAPER</h1>

              <Button size="lg"
                      as={Link}
                      radius="full"
                      isExternal
                      className="uppercase bg-orange-600 text-4xl min-w-unit-64 min-h-unit-18 drop-shadow-xl hover:scale-110"
                      href="/whitepaper.pdf">
                SEE WHITEPAPER
              </Button>
            </div>
        </div>
      </div>
  )
}