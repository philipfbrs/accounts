export const Navbar = ({setOpen,open}) => {
  return (
    <div className="p-6 h-16 flex justify-end items-center md:hidden bg-slate-700">

    <div className=" flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
        setOpen(!open)
    }}>
        {/* hamburger button */}
        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
        <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
    </div>

    <div className="hidden md:flex">
        
    </div>
</div>
    )
};
