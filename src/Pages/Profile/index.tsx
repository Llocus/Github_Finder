import {
    Wrap,
} from '@chakra-ui/react'

import ProfileMenu from '../../Components/ProfileMenu';
import Header from '../../Components/Header';
import Repositories from '../../Components/Repositories';

type ProfileProps = {
    profile: {
        login?: string
        public_repos?: number
    }
}

const Profile = (props: ProfileProps) => {

    return (
        <>
            <Header repositories={props.profile.public_repos}/>
            <Wrap ml={'1vh'}>
                <ProfileMenu userData={props.profile}/>
                <Repositories username={props.profile.login}/>
            </Wrap>
        </>
    )
}

export default Profile;