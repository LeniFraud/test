import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.backgroundBook};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Input = styled.input`
  min-width: 280px;
  margin-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  transition: border-color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.secondary};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textLight};
  font-size: ${p => p.theme.fontSizes.s}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color ${p => p.theme.transition.normal},
    box-shadow ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.accent};
  }
`;
