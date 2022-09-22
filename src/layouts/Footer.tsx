import React from "react";

import { Divider } from "antd";


const Footer = () => (
    <footer className="py-3 text-center md:text-left">
        <Divider className="border-gray-300 mb-3" />
        <p className="font-poppins mx-3">© {new Date().getFullYear()} Team Kat</p>
    </footer>
)

export default Footer;
