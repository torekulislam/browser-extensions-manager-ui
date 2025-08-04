import React, { useState } from "react";
import ToastNotification from "./ToastNotification";

function UndoRemove() {
  //   const [cards, setCards] = useState(initialData);
  //   const [pendingDelete, setPendingDelete] = useState(null);
  //   const [showToast, setShowToast] = useState(false);

  //   const handleRemove = (id) => {
  //     const itemToDelete = cards.find((item) => item.id === id);
  //     setPendingDelete(itemToDelete);
  //     setShowToast(true);

  //     // Temporarily hide from UI
  //     setCards((prev) => prev.filter((item) => item.id !== id));
  //   };

  //   const handleUndo = () => {
  //     if (pendingDelete) {
  //       setCards((prev) => [pendingDelete, ...prev]);
  //       setPendingDelete(null);
  //       setShowToast(false);
  //     }
  //   };

  //   const handleFinalizeDelete = () => {
  //     // Final delete logic (API or Redux action)
  //     setPendingDelete(null);
  //     setShowToast(false);
  //   };

  return (
    <div>
      <ToastNotification
      // message="Item removed. Undo?"
      //   onUndo={handleUndo}
      //   onClose={handleFinalizeDelete}
      />
      {/* {showToast && pendingDelete && (
        <ToastNotification
          message="Item removed. Undo?"
          //   onUndo={handleUndo}
          //   onClose={handleFinalizeDelete}
        />
      )} */}
    </div>
  );
}

export default UndoRemove;
