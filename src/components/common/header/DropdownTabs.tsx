import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ArrowDown2 } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ERouteTable } from '@/constants/route';
import { useRouter } from 'next/navigation';

interface DropdownTabsProps {
  type?: 'default' | 'custom';
  isDarkTheme?: boolean;
}

const listChallenge = [
  {
    title: 'Câu hỏi vui lịch sử',
    route: ERouteTable.CHALLENGE_QUIZ,
  },
  {
    title: 'Sắp xếp dòng thời gian',
    route: ERouteTable.CHALLENGE_TIMELINE,
  },
  {
    title: 'Ghép hình anh hùng',
    route: ERouteTable.CHALLENGE_PUZZLE,
  },
  {
    title: 'Điểm khuyết câu chuyện',
    route: ERouteTable.CHALLENGE_FILL_STORY,
  },
  {
    title: 'Timeline Lịch sử Việt Nam',
    route: ERouteTable.TIMELINE,
  }
];

const DropdownTabs = ({ type = 'default', isDarkTheme = false }: DropdownTabsProps) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div
          className={cn(
            'flex items-center cursor-pointer rounded-md transition-all',
            type === 'custom' && (isDarkTheme ? 'bg-white/10 p-2 hover:bg-white/20' : 'bg-[#919EAB14] p-2')
          )}
        >
          <p
            className={cn(
              'font-semibold text-sm px-1.5 py-0.5 rounded-md transition-colors',
              type === 'custom'
                ? isDarkTheme
                  ? 'text-white'
                  : 'bg-white text-[#212B36]'
                : isDarkTheme
                ? 'text-white'
                : 'text-[#212B36]'
            )}
          >
            Thử thách
          </p>
          <div className='p-1'>
            <ArrowDown2 size={18} color={isDarkTheme ? '#FFFFFF' : '#27272A'} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        sideOffset={20}
        alignOffset={-10}
        className='grid grid-cols-1 grid-rows-1 bg-white border-none'
      >
        {listChallenge.map(item => (
          <DropdownMenuItem key={item.title} className='block'>
            <Button
              variant='ghost'
              className='block w-full text-left text-normal text-text-primary font-normal hover:text-text-primary'
              onClick={() => router.push(item.route)}
            >
              {item.title}
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownTabs;
