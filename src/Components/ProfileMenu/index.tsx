import { Container, Heading, WrapItem, Text, Image, Button, Flex } from "@chakra-ui/react"
import { AtSignIcon } from "@chakra-ui/icons"
import { TbUsers } from "react-icons/tb"
import { AiOutlineMail } from "react-icons/ai"
import { useMediaQuery } from "react-responsive"

type ProfileMenuProps = {
    userData: {
        avatar_url?: string
        html_url?: string
        login?: string
        name?: string
        followers?: number
        following?: number
        email?: string
        stargazers_count?: number
    }
}


const ProfileMenu = (props: ProfileMenuProps) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })

    return (
        <WrapItem>
            <Container
                h={"100vh"}
                w={400}
                maxH={'50em'}
                flexDir="column"
                alignItems="center"
                fontSize={'1em'}
                pt={30}
                mt={isTabletOrMobile ? '5em' : 0}
                ml={'3vh'}
                mb={"-10em"}
                zIndex={2}
            >
                <Container>
                <Heading size="md" fontWeight="normal">
                <Image borderRadius={'50em'} w={350} src={props.userData.avatar_url} />
                    <Text fontSize={'2em'} fontWeight={'bold'}>{props.userData.name}</Text>
                    <Text fontSize={'1.3em'} color={'gray'}>{props.userData.login}</Text>
                    <Button
                        as={'a'}
                        borderColor={'lightgray'} 
                        bgColor={'#fafbfc'}
                        borderWidth={1} 
                        borderRadius={10}
                        fontSize={'1.2em'} 
                        mt={'1em'} 
                        w={'75%'}
                        h={'2em'}
                        href={props.userData.html_url}
                        target='_blank'
                        >
                        Follow
                    </Button>
                </Heading>
                <Text fontWeight={'bold'} mt={'1em'}>
                    <AtSignIcon/> {props.userData.login}
                </Text>
                <Flex fontSize={'1em'} mt={'1em'} gap={2}>
                    <Text fontSize={'1.3em'}><TbUsers/></Text>
                    <Text>{props.userData.followers}</Text>
                    <Text color={'gray'}>followers</Text>
                    <Text ml={'0.5em'}>•</Text>
                    <Text ml={'0.5em'}>{props.userData.following}</Text>
                    <Text color={'gray'}>following</Text>
                </Flex>
                {props.userData.email ?
                <Flex mt={'1em'} gap={2}>
                <Text mt={2} fontSize={'1.2em'}><AiOutlineMail/></Text>
                <Text>props.userData.email</Text>
                </Flex> 
                : null}
                </Container>
            </Container>
        </WrapItem>
    )
}

export default ProfileMenu