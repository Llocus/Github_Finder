import { Wrap, WrapItem, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getGithubRepos } from "../../Services/api"
import RepoItem from "./RepoItem"

type RepositoriesProps = {
    username?: string
}

const Repositories = (props: RepositoriesProps) => {
    const [repo, setRepo] = useState({})
    const [isLoading, setIsLoading]= useState(true)

    useEffect(() => {
        if(props.username){
            getGithubRepos(props.username).then((response) => {
                setRepo(response.data)
            })
        }
    },[props.username])

    useEffect(() => {
        if (Object.keys(repo).length !== 0){
            setIsLoading(false)
        }
    },[repo])

    return (
        <WrapItem pl={10} pr={10} maxW={'80vh'}>
            <Wrap
            mt={'10em'}
            >
            {isLoading ? <WrapItem pl={'2em'}><Spinner w={100} h={100} /></WrapItem> :
            Object.values(repo).map((repositorie: any) => 
            <RepoItem 
                key={repositorie.id} 
                name={repositorie.name} 
                description={repositorie.description} 
                language={repositorie.language} 
                forks={repositorie.forks} 
                license={repositorie.license} 
                html_url={repositorie.html_url} 
                updated_at={repositorie.updated_at}/>
            )}
            </Wrap>
        </WrapItem>
    )
}

export default Repositories