import { Box } from "@chakra-ui/layout"
import { useState } from "react";
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import { GameQuery } from "./HomePage";

const Layout = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
    return (
        <>
            <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    )
}

export default Layout