import MyPageFeed from '@components/mypage/MyPageFeed';
import BackgroundImage from 'public/assets/image/mypage/background.png';
import HamburgerImage from 'public/assets/image/hamburger.jpeg';
import KimBabImage from 'public/assets/image/kimbab.jpeg';
import { Feed } from '@components/feed/Feed';

export default function page() {
  return (
    <div>
      <div className="flex mb-[24px]">
        <MyPageFeed alt="피드 이미지" src={HamburgerImage} />
        <MyPageFeed alt="피드 이미지" src={HamburgerImage} />
        <MyPageFeed alt="피드 이미지" src={KimBabImage} />
      </div>

      <Feed>
        <Feed.Date>2023.04.01</Feed.Date>
        <Feed.Profile
          id="1"
          src={BackgroundImage}
          nickName="필환이"
          alt="프로필 이미지"
          isMyFeed={false}
        />
        <Feed.Image
          src={HamburgerImage}
          alt="피드 음식 사진"
          storeName="쉑쉑버거"
          storeCategory="양식"
          storeLocation="서울 강남"
        />
        <Feed.Description>
          오픈 시간에 맞춰서 갔는데, 생각보다 줄이 길어서 깜짝 놀랐다. 그래도
          빨리 빠져서 30분정도 대기하고 들어가서 먹을 수 있었다. 직원분들도
          친절해서 상당히 기쁜 하루였다.
        </Feed.Description>
      </Feed>
    </div>
  );
}
