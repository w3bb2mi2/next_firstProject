import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import MainContainer from "../../component/MainContainer";


const Users = ({ users }) => {
    return (
        <MainContainer>
            <>
                <h1>User list</h1>
                {
                    users.map(elem =>
                        <li key={elem.id}>
                            <Link href={`/users/${elem.id}`}>{elem.name}</Link>
                        </li>
                    )
                }
            </>

        </MainContainer>
    )
}

export default Users;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: { users },
    }
}