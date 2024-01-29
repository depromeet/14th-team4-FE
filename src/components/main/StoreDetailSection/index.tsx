import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useBottomSheet } from '../BottomSheet/contexts/BottomSheetContext';
import StoreInformation from '../StoreInformation';
import { SearchedPinFromSearchParams } from '../StorePreviewSection';
import WriteLogButton from '../WriteLogButton';
import Report from './Report';
import Reviews from './Reviews';

import AnimatePortal from '@components/common/AnimatePortal';
import BookmarkButton from '@components/common/BookmarkButton';
import Header from '@components/common/Header';
import ImageContainer from '@components/common/ImageContainer';
import { useGetReport } from '@hooks/api/useGetReport';
import useGetStore from '@hooks/api/useGetStore';
import useObserver from '@hooks/useObserver';
import cn from '@utils/cn';

export default function StoreDetailSection({
  storeId,
  searchedPinFromSearchParams,
}: {
  storeId?: number;
  searchedPinFromSearchParams?: SearchedPinFromSearchParams;
}) {
  const { isDragging } = useBottomSheet();
  const searchParams = useSearchParams();
  const { data: storeData } = useGetStore({
    storeId: storeId ?? (Number(searchParams.get('storeId')) || undefined),
  });

  const { data: reportData } = useGetReport(storeId ?? null);

  const [isScrollDown, setIsScrollDown] = useState(false);

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    setIsScrollDown(!entry.isIntersecting);
  };

  const { setTarget } = useObserver({
    onIntersect,
  });

  return (
    <div>
      <div ref={setTarget} />
      <AnimatePortal isShowing={!isDragging}>
        <Header
          className={cn('absolute bg-white z-toast', {
            '[&>*>*]:fill-white': reportData?.storeMainImageUrl,
          })}
        >
          {isScrollDown && <span>{storeData?.storeName}</span>}
        </Header>
      </AnimatePortal>

      {reportData?.storeMainImageUrl && (
        <ImageContainer
          type="medium"
          src={reportData.storeMainImageUrl}
          alt="음식점 이미지"
        />
      )}
      <div
        className={cn('w-full', {
          'h-[24px] rounded-t-[24px]': reportData?.storeMainImageUrl,
          'h-[56px]': !reportData?.storeMainImageUrl,
        })}
      />
      <StoreInformation
        categoryName={
          storeData?.categoryName ??
          searchedPinFromSearchParams?.kakaoCategoryName ??
          ''
        }
        storeName={
          storeData?.storeName ?? searchedPinFromSearchParams?.storeName ?? ''
        }
        address={
          storeData?.address ?? searchedPinFromSearchParams?.address ?? ''
        }
        totalRating={storeData?.totalRating ?? 0}
        totalReviewCount={storeData?.totalReviewCount ?? 0}
        myRevisitedCount={storeData?.myRevisitedCount ?? 0}
      />
      <div className="flex gap-[8px] p-[16px]">
        <WriteLogButton
          storeName={
            storeData?.storeName ?? searchedPinFromSearchParams?.storeName ?? ''
          }
          storeId={storeData?.storeId ?? null}
          myRevisitedCount={storeData?.myRevisitedCount ?? 0}
          searchedPinFromSearchParams={searchedPinFromSearchParams}
        />
        {storeData && (
          <BookmarkButton
            isBookmarked={storeData.isBookmarked}
            storeId={storeData.storeId}
          />
        )}
      </div>
      <div className="w-full h-[8px] bg-gray-100" />
      <Report />
      <Reviews />
    </div>
  );
}