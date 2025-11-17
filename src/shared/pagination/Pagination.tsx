import { ImagesAndIcons } from "../images-icons/ImagesAndIcons";

interface PaginationProps {
  page: number;
  numberOfPages: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, numberOfPages, setpage }: PaginationProps) => {
  const handleNext = () => {
    if (page < numberOfPages) {
      setpage(page + 1);
    } else {
      setpage(numberOfPages);
    }
  };
  const handlePrevious = () => {
    if (page > 1) {
      setpage(page - 1);
    } else {
      setpage(1);
    }
  };
  return (
    <div className="flex items-center gap-9">
      <button onClick={handlePrevious}>
        <img src={ImagesAndIcons.arrowleftRed} alt="" />
      </button>
      <p className="text-base lg:text-xl font-medium text-black">
        {page} of {numberOfPages}
      </p>

      <button onClick={handleNext}>
        <img src={ImagesAndIcons.arrowrightRed} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
