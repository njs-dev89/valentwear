import { BaseModal, ModalCloseTarget } from "react-spring-modal";
import { FiX } from "react-icons/fi";

const LinksDrawer = ({ children, open = false, onClose }) => {
  return (
    <BaseModal
      isOpen={open}
      onDismiss={onClose}
      contentProps={{
        style: {
          width: "350px",
          position: "absolute",
          background: "black",
          color: "white",
          top: 0,
          left: 0,
          height: "100%",
        },
      }}
      contentTransition={{
        from: { transform: "translateX(-100%)" },
        enter: { transform: "translateX(0)" },
        leave: { transform: "translateX(-100%)" },
      }}
    >
      <ModalCloseTarget>
        <div className="block cursor-pointer m-8">
          <FiX className="text-2xl font-medium" />
        </div>
      </ModalCloseTarget>
      {children}
    </BaseModal>
  );
};

export default LinksDrawer;
