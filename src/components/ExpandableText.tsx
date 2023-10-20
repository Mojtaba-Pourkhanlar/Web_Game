import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import React, { useState } from 'react'

interface Props {
    children: string
}

const ExpandableText = ({ children }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 200

    if (!children) return null;

    if (children.length <= limit) {
        return <Text>{children}</Text>
    }

    const summary = expanded ? children : children.substring(0, limit) + "..."

    return (
        <div>{summary} <Button
            size="xs"
            fontWeight="bold"
            marginLeft={1}
            colorScheme='yellow'
            onClick={() => setExpanded(!expanded)}
        >{expanded ? "Show Less" : "Read More"}</Button></div>
    )
}

export default ExpandableText