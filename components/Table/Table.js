import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const Table = (props) => {
  const { thead, td_data, showModal, Header,setSearchById,accountsSearch,searchById } = props;
  const unseePass= (data)=>{
    let passEncode
    for(let i =0; i < data.length;i++){
      if(i == 0){
        passEncode = data.split("")[i]
      }else{
        passEncode+= "*"
      }
    }
    return passEncode;
  }
  return (
    <div className="p-5 ">
      <Header showModal={showModal} data={td_data} setSearchById={setSearchById} accountsSearch={accountsSearch} searchById={searchById}/>
      <div className="overflow-auto max-h-[500px] rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              {thead.map((theads, id) => {
                return (
                  <th
                    className="w-20 p-3 text-sm font-semibold tracking-wide text-left"
                    key={id}
                  >
                    {theads.table_name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {td_data.map((td_data, id) => {
              return (
                <tr className="bg-white" key={id}>
                  <td className="p-3 text-sm text-gray-700 border-r">
                    <a
                      className="font-bold text-blue-500 hover:underline cursor-pointer"
                    >
                      {td_data.id}
                    </a>
                  </td>
                  <td className="p-3 text-sm font-sans text-gray-700 border-r">
                    {td_data.role}
                  </td>
                  <td className="p-3 text-sm font-sans text-gray-700 border-r">
                    {/* <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"> */}
                    {td_data.username}
                    {/* </span> */}
                  </td>
                  <td className="p-3 text-sm font-sans text-gray-700 border-r">
                    {/* <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"> */}
                    {unseePass(td_data.password)}
                    {/* </span> */}
                  </td>
                  <td className="p-3 text-sm font-sans text-gray-700 border-r">
                    {td_data.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    <div className="flex flex-row  ">
                      <div className="p-2 bg-green-300 cursor-pointer">
                        <AiFillEdit size={20} onClick={() => showModal(true, "3",id)}/>
                      </div>
                      <div
                        className="p-2 ml-2 bg-red-300 cursor-pointer"
                        onClick={() => showModal(true, "2",id)}
                      >
                        <AiFillDelete size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {td_data.map((td_data, id) => {
        return (
          <div className="grid grid-cols-1 gap-4 p-2 md:hidden" key={id}>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-0 text-sm sm:text-base">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    Id: {td_data.id}
                  </a>
                </div>
              </div>
              <div className="text-xs font-sans uppercase sm:text-base tracking-wider rounded-lg bg-opacity-50">
                {" "}
                Role: {td_data.role}
              </div>
              <div>
                <span className=" text-xs font-sans uppercase sm:text-base tracking-wider rounded-lg bg-opacity-50">
                  Username: {td_data.username}
                </span>
              </div>
              <div>
                <span className=" text-xs font-sans uppercase sm:text-base tracking-wider rounded-lg bg-opacity-50">
                  Password: {unseePass(td_data.password)}
                </span>
              </div>
              <div className="text-xs font-sans uppercase sm:text-base tracking-wider rounded-lg bg-opacity-50">
                Name: {td_data.name}
              </div>
              <div className="text-sm font-medium text-black">
                <div className="flex flex-row">
                  <div
                    className="p-2 bg-green-300 cursor-pointer"
                    onClick={() => showModal(true, "3",id)}
                  >
                    <AiFillEdit size={18} />
                  </div>
                  <div
                    className="p-2 ml-2 bg-red-300 cursor-pointer"
                    onClick={() => showModal(true, "2",id)}
                  >
                    <AiFillDelete size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
