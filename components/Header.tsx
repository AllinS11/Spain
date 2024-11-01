"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { regions } from '@/lib/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8" />
            <span className="text-xl font-bold">Spain Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-primary">
                <span>Regions</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {regions.map((region) => (
                  <DropdownMenuItem key={region.id}>
                    <Link href={`/regions/${region.id}`} className="w-full">
                      {region.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {regions.map((region) => (
                <Link
                  key={region.id}
                  href={`/regions/${region.id}`}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}