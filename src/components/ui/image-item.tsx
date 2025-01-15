'use client';

import Image from 'next/image';
import {useState} from 'react';

type ImageItemProps = {
  src?: string
  alt: string
  width: number
  height: number
  priority?: boolean
  sizes?: string
};
function ImageItem({
  src, alt, width, height, priority = false, sizes,
}: ImageItemProps) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {/*
      when image is not in screen, it will show the loading state
      with the help of the data-loading attr we set the image to invisible
      and position it absolute so that it takes the whole space of the
      loading div, now the image is only gonna be fetched when it is
      in the screen, thanks to lazy loading and while fetching the image
      the loading div will be shown
      */}
      {src && (
      <Image
        data-loading={loading || null}
        priority={priority || undefined}
        sizes={sizes || undefined}
        onLoad={() => {
          setLoading(false);
        }}
        className="w-full h-full object-cover data-[loading]:invisible data-[loading]:absolute"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      )}
      <div data-loading={loading || null} className="w-full h-full bg-secondary-100 rounded-2xl animate-pulse hidden data-[loading]:block" />
    </>
  );
}

ImageItem.displayName = 'ImageItem';

export {
  type ImageItemProps,
  ImageItem,
};
