import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import logo from "../assets/Frame.png"


const Navbar: React.FC<{login: boolean, setLogin: any}> = ({login, setLogin}) => {

    const { t } = useTranslation();




    return(
        <nav className="w-full flex flex-row justify-between px-10 py-4 bg-slate-600">
            <Link to='/'> <img src={logo} alt="nav-logo" className="w-14 h-14" /></Link>
            <div className="flex flex-row align-center gap-6" >
                {login
                ? <button className="text-stone-100 text-xl" onClick={()=>setLogin(false)}>{t("navbar.logout")}</button>
                : <button className="text-stone-100 text-xl" onClick={()=>setLogin(true)}>{t("navbar.login")}</button>}
                {!login && <button className="text-stone-100 text-xl" >{t("navbar.signUp")}</button>}
            </div>
        </nav>
    )
}

export default Navbar;