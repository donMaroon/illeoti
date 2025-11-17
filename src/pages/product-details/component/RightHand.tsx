import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";

const RightHandSideProductDetail = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ImagesAndIcons.furasgnBottle})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex h-166 w-[90%] mx-auto lg:w-full flex-col justify-end rounded-3xl items-center"
    >
      {/* Thumbnails */}
      <div className="flex gap-2 bg-white p-2.5 mb-5 rounded-2xl overflow-x-auto">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-19 w-17 rounded-sm overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              src={ImagesAndIcons.furasgnBottle}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightHandSideProductDetail;
