import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";
import Button from "../../../components/btns/Button";

const ExploreSection = () => {
  return (
    <div className="bg-primary py-15">
      <div className="w-[90%] lg:w-full mx-auto ">
        <h3 className="text-center mb-15 font-semibold text-3xl text-white">
          EXPLORE OUR WORLD
        </h3>
        <div className="flex w-full justify-center flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <div
              style={{
                backgroundImage: `url(${ImagesAndIcons.spirit})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-full h-39 md:h-57 lg:w-132 lg:h-135 rounded-2xl overflow-hidden relative group"
            >
              <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex items-center flex-col justify-center 
                  lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-500"
              >
                <h4 className="text-xl lg:text-4xl text-white mb-6 font-medium w-93 text-center">
                  Crafted Spirits, Classic Sips
                </h4>
                <div className="w-29 md:w-55">
                  <Button type="white" label="Shop Now" className="text-[#80011D]"/>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${ImagesAndIcons.iceSlucshy})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="lg:w-132 w-full rounded-2xl h-39 md:h-57 overflow-hidden relative group"
            >
              <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex items-center flex-col justify-center 
                  lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-500"
              >
                <h4 className="text-xl lg:text-4xl text-white mb-6 font-medium w-93 text-center">
                  Ice, Slushy, & Hangover Kits
                </h4>
                <div className="w-29 md:w-55">
                  <Button type="white" label="Shop Now" className="text-[#4F664A]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              style={{
                backgroundImage: `url(${ImagesAndIcons.soda})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="lg:w-132 w-full rounded-2xl h-39 md:h-57 overflow-hidden relative group"
            >
              <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex items-center flex-col justify-center 
                  lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-500"
              >
                <h4 className="text-xl lg:text-4xl text-white mb-6 font-medium w-93 text-center">
                  Unrivalled Mixers & Soft Drinks
                </h4>
                <div className="w-29 md:w-55">
                  <Button type="white" label="Shop Now"  className="text-[#250D00]"/>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${ImagesAndIcons.giftBoxes})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-full h-39 md:h-57 lg:w-132 lg:h-135 rounded-2xl overflow-hidden relative group"
            >
              <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex items-center flex-col justify-center 
                  lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-500"
              >
                <h4 className="text-xl lg:text-4xl text-white mb-6 font-medium w-93 text-center">
                  Curated Gifting & Celebration Boxes
                </h4>
                <div className="w-29 md:w-55">
                  <Button type="white" label="Shop Now" className="text-[#250D00]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
