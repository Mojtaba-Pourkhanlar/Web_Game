import { Box, Heading, Text } from '@chakra-ui/layout'
import { isRouteErrorResponse, useRouteError } from 'react-router'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <Box padding={5}>
            <Heading>Oops</Heading>
            <Text>{
                isRouteErrorResponse(error) ? "This page does not exist." : "An unexpected error occurred."
            }</Text>
        </Box>
    )
}

export default ErrorPage