import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/link';

export const ContactUs = () => {
  return (
      <div className="bg-gradient-to-tl from-[#FF705B] to-[#FFB457] py-12 w-full items-center flex justify-center">
        <div className="flex flex-col w-full gap-4 max-w-7xl md:px-0 items-center text-center px-6">
          <div className="flex gap-12 items-center relative ">
            <div className="whitespace-nowrap hidden lg:block shrink-0">
              <Image width={0}
                     height={0}
                     sizes="100vw"
                     src="/contact-us.png"
                     alt="logo"
                     className="w-[320px] h-auto" />
            </div>

            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-7xl lg:text-9xl text-background z-10">CONTACT US</h1>

              <div className="text-xl md:text-3xl drop-shadow-lg">
                Are you part of a charitable organization or a social initiative seeking to collaborate
                with a committed community? We're here for you!
              </div>

              <div className="text-xl md:text-3xl drop-shadow-lg">
                At Babywif, we believe in the power of collaboration and in making the world a better place for everyone. If you have an idea, a project, or simply want to learn more about us and how we can work together, don't hesitate to get in touch. We're eager to hear your proposals and explore ways to make a positive impact on
                society.
              </div>

              <div className="text-xl md:text-3xl drop-shadow-lg">
                Join us, and let's make a difference together!
              </div>

              <Button size="lg"
                      as={Link}
                      radius="full"
                      isExternal
                      className="uppercase bg-orange-600 text-4xl min-w-unit-64 min-h-unit-18 drop-shadow-xl hover:scale-110"
                      href="https://t.me/babywifcontactus">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}