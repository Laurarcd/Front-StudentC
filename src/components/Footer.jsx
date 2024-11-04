// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaInstagram, FaUser, FaLock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secundary to-primary text-white pt-10 pb-6">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-10">
          {/* Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Services List</a></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Account</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaUser /> Inicia Sesión</a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaLock /> Registro </a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:underline">Politica De Privacidad</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white text-blue-800 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-blue-800 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-gray-200 opacity-50" />

        {/* Copyright Section */}
        <div className="text-center text-sm">
          <p>Copyright © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
