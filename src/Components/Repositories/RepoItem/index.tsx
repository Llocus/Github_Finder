import { Container, Flex, Link, WrapItem, Text } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi"
import { FaBalanceScale } from "react-icons/fa"
import moment from 'moment';
import { paleta } from "../../../Paleta";

type RepoItemProps = {
    name: string
    description?: string
    language?: string
    forks?: number
    license?: {
        name: string,
    }
    html_url?: string
    updated_at: Date
}


const RepoItem = (props: RepoItemProps) => {
    return (
        <WrapItem w={'100%'} 
        borderBottomWidth={1}
        borderBottomColor={'lightgray'}
        ml={10}
        mb={20}>
            <Container
            minH={100}>
                <Link href={props.html_url} fontSize={'1.5em'} fontWeight={500} color={'blue'}>{props.name}</Link>
                <Container>
                {props.description ? 
                <Text mt={10}>{props.description}</Text>
                : null}
                </Container>
                <Flex gap={15} fontSize={'0.8em'} mt={20} mb={20}>
                {props.language ? 
                    <Flex gap={2}>
                        <Text color={`${paleta(props.language)}}`} mt={5}><BsFillCircleFill/></Text>
                        <Text>{props.language}</Text>
                    </Flex> 
                : null}
                {props.forks ? 
                    <Flex gap={2}>
                        <Text mt={5}><BiGitRepoForked/></Text>
                        <Text>{props.forks}</Text>
                    </Flex> 
                : null}
                {props.license ? 
                    <Flex gap={2}>
                        <Text mt={5}><FaBalanceScale/></Text>
                        <Text>{props.license.name}</Text>
                    </Flex> 
                : null}
                <Text>Updated on {moment(props.updated_at).format('DD MMM')}</Text>
                </Flex>
            </Container>
        </WrapItem>
    )
}

export default RepoItem;