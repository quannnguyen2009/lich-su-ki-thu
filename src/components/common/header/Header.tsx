'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { SearchNormal } from 'iconsax-react';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useAuthStore';
import { ERouteTable } from '@/constants/route';
import { AvatarKid, logoApp } from '@/constants/images';
import DropdownTabs from './DropdownTabs';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { MenuMobile } from './MenuMobile';
import { useUserCourse } from '@/modules/auth/hooks/useUser';

function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHeaderDarkTheme, setIsHeaderDarkTheme] = useState(pathname === ERouteTable.HOME);
  const { isAuthenticated } = useAuthStore();
  const [, setOpenSearch] = useState(false);
  const router = useRouter();
  const { getUserMe } = useUserCourse();

  const handleNavigateToHome = () => {
    router.push(ERouteTable.HOME);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (pathname === ERouteTable.HOME) {
        const viewportHeight = window.innerHeight;
        const totalHeroHeight = viewportHeight * 5;
        const progress = scrollY / totalHeroHeight;
        
        // Dark scenes: Scene 1 (0 to 1/5) and Scene 2 (1/5 to 2/5)
        const isDarkScene = progress < 2 / 5;
        setIsHeaderDarkTheme(isDarkScene);
      } else {
        setIsHeaderDarkTheme(false);
      }
    };

    // Run initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
        isHeaderDarkTheme
          ? scrolled
            ? 'bg-[#0A0300]/80 border-b border-white/10 backdrop-blur-md'
            : 'bg-transparent'
          : pathname === ERouteTable.HOME
          ? scrolled
            ? 'bg-white shadow-md border-b border-gray-100/80'
            : 'bg-transparent backdrop-blur-md'
          : 'bg-white border-b border-gray-100',
        isHeaderDarkTheme ? 'text-white' : 'text-[#212B36]'
      )}
    >
      <div className='w-full py-2 lg:px-10 px-4'>
        <div className='flex justify-between items-center'>
          {/* Nav Routes */}
          <div className='flex items-center space-x-4 md:space-x-8'>
            <div className='block md:hidden'>
              <MenuMobile isDarkTheme={isHeaderDarkTheme} />
            </div>
            <Image
              src={logoApp}
              alt='Logo'
              width={80}
              height={40}
              onClick={handleNavigateToHome}
              className={cn('cursor-pointer transition-all duration-300', isHeaderDarkTheme && 'brightness-0 invert')}
            />
            <div className='hidden md:flex items-center gap-6'>
              <DropdownTabs type='custom' isDarkTheme={isHeaderDarkTheme} />
              <Link
                href={ERouteTable.LIBRARY_3D}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  pathname === ERouteTable.LIBRARY_3D
                    ? 'text-primary-main'
                    : isHeaderDarkTheme
                    ? 'text-white/90 hover:text-[#DCB484]'
                    : 'text-[#212B36] hover:text-primary-main'
                )}
              >
                Thư viện 3D
              </Link>
              <Link
                href={ERouteTable.COURSE}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  pathname === ERouteTable.COURSE
                    ? 'text-primary-main'
                    : isHeaderDarkTheme
                    ? 'text-white/90 hover:text-[#DCB484]'
                    : 'text-[#212B36] hover:text-primary-main'
                )}
              >
                Khóa học
              </Link>
              <Link
                href={ERouteTable.TIMELINE}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  pathname === ERouteTable.TIMELINE
                    ? 'text-primary-main'
                    : isHeaderDarkTheme
                    ? 'text-white/90 hover:text-[#DCB484]'
                    : 'text-[#212B36] hover:text-primary-main'
                )}
              >
                Dòng thời gian
              </Link>
              <Link
                href={ERouteTable.DEVELOPER}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  pathname === ERouteTable.DEVELOPER
                    ? 'text-primary-main'
                    : isHeaderDarkTheme
                    ? 'text-white/90 hover:text-[#DCB484]'
                    : 'text-[#212B36] hover:text-primary-main'
                )}
              >
                Về nhà phát triển
              </Link>
            </div>
          </div>

          {/* List Actions Button */}
          <div className='flex space-x-6 items-center'>
            <div className='flex items-center gap-4'>
              <Button
                style={{ padding: 8 }}
                size='lg'
                type='button'
                variant='ghost'
                onClick={() => {
                  setOpenSearch(true);
                }}
              >
                <SearchNormal size={24} color={isHeaderDarkTheme ? '#FFFFFF' : '#71717B'} />
              </Button>

              {isAuthenticated ? (
                <Image
                  onClick={() => router.push(ERouteTable.DASHBOARD)}
                  src={getUserMe?.data?.avatar ?? AvatarKid}
                  alt='Avatar'
                  width={40}
                  height={40}
                  className='cursor-pointer rounded-full h-10 w-10 border border-transparent hover:border-primary-main transition-all duration-300'
                />
              ) : (
                // <UserButton />
                <div className='md:flex gap-2 items-center hidden'>
                  <Button variant='ghost' className='h-10 hover:bg-white/10'>
                    <Link
                      href={ERouteTable.LOGIN}
                      className={cn(
                        'font-bold transition-colors',
                        isHeaderDarkTheme ? 'text-white/90 hover:text-[#DCB484]' : 'text-[#212B36]'
                      )}
                    >
                      Đăng nhập
                    </Link>
                  </Button>
                  <Button
                    variant='default'
                    className='bg-primary-main h-10 shadow-md hover:shadow-xl hover:shadow-primary-main/20 transition-shadow duration-300 text-white px-4 py-1.5 rounded-[10px]'
                  >
                    <Link href={ERouteTable.LOGIN}>Bắt đầu miễn phí</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
