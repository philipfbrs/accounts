import { AiOutlineSearch, AiOutlineUserAdd,AiFillCloseCircle } from "react-icons/ai";
export const AccHeader = (props) => {
  const { showModal, data, setSearchById, accountsSearch, searchById } = props;
  const checkIfEmpty=(e)=>{
    const target = e.target.value
    if(target == ""){
      accountsSearch("2",target)
    }else{
      accountsSearch("1",target)
    }
   
  }
  return (
    <div>
      <h1 className="text-3xl mb-2 text-center p-4 font-bold">Accounts</h1>
      <div className=" flex flex-col w-full p-3 md:flex-col">
        <div className="flex flex-row w-full">
          <input
            className="p-2"
            placeholder="Search by id"
            onChange={(e) => checkIfEmpty(e)}
            
          ></input>
          <div
            className="p-2 border-2 cursor-pointer"
            onClick={() => accountsSearch("1")}
          >
            <AiOutlineSearch size={25} />
          </div>
          <div className="flex flex-col w-full p-2 items-end">
            <div
              className="flex flex-row w-auto border-2 cursor-pointer font-bold"
              onClick={() => showModal(true, "1")}
            >
              <h1 className="px-2">Add Account</h1>
              <div>
                <AiOutlineUserAdd size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
