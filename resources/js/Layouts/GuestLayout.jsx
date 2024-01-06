import { Footer } from "@/GuestComponents/Footer";
import { NavbarDefault } from "@/GuestComponents/NavbarDefault";

export default function Guest({ children }) {
    return (
        <>
            <NavbarDefault />
            <div className="w-full" id="guest">{children}</div>
            <Footer />
        </>
    );
}
