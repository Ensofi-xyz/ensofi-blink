'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { useAppContext } from '@/context';
import { twJoin, twMerge } from 'tailwind-merge';

import BlogCard from './BlogCard';

const Blog: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  const { listBlog } = useAppContext();

  return (
    <div
      className={twMerge(
        'z-10',
        'w-full h-auto',
        'mt-14 sm:mt-[120px] pb-11 sm:pb-8 lg:pb-14',
        className,
      )}
      {...otherProps}
    >
      <div
        className={twJoin(
          'w-full mx-auto lg:max-w-[1300px]',
          'flex flex-col justify-center gap-y-6',
        )}
      >
        <div className="flex-col gap-y-4 center-root">
          <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/10 text-white/50 text-sm">
            ENSOFI
          </div>
          <p className="text-white/80 text-2xl sm:text-[40px] font-medium sm:mb-4">
            Learn more about us
          </p>
        </div>
        <div
          className={twJoin(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
          )}
        >
          {listBlog?.map((item, index) => (
            <BlogCard
              key={index}
              index={index}
              blogCardData={item}
              className={twJoin(listBlog.length > 3 && 'first:lg:col-span-3')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
