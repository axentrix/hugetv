import { useState, useRef } from 'react';
import svgPaths from "./svg-pc31jg1vfu";
import imgImage from "./61318b253e46e139ac6319f5973e6689839f37ca.png";
import imgImage1 from "./83d57656df37298560dea3fbdf5974831dc14345.png";
import imgImage2 from "./8f6319d43adbcc7db819ef0775fbfd5986d7a366.png";
import imgImage3 from "./c8c433a17dd6dd664ce2a022fa2c3638c36e8142.png";
import imgImage4 from "./04cee61e9e20ea2b41c2dcc199c3602be5b3da05.png";
import imgImage5 from "./56ca3969a18f1bc7234506f82b58de0aeda93569.png";

function HandGesture() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">This is Halloween</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function ChallengeCards({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <div
      className={className || "h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform"}
      data-name="Challenge cards"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-[24px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
          <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
      </div>
      <Group />
      <Frame7 />
    </div>
  );
}

function HandGesture1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture1 />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">Rocket Science</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function HandGesture2() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture2 />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">Rocket Science</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function HandGesture3() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture3 />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">Rocket Science</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function HandGesture4() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture4 />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">Rocket Science</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function HandGesture5() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="hand-gesture_8496145 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="hand-gesture_8496145 1">
          <path d={svgPaths.p2a531c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[5px] top-[36px]">
      <HandGesture5 />
      <p className="font-beni font-bold leading-[29.295px] not-italic relative shrink-0 text-[36.619px] text-center text-white uppercase whitespace-nowrap">VOTE</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[11.71%_46.75%_76.82%_-2.67%]">
      <div className="absolute inset-[11.71%_46.75%_76.82%_-2.67%]">
        <div className="absolute inset-[-5.03%_-2.9%_-5.03%_-1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4864 35.8296">
            <path d={svgPaths.p39a28380} fill="var(--fill-0, #E21DFF)" id="Rectangle 5239" stroke="var(--stroke-0, black)" strokeWidth="1.63858" />
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[8px] inset-[70%_7.06%_9.15%_7.06%] items-start not-italic p-[8px] rounded-[8px] text-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] text-white">
      <p className="font-general-sans font-semibold leading-[16px] relative shrink-0 text-[14px] w-full">Rocket Science</p>
      <p className="font-general-sans font-medium leading-[14px] relative shrink-0 text-[12px] w-full">3.1M Videos</p>
    </div>
  );
}

function Frame13({ onCardClick }: { onCardClick?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - (containerRef.current?.offsetTop || 0));
    setScrollTop(containerRef.current?.scrollTop || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const y = e.pageY - (containerRef.current?.offsetTop || 0);
    const walk = (y - startY) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTop - walk;
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute content-start grid grid-cols-2 gap-[20px] left-[16px] top-[155px] w-[360px] overflow-hidden max-h-[660px] pb-[20px] cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ChallengeCards onClick={onCardClick} />
      <div className="h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform" data-name="Challenge cards" onClick={onCardClick}>
        <div className="absolute inset-0 pointer-events-none rounded-[24px]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage1} />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
        </div>
        <Group1 />
        <Frame8 />
      </div>
      <div className="h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform" data-name="Challenge cards" onClick={onCardClick}>
        <div className="absolute inset-0 rounded-[24px]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage1} />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage2} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
        </div>
        <Group2 />
        <Frame9 />
      </div>
      <div className="h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform" data-name="Challenge cards" onClick={onCardClick}>
        <div className="absolute inset-0 rounded-[24px]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage1} />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage2} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage3} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
        </div>
        <Group3 />
        <Frame10 />
      </div>
      <div className="h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform" data-name="Challenge cards" onClick={onCardClick}>
        <div className="absolute inset-0 rounded-[24px]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage1} />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage2} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage3} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage4} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
        </div>
        <Group4 />
        <Frame11 />
      </div>
      <div className="h-[284px] overflow-clip relative cursor-pointer hover:scale-105 transition-transform" data-name="Challenge cards" onClick={onCardClick}>
        <div className="absolute inset-0 rounded-[24px]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage1} />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 72.183%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" }} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage2} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage3} />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage5} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#e21dff] border-solid inset-0 rounded-[24px]" />
        </div>
        <Group5 />
        <Frame12 />
      </div>
    </div>
  );
}

function FilterTabs({ activeFilter, onFilterChange }: { activeFilter: string; onFilterChange: (filter: string) => void }) {
  const filters = ['Accepting Votes', 'Accepting Submissions', 'Upcoming', 'Ended'];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute left-[16px] top-[100px] w-[361px] overflow-hidden pb-[8px] cursor-grab active:cursor-grabbing"
      style={{ scrollBehavior: 'smooth' }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex gap-[8px] flex-nowrap select-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-[12px] py-[6px] rounded-[16px] whitespace-nowrap text-[12px] font-medium transition-colors flex-shrink-0 ${
              activeFilter === filter
                ? 'bg-[#E21DFF] text-white'
                : 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)]'
            }`}
            draggable={false}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

function Frame({ onArrowClick }: { onArrowClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onArrowClick?.();
  };

  return (
    <div className="absolute content-stretch flex items-start left-[10px] top-[36px]">
      <div
        className="overflow-clip relative shrink-0 size-[28px] cursor-pointer hover:scale-110 transition-transform"
        data-name="Icons"
        onClick={handleClick}
      >
        <div className="absolute inset-[10.71%_28.57%_10.71%_21.43%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
            <path d={svgPaths.p9ab4c00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-beni font-bold leading-[44.8px] not-italic relative shrink-0 text-[56px] text-center text-white uppercase w-[330px]">Challenges</p>
    </div>
  );
}

export default function Vote({ onArrowClick, onCardClick }: { onArrowClick?: () => void; onCardClick?: () => void }) {
  const [activeFilter, setActiveFilter] = useState('Accepting Votes');

  return (
    <div className="bg-black overflow-clip relative rounded-[44px] size-full" data-name="Vote">
      <Frame13 onCardClick={onCardClick} />
      <Frame onArrowClick={onArrowClick} />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="absolute h-[13px] left-0 top-[calc(100%-13px)] w-[393px]" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
      <div className="-translate-x-1/2 absolute h-[13px] left-1/2 top-[calc(100%-13px)] w-[393px]" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}
