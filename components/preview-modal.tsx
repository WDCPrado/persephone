"use client";

import Gallery from "@/components/gallery";
import Modal from "@/components/ui/modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import InfoPreview from "./info-preview";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const variant = usePreviewModal((state) => state.data);
  if (!variant) return null;
  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={variant.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <InfoPreview data={variant} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
