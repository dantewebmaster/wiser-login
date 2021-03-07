import styled from 'styled-components';

export const Container = styled.div`
  background: #130525 url('/assets/login-bg.svg') no-repeat;
  background-size: contain;
  height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    background-position: -200px 0;
  }

  @media (min-width: 1024px) {
    background-position: 0 0;
    background-size: 65%;
  }

  &::before {
    content: '';
    background: linear-gradient(0, #130525 50%, rgba(105, 57, 153, 0) 100%);
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width: 1024px) {
      opacity: 0.7;
    }
  }
`;

export const LoginBox = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  position: relative;

  form {
    background: #fff;
    width: 100%;
    padding: 24px;
    border-radius: 8px;
    max-width: 300px;
  }

  h3 {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 32px;
    text-align: center;
    color: #383e71;
    margin-bottom: 16px;
  }

  p {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 20px;
    text-align: center;
    margin-bottom: 16px;

    color: #989fdb;
  }

  button[type='submit'] {
    display: block;
    margin: 32px auto -48px;
  }

  .recover-password {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 48px;
  }

  @media (min-width: 768px) {
    background: #fff;
    height: 100vh;
    float: right;
    width: 60%;

    h3,
    p {
      text-align: left;
    }

    h3 {
      font-size: 4rem;
      line-height: 48px;
    }

    p {
      font-size: 1.6rem;
      max-width: 220px;
    }

    button[type='submit'] {
      width: 100%;
    }

    .recover-password {
      color: #989fdb;
    }
  }

  @media (min-width: 1024px) {
    width: 45%;
    align-items: flex-start;
    padding-left: 80px;

    form {
      padding: 24px 0;
    }
  }
`;
