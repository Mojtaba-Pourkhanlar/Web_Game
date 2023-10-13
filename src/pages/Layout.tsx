import React from 'react'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} /> */}
            <Outlet />
        </>
    )
}

export default Layout