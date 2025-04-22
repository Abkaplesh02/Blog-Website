import logoPic from "./../public/logo.png"
const Navbar=()=>{
    return (
        <div> 

        <div>
            <img src={logoPic} className="w-8 h-8" alt="" />
            <span>AbVlogs</span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">M</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">D</div>

        </div>
    )
}

export default Navbar;