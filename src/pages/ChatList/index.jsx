import React from 'react'
import Component from '@components/ChatList'
import { withContext } from '@components/hoc';

function ChatList({}) {
    return (
        <>
            <Component />
        </>
    )
}
export default withContext(ChatList)