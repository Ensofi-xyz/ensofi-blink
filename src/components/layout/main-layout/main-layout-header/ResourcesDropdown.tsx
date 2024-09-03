'use client';

import React from 'react';
import {
  DropdownRoot,
  DropdownItem,
  DropdownContent,
  DropdownTrigger,
} from '@/components/common';
import {
  BlogIcon,
  ChatIcon,
  TwitterIcon,
  DiscordIcon,
} from '@/components/icons';
import { twMerge } from 'tailwind-merge';

import { PathConstant } from '@/const';

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ children }) => {
  return (
    <DropdownRoot>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownContent className="w-48" align="start">
        <ResourcesItem href={PathConstant.TWITTER_URL}>
          <TwitterIcon /> Twitter
        </ResourcesItem>

        <ResourcesItem href={PathConstant.DISCORD_LINK}>
          <DiscordIcon /> Discord
        </ResourcesItem>

        <ResourcesItem href={PathConstant.BLOG_LINK}>
          <BlogIcon /> Blog
        </ResourcesItem>

        <ResourcesItem href={PathConstant.SUPPORT_LINK}>
          <ChatIcon />
          Support
        </ResourcesItem>
      </DropdownContent>
    </DropdownRoot>
  );
};

export default ResourcesDropdown;

interface ResourcesDropdownProps
  extends React.ComponentPropsWithoutRef<'div'> {}

const ResourcesItem: React.FC<ResourcesItemProps> = ({
  href,
  children,
  className,
  itemClassName,
  ...otherProps
}) => {
  return (
    <DropdownItem className={twMerge('w-full', itemClassName)}>
      <a
        href={href}
        target="_blank"
        className={twMerge('text-sm', 'flex items-center gap-x-1', className)}
        {...otherProps}
      >
        {children}
      </a>
    </DropdownItem>
  );
};

interface ResourcesItemProps extends React.ComponentPropsWithoutRef<'a'> {
  itemClassName?: string;
}
