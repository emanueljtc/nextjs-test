import React, { useState } from 'react';

const NavBar = ({ bg = 'bg-purple-600' }) => {
  const [menu] = useState([
    {
      id: 1,
      title: 'about',
      path: '/',
    },
    {
      id: 2,
      title: 'services',
      path: '/',
    },
    {
      id: 3,
      title: 'contact',
      path: '/',
    },
  ]);
  return (
    <nav className={`"mx-aut0 ${bg} font-semibold py-8 pt-4"`}>
      <div className="container px-24 grid grid-cols-2">
        <div className="nameApp">
          <p className="text-white uppercase font-serif text-5xl">Fluido</p>
        </div>
        <div className="nav-links flex items-center justify-end">
          {menu.map((link) => {
            return (
              <div className="link mx-8" key={link.id}>
                <a href="/" className="text-white capitalize">{link.title}</a>
              </div>
            );
          })}
          <button className="bg-white px-6 py-2 rounded-2xl">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
