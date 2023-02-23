import React from "react";
import { CheckIcon } from "../icons/icon";
import {Features} from "../components/Features"
import {Box, Button,Flex,Heading,HStack,Icon,Stack,StackProps,Text} from '@chakra-ui/react'

export const ListItem =(props: StackProps) =>{
    const {children, ...rest}=props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w="22px" h="22px" />
            <Text>{children}</Text>

        </HStack>
    )
}

export function Pricing(){
    return (
        <Box maxW='994px' margin='auto' mt='-256px' borderRadius='12px' overflow='hidden'>
            <Flex>
                <Box bg='#F0EAFB' p='60px'>
                    <Text fontSize='24px' fontWeight='800'>
                        Premium PRO
                        </Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>
                        $329</Heading>
                    <Text fontWeight='500' color='#171923' fontSize='18px' mt='8px'>
                        billed just once</Text>
                    <Button bg='#6B46C1'size='lg' w='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign='left'>
                        Access these features when you get this pricing package business.
                    </Text>
                    <Stack as='ul' spacing='20px' pt='24px' >
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}