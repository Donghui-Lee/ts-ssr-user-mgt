import styled from 'styled-components';
import palatte from '../../../lib/styles/palette';
import Button from '../../common/Button';

/**
 * 회원가입 또는 로그인 폼 프레젠테이션 컴포넌트
 */

export const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palatte.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
export const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palatte.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palatte.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인/회원가입 링크를 보여줌
 */
export const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palatte.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palatte.gray[9]};
    }
  }
`;

export const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;