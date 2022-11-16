import {Link} from "react-router-dom";


const Notfound = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-primary">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-cyan-500 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <Link to="">
                <button className="mt-5">
                    <p className="relative inline-block text-md font-medium text-white  group active:text-cyan-500 focus:outline-none focus:ring">
                    <span
                    className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-500 group-hover:translate-y-0 group-hover:translate-x-0">
                    </span>
                    <span className="relative block px-8 py-3 bg-cyan-300 border border-current">
                        Go Home
                    </span>
                    </p>
                </button>
            </Link>
        </main>
    );
}

export {Notfound};