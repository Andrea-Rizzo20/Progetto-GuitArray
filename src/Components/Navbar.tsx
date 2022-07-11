import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import logo from "../assets/Frame.png"
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../States/userState";
import { store } from "../States/store";

type Props = {}

const Navbar = ( props: Props ):JSX.Element => {

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const isLogin = useSelector((state: any) => state.isLoggedIn.logged)


    console.log(login)
    console.log(store.getState())

    const setLogin = () => {
        dispatch(login())
    }
    const setLogout = () => {
        dispatch(logout())
    }


    return(
        <nav className="w-full flex flex-row justify-between px-10 py-4 bg-slate-600">
            <Link to='/'> <img src={logo} alt="nav-logo" className="w-14 h-14" /></Link>
            <div className="flex flex-row align-center gap-6" >
                {!isLogin && <button className="text-stone-100 text-xl" onClick={setLogin}>{t("navbar.login")}</button>}
                {isLogin && <button className="text-stone-100 text-xl" onClick={setLogout}>{t("navbar.logout")}</button>}
                {!isLogin && <button className="text-stone-100 text-xl" >{t("navbar.signUp")}</button>}
            </div>
        </nav>
    )
}

export default Navbar;