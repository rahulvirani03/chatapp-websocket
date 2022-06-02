import React from 'react'
import Component from '@components/Home'
import { withContext } from '@components/hoc';

function Home({ user,chats,messageStore }) {
    return (
        <>
            <Component user={user} chats={chats} messageStore={messageStore}/>
        </>
    )
}
export default withContext(Home)