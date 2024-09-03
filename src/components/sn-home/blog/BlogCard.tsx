'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { marked } from 'marked';
import { DateUtils } from '@/utils';
import { useAppContext } from '@/context';
import { BlogDisplayInterface } from '@/models';
import { twJoin, twMerge } from 'tailwind-merge';

const BlogCard: React.FC<BlogCardProps> = ({
  className,
  blogCardData,
  index,
  ...otherProps
}) => {
  const { listBlog } = useAppContext();

  return (
    <div
      className={twMerge(
        'p-px z-50',
        'rounded-2xl',
        'w-full',
        'bg-ensofiUniqueWrapper',
        className,
      )}
      {...otherProps}
    >
      <div
        className={twJoin(
          'flex flex-col pb-3',
          'cursor-pointer overflow-y-hidden',
          'w-full h-[467px] bg-black2/70 rounded-2xl ',
          listBlog.length > 3 && index === 0 && 'lg:h-[267px] lg:flex-row',
        )}
        onClick={() =>
          window.open(
            `https://mirror.xyz/${blogCardData.address}/${blogCardData.digest}`,
          )
        }
      >
        <img
          src={blogCardData.imgPostUrl}
          alt=""
          className={twJoin(
            'w-full h-[174px] rounded-tl-2xl rounded-tr-2xl',
            listBlog.length > 3 &&
              index === 0 &&
              'lg:h-[267px] lg:w-auto lg:rounded-bl-2xl lg:rounded-tr-none',
          )}
        />
        <div className={twJoin('flex flex-col', 'px-4 pt-4 pb-6')}>
          <p className="font-medium text-lg">{blogCardData.title}</p>
          <div
            className={twJoin(
              'mt-4',
              'flex items-center',
              'text-sm text-white/60',
            )}
          >
            <img
              src={blogCardData.avatarUrl}
              alt=""
              className="w-6 h-6 inline rounded-full"
            />
            <p className="inline ml-2">{blogCardData.posterName}</p>
            <p className="inline text-[40px] ml-2 mb-1.5">&middot;</p>
            <p className="inline ml-2">
              {DateUtils.convertTimestampToDate(blogCardData.timePost)}
            </p>
          </div>
          <div className="text-lg font-normal text-white/60 mt-6 webkit-box">
            <MarkdownRenderer markdown={blogCardData.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

interface BlogCardProps extends ComponentPropsWithoutRef<'div'> {
  blogCardData: BlogDisplayInterface;
  index?: number;
}

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div
      dangerouslySetInnerHTML={createMarkup()}
      className="!text-sm !font-normal"
    />
  );
};
