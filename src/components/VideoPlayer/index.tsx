"use client";

import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader,
} from "@nextui-org/react";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

type VideoPlayerProps = {
  thumbnailImg: string;
  url: string;
  title: string;
};

export const VideoPlayer = ({ thumbnailImg, url, title }: VideoPlayerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative h-[40dvh] w-full">
        <Image
          src={thumbnailImg}
          alt="Thumbnail Image"
          width={1280}
          height={720}
          priority
          className="h-full w-full rounded-md object-cover"
        />
        <Button
          onPress={onOpen}
          className="absolute bottom-6 right-6"
          color="secondary"
          startContent={<PlayCircle size={20} weight="fill" />}
        >
          <span className="font-medium">Watch Trailer</span>
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-2xl font-bold">{title}</h2>
              </ModalHeader>
              <ModalBody>
                <div className="min-w-full">
                  <ReactPlayer
                    className="relative h-full w-full"
                    url={url}
                    controls
                    width="100%"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    //
  );
};
