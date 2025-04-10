import { Outlet } from "react-router";
import { AppBar } from "../components/AppBar/AppBar";

const SharedLayout = () => {
  return (
    <>
        <header>
            <AppBar />
        </header>
        <main>
            <Outlet />
        </main>
    </>
    
  )
}

export default SharedLayout