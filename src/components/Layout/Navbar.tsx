import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        id="Nav"
        className="flex z-50 p-7 border-b-2 h-28 border-pink-500 bg-transparent backdrop-filter backdrop-blur overflow-hidden justify-between items-center shadow-lg sticky top-0 bg-slate-900 "
      >
        <div className="flex ">
          <h1 className=" float-left mx-4    font-bold text-2xl text-violet-700 font-Japan hover:border-b-2 border-violet-700 ">
            フェルディナンド.
          </h1>
        </div>
        <div className=" hidden md:flex float-left items-center justify-between">
          <div className=" mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
            <Link to="/transaksi" className="text-violet-700">
              Transaksi
            </Link>
          </div>
          <div className=" mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
            <Link to="/category" className="text-violet-700">
              Category
            </Link>
          </div>
          <div className=" mx-4 font-bold text-sky-50 hover:border-b-2 border-violet-700">
            <Link to="/report" className="text-violet-700">
              Report
            </Link>
          </div>
          <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
            <Link to="/history" className="text-violet-700">
              History
            </Link>
          </div>
          <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
            <a className="text-violet-700" href="{{ route('logout') }}">
              logout
            </a>
          </div>
          <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
            <a className="text-violet-700" href="#">
              nama user
            </a>
          </div>
        </div>
        {/* <!-- Mobile menu button --> */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden mobile-menu bg-white shadow-lg w-[150px] "
          style={{ border: "10px solid black" }}
        >
          <ul className="">
            <li>
              <div className=" mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
                <a
                  className="text-violet-700"
                  href="{{route('transaksi.create')}}"
                >
                  Transaksi
                </a>
              </div>
            </li>
            <li>
              <div className=" mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
                <a
                  className="text-violet-700"
                  href="{{route('kategori.index')}}"
                >
                  Kategori
                </a>
              </div>
            </li>
            <li>
              <div className=" mx-4 font-bold text-sky-50 hover:border-b-2 border-violet-700">
                <a
                  className="text-violet-700"
                  href="{{ route('transaksi.report') }}"
                >
                  Report
                </a>
              </div>
            </li>
            <li>
              <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
                <a
                  className="text-violet-700"
                  href="{{route('transaksi.index')}}"
                >
                  History
                </a>
              </div>
            </li>
            <li>
              <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
                <a className="text-violet-700" href="{{ route('logout') }}">
                  Logout
                </a>
              </div>
            </li>
            <li>
              <div className="mx-4 font-bold  text-sky-50 hover:border-b-2 border-violet-700">
                <a className="text-violet-700" href="#">
                  Nama user
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
