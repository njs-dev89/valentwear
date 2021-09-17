import { FaTimes } from "react-icons/fa";
import { BaseModal, ModalCloseTarget, ModalTitle } from "react-spring-modal";
import "react-spring-modal/styles.css";

const CartDrawer = ({ children, open = false, onClose }) => {
  return (
    <BaseModal
      isOpen={open}
      onDismiss={onClose}
      contentProps={{
        style: {
          width: "100%",
          maxWidth: "500px",
          position: "absolute",
          background: "white",
          top: 0,
          right: 0,
          height: "100%",
        },
      }}
      contentTransition={{
        from: { transform: "translateX(100%)" },
        enter: { transform: "translateX(0)" },
        leave: { transform: "translateX(100%)" },
      }}
    >
      <div className="relative h-screen">
        <ModalTitle className="text-center relative px-4 py-6 bg-gray-100">
          <span className="text-2xl">Shopping cart</span>
          <ModalCloseTarget>
            <div className="block absolute right-0 bottom-1/2 transform translate-y-1/2 mr-4">
              <FaTimes />
            </div>
          </ModalCloseTarget>
        </ModalTitle>

        {children}
      </div>
    </BaseModal>
  );
};

export default CartDrawer;
