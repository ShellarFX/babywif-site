'use client';

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarProps } from '@nextui-org/react';

import NextLink from 'next/link';
import { link as linkStyles } from '@nextui-org/theme';
import React from 'react';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from '@nextui-org/react';

import { cn } from '@/utils/cn';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { ChevronDownIcon } from '@nextui-org/shared-icons';
import { Image } from '@nextui-org/image';

const socials = [
  {
    label: 'Twitter',
    href: 'https://x.com/babywifmeme',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/BabydogwifhatonSol',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/babywifhat',
  },
  {
    label: 'Tiktok',
    href: 'https://tiktok.com/@babydogwifhat',
  },
];

export const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
      <NextUINavbar
          {...props}
          classNames={{
            base: cn(
                'border-default-100 bg-default-200/50 dark:bg-default-100/50'),
            wrapper: 'w-full justify-center',
            item: 'hidden md:flex',
          }}
          height="60px"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
      >
        {/* Left Content */}
        <NavbarBrand>
          {/*<div className="rounded-full bg-foreground text-background">*/}
          {/*	<AcmeIcon size={34} />*/}
          {/*</div>*/}
          {/*<span className="ml-2 text-2xl font-medium">$BABYWIF</span>*/}
          <Image src="/logo.png" alt="logo" className="w-auto h-12" />
        </NavbarBrand>
        {/*<NavbarContent />*/}

        {/* Center Content */}
        <NavbarContent className="gap-8" justify="center">
          {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                    className={clsx(
                        linkStyles({ color: 'foreground' }),
                        'data-[active=true]:text-primary data-[active=true]:font-medium !text-2xl',
                    )}
                    color="foreground"
                    href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
          ))}

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent !text-2xl"
                    endContent={<ChevronDownIcon />}
                    radius="sm"
                    variant="light"
                >
                  SOCIALS
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: 'gap-4',
                    title: 'text-2xl !antialiased',
                  }}
              >
                {socials.map((social, index) => (
                    <DropdownItem
                        key="autoscaling"
                    >
                      <Link
                          className="text-2xl text-foreground w-full justify-between"
                          isExternal
                          showAnchorIcon
                          href={social.href}
                      >
                        {social.label}
                      </Link>
                    </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>


        </NavbarContent>

        {/* Right Content */}
        <NavbarContent className="hidden md:flex" justify="end">
          {/*<NavbarItem className="ml-2 !flex gap-2">*/}
          {/*  <Button className="text-default-500" radius="full" variant="light">*/}
          {/*    Login*/}
          {/*  </Button>*/}
          {/*  <Button*/}
          {/*      className="bg-foreground font-medium text-background"*/}
          {/*      color="secondary"*/}
          {/*      endContent={<Icon icon="solar:alt-arrow-right-linear" />}*/}
          {/*      radius="full"*/}
          {/*      variant="flat"*/}
          {/*  >*/}
          {/*    Get Started*/}
          {/*  </Button>*/}
          {/*</NavbarItem>*/}
        </NavbarContent>

        <NavbarMenuToggle className="text-default-800 md:hidden" />

        <NavbarMenu
            className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 z-10 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
            motionProps={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: {
                ease: 'easeInOut',
                duration: 0.2,
              },
            }}
        >
          <NavbarMenuItem className="mb-2 w-full text-foreground">
            <Button fullWidth
                    as={Link}
                    isExternal
                    className="bg-foreground text-background"
                    href="https://t.me/BabydogwifhatonSol">
              JOIN US
            </Button>
          </NavbarMenuItem>
          {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link className="mb-2 w-full text-foreground"
                      as={NextLink}
                      href={item.href}
                      size="md">
                  {item.label}
                </Link>

                <Divider className="opacity-50" />
              </NavbarMenuItem>
          ))}

          {socials.map((social, index) => (
              <NavbarMenuItem key={index}>
                <Link
                    className="justify-between mb-2 text-foreground w-full"
                    href={social.href}
                    isExternal
                    showAnchorIcon
                >
                  {social.label}
                </Link>

                {index < socials.length - 1 &&
                    <Divider className="opacity-50" />}
              </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextUINavbar>
  );
};
