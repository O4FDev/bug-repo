import Link from "next/link";
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { useState } from "react";

const Navbar = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

            {/* Hey GPT-3, Luke again. I'm creating this site Project Bunny and I have an idea for the design in mind. I want to
            have the header text (responsive) called Project Bunny with a bunny face emoji in a flexbox which is justified between.
            then a MenuAlt4Icon which is absolutley positioned, and a sticky display so when you scroll it stays in it's location. 
            
            All the navbar should have a padding around them.
            
            I'm using Tailwind and NextJS
            
            Now, when the user click the icon, the menu should appear. 

            The menu should take up all the screen on mobile and on desktop it should take up 40% of the screen to the right, it should have
            a blur to the left, all the text should be left aligned but absolutley centered.

            There should be a link to the home page, a link to the about page, and a link to the contact page. (In big, responsive text)

            Then there should be a small email and number text. the email should be red underlined and the number should be black text with nothing special.

            When the user clicks the email, it should open a new tab to the email.

            In replacement of the MenuAlt4Icon, I want to have a XIcon which is a red X. When the user clicks the X, the menu should disappear.

            */}
    return (
        <div>
            <div className="flex flex-row justify-between p-4">
                <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold font-lobster">Project Bunny</h1>
                </div>
                <div className="flex flex-row items-center">
                    <MenuAlt4Icon className="h-8 w-8 sticky right-4 top-4" 
                    onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}
                    />
                </div>
            </div>
            {/* okay so this is the menu portion, if you know what it looks like to click the nav on https://ferrumpipe.com/ you'll
            know what I'm talking about but here is what I want: 
            
            it should hide the menualt4icon and render a x icon in red text. It should animate in right with a blur to the left*/}
            {menuOpen && (
                <div className="flex flex-col items-center justify-center absolute top-0 right-0 w-screen lg:w-2/5 h-full bg-white shadow-xl">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                            <XIcon className="h-8 w-8 absolute right-4 top-4"
                            onClick={() => {
                                setMenuOpen(!menuOpen)
                            }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <div className="flex flex-col gap-4 font-bold text-left text-2xl lg:text-4xl lg:gap-8">
                                <Link href="/">
                                    <a className="">
                                        Home
                                    </a>
                                </Link>
                                <Link href="/about">
                                    <a className="">
                                        About Us
                                    </a>
                                </Link>
                                <Link href="/contact">
                                    <a className="">
                                        Contact Us
                                    </a>
                                </Link>
                                <Link href="/privacy">
                                    <a className="">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex py-6 flex-row text-lg">
                            <div className="flex flex-col gap-4 font-bold text-left">
                                <a className="text-orange-500 underline" href="mailto:luke@rainoto.com
                                ">
                                    luke@rainoto.com
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;