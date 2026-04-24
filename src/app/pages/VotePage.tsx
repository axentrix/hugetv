import { useNavigate } from 'react-router';
import Vote from '../../imports/Vote/Vote';

export default function VotePage() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/');
  };

  const handleCardClick = () => {
    console.log('Card clicked - opening swiper');
    navigate('/');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Mobile App Container */}
      <div
        className="relative w-[393px] h-[852px] overflow-hidden shadow-2xl"
      >
        <Vote onArrowClick={handleArrowClick} onCardClick={handleCardClick} />
      </div>
    </div>
  );
}
