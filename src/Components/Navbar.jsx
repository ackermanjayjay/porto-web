import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-base">Hammad Reza</Link>
                </div>
                <div className="flex-1">
                    <Link to='/project' className="btn btn-ghost text-base">Projects</Link>
                </div>
                <div className="flex-1">
                    <Link to='/about' className="btn btn-ghost text-base">About</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}