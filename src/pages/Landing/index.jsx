import React from 'react'
import Component from '@components/Landing'
import { withContext } from '@components/hoc';

function Landing({ user }) {
    return (
        <>
            <Component user={user} />
        </>
    )
}
export default withContext(Landing)