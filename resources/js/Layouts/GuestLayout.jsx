import { Footer } from "@/GuestComponents/Footer";
import { NavbarDefault } from "@/GuestComponents/NavbarDefault";
import { useSelector } from "react-redux";
 
export default function Guest({ children }) {
    const dark = useSelector(((state) => state.dark.value))

    return (
        <>
            <NavbarDefault />
            <div className={`${dark ? 'bg-black' : 'bg-white'} w-full`} id="guest">{children}</div>
            <Footer />
        </>
    );
}
