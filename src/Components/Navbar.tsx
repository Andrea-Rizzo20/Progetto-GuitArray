import { Link } from "react-router-dom";
import { store } from "../Store";
import { userState } from "../States/userState";
import { useTranslation } from 'react-i18next'
const Navbar = () =>{
    const { t } = useTranslation();
    store.subscribe(() => console.log(store.getState()))

    const loginHandle = () =>{
        store.dispatch(userState.actions.login())
    }

    const logoutHandle = () =>{
        store.dispatch(userState.actions.logout())
    }

    return(
        <nav className="w-full flex flex-row justify-between px-10 py-5 bg-slate-600">
            <Link to='/'> <img src="" alt="nav-logo" /></Link>
            <div className="flex flex-row align-center gap-6" >
                <button onClick={loginHandle}>{t("navbar.login")}</button>
                <button onClick={logoutHandle}>{t("navbar.logout")}</button>
                <button >{t("navbar.signUp")}</button>
            </div>
        </nav>
    )
}

export default Navbar;