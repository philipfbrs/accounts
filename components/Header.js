import { Navbar } from "./Nav/Navbar"

export const Header = (props) => {
  const {setOpen,open}=props;
  return (
    <div><Navbar setOpen={setOpen} open={open}/></div>
  )
}
