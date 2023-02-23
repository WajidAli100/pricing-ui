import React from "react";
import {Box, Heading, Text} from '@chakra-ui/react'

export function Header(){
    return (
    <Box h='336px' pb='112px' as='section'>
        
        <Box w='994px' color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px' px='32px'>
            <Heading fontWeight='800' fontSize='48px'>
                Simple pricing for your Business</Heading>
            <Text fontWeight='500' fontSize='24px' pt='16px'>
                Plans that are carefull crafted to suit your business</Text>
        </Box>
    </Box>

    )
}