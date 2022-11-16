import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState(true)
  const [dropDown, setDropDown] = useState(false)

  return (
      <>
        <header className="mx-auto p-5 text-white max-w-[1240px]">
          <div className="upper-nav">
            <div className="flex justify-between items-center">
              <Link to="/"><h1 className="font-extrabold text-3xl md:text-2xl">Keyboardist</h1></Link>
              {search ? <DeskSearch /> : ""}

              <div className="icons flex">
                {/*<div className="icon hidden md:block" onClick={()=>setSearch(true)}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"*/}
                {/*         stroke="currentColor" className="w-8 h-8">*/}
                {/*        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>*/}
                {/*    </svg>*/}

                {/*</div>*/}
                <Link to="signup">
                  <div className="icon ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>

                  </div>
                </Link>
                <Link to="cart">
                    <div className="icon ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                        </svg>
                    </div>
                </Link>

              </div>
            </div>
          </div>

          {/*Mobile Nav*/}
          {!isOpen ? (<div className="lower-nav-mobile mt-8 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </div>
          </div>) : ""}

          <ul className={isOpen ? ' font-bold z-[6] fixed left-0 top-0 w-full h-full text-2xl border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-out duration-500 fixed left-[-100%]'}>
            <div className="flex justify-between items-center">
              <h1 className='w-full text-3xl font-bold text-cyan-400 m-4'>Keyboardist</h1>
              <div onClick={() => setIsOpen(false)} className='block md:hidden mr-2'>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>) : ""}
              </div>
            </div>
            <li>
              <Search />
            </li>
            <li className="p-4 border-b border-gray-600" onClick={()=>setDropDown(!dropDown)}><p className="flex">Shop
              <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-4 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                            </svg>
</span></p>
              {dropDown ? <MobDropDown/> : ""}</li>
            <li className="p-4 border-b border-gray-600"><Link to="/typing">Typing</Link></li>
            <li className="p-4 border-b border-gray-600"><Link to="/wiki">Wiki</Link></li>
            <li className="p-4 border-b border-gray-600"><Link to="/about">About us</Link></li>
          </ul>





          {/*Desktop Nav*/}

          <div className="lower-nav mt-8 hidden sm:block">
            <ul className="flex font-bold text-2xl relative">
              <li className=""><Link to="/">Home</Link></li>
              <li className="ml-16 relative" id="navShop"><p className="flex items-center" >Shop
                <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="3"
                                 stroke="currentColor" className="w-4 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                            </svg>
</span></p>
                {<DeskDropDown />}
              </li>
              <li className="ml-16"><Link to="/typing">Typing</Link></li>
              <li className="ml-16"><Link to="/wiki">Wiki</Link></li>
              <li className="ml-16"><Link to="/about">About us</Link></li>
            </ul>
          </div>

        </header>
        <Outlet/>
      </>
  )
}


class DeskDropDown extends React.Component {
  render() {
    return (
        <div className="dropdown hidden absolute left-0" id="navDrop">
          <ul className="py-4 px-4 text-xl">
            <li className="py-1 hover:border-b-2 hover:text-cyan-100">
              <Link to="/shop">All items</Link>
            </li>
            <li className="py-1 hover:border-b-2 hover:text-cyan-100">
              <Link to="">Keyboards</Link>
            </li>
            <li className="py-1 hover:border-b-2 hover:text-cyan-100">
              <Link to="">Switches</Link>
            </li>
          </ul>
        </div>
    )
  }
}

class MobDropDown extends React.Component {
  render() {
    return (
        <div className="dropdown">
          <ul className="pl-4 py-4">
            <li className="py-1">
              <Link to="/shop">All items</Link>
            </li>
            <li className="py-1">
              <a href="">Keyboards</a>
            </li>
            <li className="py-1">
              <a href="">Switches</a>
            </li>
          </ul>
        </div>
    )
  }
}

class DeskSearch extends React.Component {
  render() {
    return (
        <div className={'py-4 md:py-0 flex-1 px-16 hidden sm:block'}>
          <form>
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input type="search" id="default-search"
                     className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search"/>
              <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
        <div className={'py-4 md:py-0 flex-1 px-16'}>
          <form>
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input type="search" id="default-search"
                     className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search"/>
              <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
            </div>
          </form>
        </div>
    );
  }
}


export default Navbar
