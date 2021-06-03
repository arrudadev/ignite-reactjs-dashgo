import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function signIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSign: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log(values);
  }

  const { errors } = formState;

  return (
    <Flex
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        w="100%" 
        maxW="360" 
        bg="gray.800" 
        p="8" 
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSign)}
      >
        <Stack spacing={4}>
          <Input 
            type="email" 
            name="email"             
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />

          <Input 
            type="password" 
            name="password"  
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
