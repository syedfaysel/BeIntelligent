import MenuDropdown from "../common_components/MenuDropdown";
import Footer from "../common_components/Footer";
export default function () {
    return (
        <div className="flex flex-col">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BIntellegent</a>
                </div>
                <div className="flex-none gap-2">
                    <MenuDropdown />
                </div>
            </div>
            <Footer />
        </div>
    );
}
