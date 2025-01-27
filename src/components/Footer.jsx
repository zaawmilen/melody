import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Melody Training Center. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
