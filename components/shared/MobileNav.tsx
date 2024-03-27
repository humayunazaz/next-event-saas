import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import NavItems from './NavItems'
import { Separator } from "@/components/ui/separator"

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image src='/assets/icons/menu.svg' alt='Menu' width={24} height={24} className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Image src='/assets/images/logo.svg' alt='Evently Logo' width={128} height={38} />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav