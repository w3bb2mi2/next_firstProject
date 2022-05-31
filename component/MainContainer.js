
import Head from "next/head"
import A from "./A"

const MainContainer = ({children}) => {
    console.log(children)
    return (
        <>
        
            <Head>
                <meta keywords={"ulbi tv, nexJS" }></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="Main page" />
                <A href={"/users"} text="Users" />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {
                    `
                    .navbar{
                        background:  #6495ed;
                        padding: 15px;
                        }
    
                    `
                }
            </style>
        </>
        
    )
}

export default MainContainer;