import React from 'react';
import NavBar from '../components/Nav';

export default function Index() {
  return (
    <div className="landing w-full ">
      <div className="main bg-purple-600">
        <NavBar bg="transparent" />

        <div className="container px-24 grid grid-cols-2">
          <div className="col-1 py-32">
            <p className="title text-white text-5xl font-bold capitalize w-3/4">
              Special way to reliaze your own business.
            </p>

            <p className="title text-white text-lg font-bold capitalize py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsa itaque deleniti debitis velit iure libero. Vel voluptatibus
              quisquam voluptate totam perferendis. Iste recusandae architecto
              repudiandae facere porro nulla laudantium!
            </p>

            <div className="content-btn flex justify-between w-6/12">
              <a href="/users" className="bg-green-300 text-white cursor-pointer font-medium px-6 py-2 rounded-2xl">
                Go to Users
              </a>
              <button className="outline-whiteSolid text-white cursor-pointer px-6 py-2 rounded-2xl">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="col-2">2</div>
        </div>
      </div>
      <div className="rs container px-24 flex pt-12">
        <p className="text-gray-400 font-medium">
          Find us Here <span className="text-red-900">-</span>
        </p>
      </div>
    </div>
  );
}
