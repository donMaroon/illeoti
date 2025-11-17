import { Modal, Rate, Progress } from "antd";
import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";

interface RefundPolicyTyp {
  open: boolean;
  handleCancel: () => void;
}
const ReviewsModal = ({ open, handleCancel }: RefundPolicyTyp) => {
  const reviews = [
    {
      name: "Janice",
      date: "Nov 24, 2025",
      rating: 5,
      text: "Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a refined expression of Gérard Bertrand’s commitment to sustainable winemaking and cultural heritage. Housed in a beautifully crafted clay-inspired bottle, this wine is more than a drink—it's an experience of elegance, tradition, and terroir.",
    },
    {
      name: "Janice",
      date: "Nov 24, 2025",
      rating: 4,
      text: "Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a refined expression of Gérard Bertrand’s commitment to sustainable winemaking and cultural heritage.",
    },
    {
      name: "Janice",
      date: "Nov 24, 2025",
      rating: 4,
      text: "Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a refined expression of Gérard Bertrand’s commitment to sustainable winemaking and cultural heritage.",
    },
    {
      name: "Janice",
      date: "Nov 24, 2025",
      rating: 4,
      text: "Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a refined expression of Gérard Bertrand’s commitment to sustainable winemaking and cultural heritage.",
    },
  ];

  const ratingStats = [
    { stars: 5, percent: 80 },
    { stars: 4, percent: 60 },
    { stars: 3, percent: 40 },
    { stars: 2, percent: 20 },
    { stars: 1, percent: 10 },
  ];

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={handleCancel}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "948px",
        xxl: "948px",
      }}
      centered
      closable={false}
      style={{
        borderRadius: 24,
      }}
    >
      <div className="flex flex-col gap-8 px-10 py-8 rounded-3xl">
        {/* Header and Stats */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
            <button onClick={handleCancel}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Rate disabled allowHalf defaultValue={4.9} />
            <span className="font-semibold text-lg">4.9 (146)</span>
          </div>

          <div className="flex flex-col gap-2">
            {ratingStats.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-3">
                <span className="w-4 text-xs font-medium">{stat.stars}</span>
                <Progress
                  percent={stat.percent}
                  showInfo={false}
                  strokeColor="#80011D"
                  trailColor="#F1F1F1"
                  className="flex-1"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-80 overflow-auto no-scrollbar">
          {/* Reviews List */}
          <div className="flex flex-col gap-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-b border-b-[#D9D9D9] pb-4">
                <span className="font-bold text-xl mb-1">{review.name}</span>
                <div className="flex items-center gap-3">
                  <Rate disabled defaultValue={review.rating} />
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="mt-3 font-medium text-base ">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewsModal;
