import { Button, Container, Text } from "@chakra-ui/react";
import { RiBookMarkLine } from "react-icons/ri"
import { useMediaQuery } from "react-responsive";

type HeaderProps = {
    repositories?: number
}

const Header = (props: HeaderProps) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })

    return (
        <Container w={'100%'} h={'4em'}  
        borderBottomWidth={1}
        borderBottomColor={'lightgray'}
        pos={'absolute'} 
        zIndex={1}>
            <Container pl={isTabletOrMobile ? '15vh' : '30em'}> 
                <Button gap={4}
                fontSize={'1.2em'} 
                mt={'1.6em'}
                borderBottomWidth={3}
                borderBottomColor={'orange'}
                pb={6}
                >
                    <RiBookMarkLine/>
                    <Text fontSize={'0.8em'} >Repositories</Text>
                    <Text 
                    fontSize={'0.8em'}
                    bgColor={'lightgray'} 
                    width={'1.6em'} 
                    height={'1.6em'}
                    borderRadius={'100%'}
                    >
                        {props.repositories}
                    </Text>
                </Button>
            </Container>
        </Container>
    )
}


export default Header;