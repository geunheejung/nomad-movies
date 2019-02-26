import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { TINT_COLOR, BG_COLOR  } from '../constatns/Color';

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);

/*
rn 스타일링 방법 
1. View 컴포넌트, StyleSheet.create({ ...styleObj })
2. flex: 1은 전체 넓이를 가지며, View 컴포넌트는 자동으로 flex 박스를 가지고, flex-direction: column
*/