import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="mx-auto max-w-8xl px-2 sm:px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-700" : ""
                      } active:bg-gray-900 hover:bg-gray-700 hover:text-white text-white rounded-md px-3 py-2 text-sm font-medium`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-700" : ""
                      } active:bg-gray-900 hover:bg-gray-700 hover:text-white text-white rounded-md px-3 py-2 text-sm font-medium`
                    }
                    to="/favourites"
                  >
                    Favourites
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
