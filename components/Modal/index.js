import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { AddAccountModal } from "../../components/Modal/AddAccountModal";
import styles from "../../styles/Modal.module.css";
import { DeleteAccountModal } from "./DeleteAccountModal";
import { EditAccountModal } from "./EditAccountModal";
const Modal = (props) => {
  const {
    show,
    closeModal,
    number,
    setRole,
    setUsername,
    setPassword,
    setFirstname,
    setLastname,
    addUser,
    notify,
    index,
    setAccount,
    account,
    setEmptyAccounts,
    username,
    password,
    firstname,
    lastname,
    role,
  } = props;
  const [isBrowser, setIsBrowser] = useState(false);
  const ContentModal = () => {
    switch (number) {
      case "1":
        return (
          <AddAccountModal
            onClose={closeModal}
            setRole={setRole}
            setUsername={setUsername}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setPassword={setPassword}
            addUser={addUser}
            closeModal={closeModal}
          />
        );

      case "2":
        return (
          <DeleteAccountModal
            closeModal={closeModal}
            notify={notify}
            index={index}
            setAccount={setAccount}
            account={account}
            setEmptyAccounts={setEmptyAccounts}
          />
        );
      case "3":
        return (
          <EditAccountModal
            onClose={closeModal}
            setRole={setRole}
            setUsername={setUsername}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setPassword={setPassword}
            setAccount={setAccount}
            addUser={addUser}
            index={index}
            account={account}
            closeModal={closeModal}
            username={username}
            password={password}
            firstname={firstname}
            lastname={lastname}
            setEmptyAccounts={setEmptyAccounts}
            role={role}
          />
        );
    }
    return null;
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleClose = (e) => {
    e.preventDefault();
    closeModal();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>{ContentModal()}</div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default Modal;
