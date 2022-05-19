import { Main } from "../components/Main";
import { Header } from "../components/Header";
import Modal from "../components/Modal";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [account, setAccount] = useState([]);
  const [emptyAccounts, setEmptyAccounts] = useState([]);
  const [searchById, setSearchById] = useState("");
  const [index,setIndex] = useState("");
  const [open,setOpen] = useState(false)
  const accountsSearch = (query,target) => {
    let tempAcc
    setSearchById(target)
    switch (query) {
      case "1":
        tempAcc = [...account]
        setAccount(account.filter((x) => { return x.id.includes(searchById); }));
        break;
      case "2":       
        tempAcc = [...emptyAccounts]
        setAccount(tempAcc)  
        break;
    }
    return null
  };
  const notify = (notification, message) => {
    switch (notification) {
      case "success":
        return toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      case "error":
        return toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
    }
  };

  const addUser = () => {
    const addUser = [...account];
    addUser.push({
      id: uuidv4(),
      role: role,
      username: username,
      password: password,
      name: firstname + " " + lastname,
    });
    setAccount(addUser);
    setEmptyAccounts(addUser)
    notify("success", "Successfully added");
  };
  const showModal = (isOpen, num,index) => {
    setIndex(index)
    setNumber(num);
    setShow(isOpen);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <Header setOpen={setOpen} open={open}/>
      <Main show={show} showModal={showModal} account={account} setSearchById={setSearchById} accountsSearch={accountsSearch} searchById={searchById} />
      <Modal
        show={show}
        closeModal={closeModal}
        number={number}
        setAccount={setAccount}
        setRole={setRole}
        setUsername={setUsername}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setPassword={setPassword}
        addUser={addUser}
        notify={notify}
        index={index}
        account={account}
        setEmptyAccounts={setEmptyAccounts}
        username={username}
        password={password}
        firstname={firstname}
        lastname={lastname}
        role={role}
      />
      <ToastContainer />
    </div>
  );
}
