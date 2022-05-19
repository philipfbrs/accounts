import { FaWindowClose } from "react-icons/fa";

export const AddAccountModal = (props) => {
  const {
    onClose,
    setRole,
    setUsername,
    setPassword,
    setFirstname,
    setLastname,
    addUser,
    closeModal,
  } = props;
  const submit = () => {
    addUser();
    setRole("");
    setUsername("");
    setPassword("");
    setFirstname("");
    setLastname("");
    onClose();
  };
  const handleClose = (e) => {
    e.preventDefault();
    setRole("");
    setUsername("");
    setFirstname("");
    setPassword("");
    setLastname("");
    closeModal();
  };
  return (
    <div>
      <div className="flex justify-end text-[25px]">
        <a href="#" onClick={handleClose}>
          <button className="btn">
            <FaWindowClose color="gray" />
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center w-96 sm:w-96">
        <h1 className="pb-10 font-bold text-lg">Add Account</h1>
        <div className="p-1 flex flex-col w-full px-4">
          <label className="p-1 text-base font-sans">Role*</label>
          <select
            name="Role"
            className=" w-full p-2 rounded-sm"
            onInput={(e) => setRole(e.target.value)}
          >
            <option>--</option>
            <option>ADMIN</option>
            <option>GUEST</option>
          </select>
        </div>
        <div className="p-1 flex flex-col w-full px-4">
          <label className="p-1 text-base font-sans">Username*</label>
          <input
            type="text"
            className=" w-full p-2 rounded-sm"
            onInput={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="p-1 flex flex-col w-full px-4">
          <label className="p-1 text-base font-sans">Password*</label>
          <input
            type="password"
            className=" w-full p-2 rounded-sm"
            onInput={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="p-1 flex flex-col w-full px-4">
          <label className="p-1 text-base font-sans">First name*</label>
          <input
            type="text"
            className="p-2 rounded-sm"
            onInput={(e) => setFirstname(e.target.value)}
          ></input>
        </div>
        <div className="p-1 flex flex-col w-full px-4">
          <label className="p-1 text-base font-sans">Last name*</label>
          <input
            type="text"
            className="p-2 rounded-sm"
            onInput={(e) => setLastname(e.target.value)}
          ></input>
        </div>
        <input
          type="submit"
          value="Submit"
          className="rounded-md p-4  mt-5 bg-green-300 cursor-pointer"
          onClick={submit}
        ></input>
      </div>
    </div>
  );
};
