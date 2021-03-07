import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../../store/ducks/auth/actions';

import Button from '../../components/Button';
import FormField from '../../components/FormField';

import { Container, LoginBox } from '../../styles/pages/login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    dispatch(loginRequestAction(payload));
  }

  return (
    <Container>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <h3>
            Olá, seja <br /> bem-vindo!
          </h3>
          <p>Para acessar a plataforma, faça seu login.</p>
          <FormField
            type="email"
            label="E-mail"
            placeholder="user.name@mail.com"
            id="email"
            inputValue={email}
            setValue={(value: string) => setEmail(value)}
          />
          <FormField
            type="password"
            label="Senha"
            placeholder="*****"
            id="password"
            inputValue={password}
            setValue={(value: string) => setPassword(value)}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <p className="recover-password">
          Esqueceu seu login ou senha? <br /> Clique <a href="#!">aqui</a>
        </p>
      </LoginBox>
    </Container>
  );
}
