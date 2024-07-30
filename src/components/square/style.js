import styled from 'styled-components';

const StyledSquare = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ $newColor }) => ($newColor ? 'green' : 'red')};
`;

export { StyledSquare };
