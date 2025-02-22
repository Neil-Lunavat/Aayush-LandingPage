import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white py-6 mt-10 border-t border-neutral-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <p className="text-sm text-neutral-500">
                    &copy; 2025 Traders. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="#"
                        className="text-neutral-500 hover:text-orange-500"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-500 hover:text-orange-500"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-500 hover:text-orange-500"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-500 hover:text-orange-500"
                    >
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
