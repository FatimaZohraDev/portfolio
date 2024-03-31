import Link from "next/link";

const NavBar=()=>{
    return <div className="flex"><nav className="mr-4">
        <ul className="flex gap-x-4 text-[13px]">
            <li><Link href=""  className="text-slate-400"><span className="text-primary text-xs">01. </span>About</Link></li>
            <li><Link href="" className="text-slate-400"><span className="text-primary text-xs">02. </span>Experience</Link></li>
            <li><Link href="" className="text-slate-400"><span className="text-primary text-xs">03. </span>Work</Link></li>
            <li><Link href="" className="text-slate-400"><span className="text-primary text-xs">04. </span>Contact</Link></li>
        </ul>
    </nav>
    <button className="border-solid border px-4 py-2 rounded border-primary text-slate-400 text-[13px]">Resume</button>
    </div>
}
export default NavBar;