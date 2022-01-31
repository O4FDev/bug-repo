import Link from "next/link";
import { MenuAlt4Icon } from '@heroicons/react/outline'

const Navbar = (props) => {
    return (
        <nav className="flex flex-row justify-between p-4">
            <h1>Project Bunny</h1>
            <div>
                <MenuAlt4Icon className="w-8 absolute" />
            </div>            
        </nav>
    );
};

export default Navbar;