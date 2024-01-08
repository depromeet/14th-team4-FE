'use client';

import Marker from '@components/common/Pin/Marker';

interface PinProps {
  storeName: string;
  isBookmarked: boolean;
  totalVisitCount: number;
}

export default function Pin({
  storeName,
  isBookmarked,
  totalVisitCount,
}: PinProps) {
  return (
    <div className="w-[72px] h-[100px] flex flex-col justify-center items-center">
      <Marker isBookmarked={isBookmarked} totalVisitCount={totalVisitCount} />
      <p className="body-14-extraBold text-gray-900 text-stroke mt-[4px]">
        {storeName}
      </p>
      {/* TODO: 총 방문자 수 TAG 넣기 */}
      <div className="w-[46px] h-[20px] color-grey-700"></div>
    </div>
  );
}