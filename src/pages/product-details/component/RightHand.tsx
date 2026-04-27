import { useState } from "react";
import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";
import type { ProductImage } from "../../../types";

interface RightHandSideProductDetailProps {
  images?: ProductImage[];
  primaryImage?: string;
}

const RightHandSideProductDetail = ({
  images,
  primaryImage,
}: RightHandSideProductDetailProps) => {
  const [selected, setSelected] = useState<string | undefined>(primaryImage);

  const thumbs =
    images && images.length > 0
      ? [...images].sort((a, b) => a.sortOrder - b.sortOrder)
      : null;

  const displayImage = selected ?? primaryImage ?? ImagesAndIcons.furasgnBottle;

  return (
    <div
      style={{
        backgroundImage: `url(${displayImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex h-166 w-[90%] mx-auto lg:w-full flex-col justify-end rounded-3xl items-center"
    >
      {/* Thumbnails */}
      <div className="flex gap-2 bg-white p-2.5 mb-5 rounded-2xl overflow-x-auto">
        {(thumbs ?? [1, 2, 3, 4, 5]).map((item, i) => {
          const url = typeof item === "number" ? ImagesAndIcons.furasgnBottle : item.url;
          const key = typeof item === "number" ? i : item.id;
          return (
            <div
              key={key}
              onClick={() => setSelected(url)}
              className={`h-19 w-17 rounded-sm overflow-hidden border cursor-pointer ${
                selected === url ? "border-primary" : "border-gray-200"
              }`}
            >
              <img src={url} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightHandSideProductDetail;
