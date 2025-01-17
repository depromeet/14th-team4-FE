import ImageContainer from '@components/common/ImageContainer';

function StoreLogPhotoPreview({ feedImageUrls }: { feedImageUrls: string[] }) {
  return (
    <div className="flex w-full overflow-x-scroll p-[16px]">
      <div className="min-w-max flex gap-[8px]">
        {feedImageUrls.map((url) => (
          <ImageContainer
            key={url}
            type="small"
            src={url}
            alt=""
            className="overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
}

export default StoreLogPhotoPreview;
