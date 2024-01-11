import AddStoreButton from '../AddStoreButton';
import CurrentLocationButton from '../CurrentLocationButton';

import ProfileButton from '@components/main/ProfileButton';

export default function BottomNavigation() {
  const handleClickLocationButton = () => {
    // NOTE: 현재 내 위치로 이동
  };

  return (
    <div className="flex justify-between gap-[16px] w-full h-[128px] px-[24px] py-[16px]">
      <CurrentLocationButton onClick={handleClickLocationButton} />
      <AddStoreButton />
      <ProfileButton />
    </div>
  );
}
