import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"
import classes from './Route.module.css'

export default function Root() {
    return (
        <>
            <MainNav />
            <main className={classes.content}>
                <Outlet />            
            </main>

        </>


    )
}