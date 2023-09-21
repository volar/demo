import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/good-bad-ugly.png"
              alt="Precedent Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">About Me</h3>
          <p className="text-sm text-gray-500">
          T-Shaped Engineer with 13 years of experience in systems architecture, development, deployment, and administration. Thrive in dynamic startup and corporate environments. Enthusiastic team player with a love for nature and sports, and driven by a relentless passion for learning and innovation. Currently specializing in modern web application development, cutting-edge systems architecture, automation , and efficient implementation strategies.

Strong can do mentality and not afraid to lead developers and other engineers to assure correct code and design is being implemented and delivered. 

With over 13 years of ownership, I have accumulated valuable hands-on experience in managing a farm in Serbia. My expertise spans both organic and conventional farming methods, encompassing crop cultivation and animal husbandry.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
