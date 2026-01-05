'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import ModelCanvas from '@/components/3d-viewer/ModelCanvas';
import InfoModal from '@/components/3d-viewer/ModalInfo';
import { SLIDES } from '../../../constants/museum/data';

// helper: quyết định số thumbnail theo width
function getVisibleThumbs() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  if (w < 500) return 2; // rất nhỏ → 2
  return 3; // tablet/desktop → 3
}

export default function MuseumPage() {
  const [index, setIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const [openInfo, setOpenInfo] = useState(false);
  const [visibleThumbs, setVisibleThumbs] = useState(getVisibleThumbs());

  // cập nhật theo resize (có rAF để tránh spam)
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setVisibleThumbs(v => {
          const next = getVisibleThumbs();
          return v !== next ? next : v;
        });
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const slide = SLIDES[index];
  const progress = useMemo(() => ((index + 1) / SLIDES.length) * 100, [index]);

  const prev = () => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex(i => (i + 1) % SLIDES.length);

  // đảm bảo cửa sổ thumbnail luôn chứa "index" hiện tại
  useEffect(() => {
    const maxStart = Math.max(0, SLIDES.length - visibleThumbs);
    if (index < thumbStart) setThumbStart(index);
    else if (index > thumbStart + visibleThumbs - 1)
      setThumbStart(Math.min(index - (visibleThumbs - 1), maxStart));
    if (index === 0) setThumbStart(0);
  }, [index, thumbStart, visibleThumbs]);

  // các index cần render
  const visibleIndexes = Array.from(
    { length: Math.min(visibleThumbs, SLIDES.length) },
    (_, k) => thumbStart + k
  );

  return (
    <div className='h-full bg-[#161C24] text-white relative'>
      <div className='h-full flex flex-col-reverse items-center md:flex-row md:justify-between md:items-end p-6'>
        {/* LEFT */}
        <div className='w-full md:max-w-1/3 z-10'>
          <h1 className='text-4xl font-bold tracking-tight mb-4'>
            {slide.title}
          </h1>
          <div className='flex flex-wrap gap-2 mb-6'>
            {slide.tags.map(t => (
              <div className='bg-[#DCB48414] rounded-md py-1 px-2' key={t}>
                <span className='text-[#DCB484]'>{t}</span>
              </div>
            ))}
          </div>
          <p className='text-white/80 leading-7 mb-6'>{slide.description}</p>
          <button
            className='inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition'
            onClick={() => setOpenInfo(true)}
          >
            <Info size={16} /> Thông tin
          </button>
        </div>

        {/* CENTER */}
        <main className='absolute left-1/2 top-1/2 -translate-1/2'>
          <div className='rounded-3xl bg-white/5 p-2 w-screen h-[calc(100vh-58px)]'>
            <ModelCanvas modelUrl={slide.modelUrl} />
          </div>
        </main>

        {/* RIGHT: thumbnails (trên mobile nằm ngang; md trở lên dọc) */}
        <aside className='flex flex-col z-10'>
          <div className='flex flex-row md:flex-col gap-3'>
            {visibleIndexes.map(i => {
              const s = SLIDES[i];
              const active = i === index;
              return (
                <button
                  key={`${s.id}-${i}`}
                  onClick={() => setIndex(i)}
                  className={`relative rounded-2xl p-[2px] transition
                    ${
                      active
                        ? 'ring-2 ring-white/60'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                >
                  <div className='w-[140px] sm:w-[200px] md:w-full h-24 sm:h-28 md:h-32 rounded-[14px] overflow-hidden bg-white/5'>
                    <img
                      src={s.thumbnail}
                      alt={s.title}
                      className='h-full w-full object-cover'
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className='mt-4 flex items-center gap-3 px-2'>
            <div className='h-[2px] flex-1 bg-white/10'>
              <div
                className='h-full bg-white/80 transition-all'
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              onClick={prev}
              className='rounded-full bg-white/10 p-2 hover:bg-white/20'
              aria-label='Previous'
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className='rounded-full bg-white/10 p-2 hover:bg-white/20'
              aria-label='Next'
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </aside>
      </div>

      <InfoModal
        open={openInfo}
        onClose={() => setOpenInfo(false)}
        info={slide.info}
      />
    </div>
  );
}
