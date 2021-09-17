import { BaseModal, ModalCloseTarget } from "react-spring-modal";

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
      <ModalCloseTarget>
        <div className="block">X</div>
      </ModalCloseTarget>
      {children}
    </BaseModal>
  );
};

export default CartDrawer;
