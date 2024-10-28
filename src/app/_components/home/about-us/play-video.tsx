import Button from "@/components/common/button";
import CancelIcon from "@/components/common/icons/cancel-icon";
import PlayVideoIcon from "@/components/common/icons/play-video-icon";
import useBlockScroll from "@/hooks/use-block-scroll";
import cn from "@/utils/style/cn";
import { useState } from "react";

export default function PlayVideo() {
  const [isOpen, setIsOpen] = useState(false);

  useBlockScroll(isOpen);

  return (
    <>
      <Button
        startIcon={<PlayVideoIcon size={12} className="fill-current" />}
        variant="secondary"
        size="xsm"
        className="flex items-center gap-[10px] text-center text-[13px] font-bold leading-[16px] tracking-[0.05em]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        See on Video
      </Button>

      {isOpen && (
        <>
<<<<<<< HEAD
          <div className="fixed left-[50%] top-[50%] z-[110] h-[90vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] p-[50px] small-screen:h-0 small-screen:pb-[56.25%]">
=======
          <div className="fixed left-[50%] top-[50%] z-[90] h-[90vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] p-[50px] small-screen:h-0 small-screen:pb-[56.25%]">
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
            <iframe
              className="absolute left-0 top-0 z-[100] h-full w-full"
              src="https://www.youtube.com/embed/Y6cwMDpARao?autoplay=1&rel=0&si=-Ahx4FeFrsBCfiAt"
              title="Pet Shop Tour"
              allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <Button
            startIcon={<CancelIcon size={32} className="fill-current" />}
            variant="none"
            size="none"
<<<<<<< HEAD
            className="fixed right-[1vw] top-[1vh] z-[110] text-center"
=======
            className="fixed right-[1vw] top-[1vh] z-[101] text-center"
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <div
            className={cn(
<<<<<<< HEAD
              "fixed inset-0 z-[105] h-[100vh] w-[100vw] bg-overlay_color transition-opacity",
=======
              "fixed inset-0 z-[89] h-[100vh] w-[100vw] bg-overlay_color transition-opacity",
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
              {
                "block opacity-100": isOpen,
                "hidden opacity-0": !isOpen,
              },
            )}
          />
        </>
      )}
    </>
  );
}
