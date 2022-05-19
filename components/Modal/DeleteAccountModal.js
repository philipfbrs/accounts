
export const DeleteAccountModal = (props) => {
    const {closeModal,notify,setAccount,account,index,setEmptyAccounts} = props
    const handleClose =() =>{
        closeModal();
    }   
    const handleDelete =() =>{
      notify("success","Successfully Deleted")
      const newAccounts = [...account]
      newAccounts.splice(index,1)
      setAccount(newAccounts)
      setEmptyAccounts(newAccounts)      
      closeModal();
  }   
  return (
    <div className="flex flex-col px-4 items-center ">
      <h1 className="p-4 text-lg tracking-wider">
        Are you sure you want to delete this?
      </h1>
      <div>
        <button className="bg-green-300 p-4 px-7 mr-2 rounded-md" onClick={handleDelete}>Yes</button>{" "}
        <button className=" ml-2 bg-red-300 p-4 rounded-md" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};
