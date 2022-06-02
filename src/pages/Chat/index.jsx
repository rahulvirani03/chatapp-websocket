import React from 'react'
import Component from '@components/Chat'
import { withContext } from '@components/hoc';

function Chat({user,chats,messageStore}) {
    return (
        <>
            <Component user={user} chats={chats} messageStore={messageStore}/>
        </>
    )
}
export default withContext(Chat)