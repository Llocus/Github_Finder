import { useState } from 'react';
import {
  Stack,
  Input,
  Button,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon, Search2Icon } from '@chakra-ui/icons';

import { Formik } from 'formik';
import { getGithubData } from '../../Services/api';

const SearchBar = (props: any) => {
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
        'initial'
    );
    const [error, setError] = useState(false);
    return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}>
    <Stack
    direction={{ base: 'column', md: 'row' }}
    align={'center'}
    >
        <Container
            maxW={'lg'}
            boxShadow={'xl'}
            rounded={'lg'}
            p={6}
            >
            <Heading
            as={'h2'}
            fontSize={{ base: 'xl', sm: '2xl' }}
            ml={'0.2em'}
            mb={5}>
            Buscar Repositório no github
            </Heading>
        <Formik
        initialValues={{ user: '' }}
        validate={(values: any) => {

            type ErrorProps = {
                user?: string
            }

            const errors: ErrorProps = {};

            if (!values.user) {
            errors.user = 'Informe um nome de usuário válido do github!';
            } 
            return errors;
        }}
        onSubmit={(values, actions) => {
            setError(false);
            setState('submitting');

            getGithubData(values.user).then((response) => {
                if (response.status !== 200) {
                    setError(true);
                    setState('initial');
                    return;
                } else {
                    setState('success');
                    props.setProfile(response.data)
                    setState('initial');
                }
            }).then(() => actions.setSubmitting(false))
        }}>
        {props => (
            <form onSubmit={props.handleSubmit}>
            <Input
                    variant={'solid'}
                    borderWidth={1}
                    color={'gray.800'}
                    _placeholder={{
                        color: 'gray.400',
                    }}
                    borderColor={'gray'}
                    type="text"
                    placeholder={'Digite o nome do usuário'}
                    aria-label={'Digite o nome do usuário'}
                    disabled={state !== 'initial'}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.user}
                    height={"2em"}
                    borderRadius={'2px'}
                    name="user"
            />
            <Button
                    colorScheme={state === 'success' ? 'green' : 'blue'}
                    isLoading={state === 'submitting'}
                    w="100%"
                    backgroundColor={'#46535d'}
                    color={'white'}
                    width={"6em"}
                    height={"2em"}
                    mb={'0.3em'}
                    pb={'0.2em'}
                    borderRadius={'2px'}
                    type={state === 'success' ? 'button' : 'submit'}>
                    {state === 'success' ? <CheckIcon /> : <><Text pr={5}><Search2Icon/></Text>Buscar</>}
                </Button>
            {props.errors.user && <Text color={'red'} id="feedback">{props.errors.user}</Text>}
            <Text
                    mt={20}
                    textAlign={'center'}
                    color={error ? 'red' : 'gray'}>
                    {error
                    ? <Text>Falha ao carregar dados! 😢</Text>
                    : null}
                </Text>
            </form>
        )}
        </Formik>
        </Container>
    </Stack>
    </Flex>
 );
}

export default SearchBar