import Image from 'next/image';
import IconArrowTopRight from '../../../../public/icon-svg/IconArrowTopRight';

interface CardChallengeProps {
  image: string;
  title: any;
  description: string;
  tag: string;
  onClick: () => void;
}

export default function CardChallenge(props: CardChallengeProps) {
  const { image, title, description, tag, onClick } = props;
  return (
    <div className='bg-[#919EAB14] rounded-4xl w-[362px]'>
      <div className='p-8'>
        <div className='flex items-center justify-between'>
          <div className='bg-[#919EAB14] w-max text-[#212B36] px-4 py-2 rounded-full'>
            {tag}
          </div>
          <div className='cursor-pointer' role='presentation' onClick={onClick}>
            {' '}
            <IconArrowTopRight />
          </div>
        </div>
        <div className='text-2xl text-[#212B36] font-bold mt-4'>{title}</div>
        <div className='mt-3 text-[#637381]'>{description}</div>
      </div>
      <Image alt='Challenge Image' src={image} className='w-[362px]' />
    </div>
  );
}
