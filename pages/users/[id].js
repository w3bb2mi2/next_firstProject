import { useRouter } from "next/router"
import  MainContainer  from "../../component/MainContainer"
import styles from "../../styles/User.module.scss"

export default function ({ user }) {
    const { query } = useRouter()

    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>
                    User with ID {query.id}
                </h1>
                <div>Имя пользователя - {user.name}</div>
                <div>City: {user.address.city}</div>
            </div>
        </MainContainer>

    )
}
//серверный рендеринг-это рендерится на сервере
export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(user)
    return {
        props: { user }
    }
}