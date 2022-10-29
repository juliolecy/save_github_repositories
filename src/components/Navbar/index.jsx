import React from 'react';
import * as k from './styles';
import { FiLinkedin } from 'react-icons/fi';
import { TbBrandGithub } from 'react-icons/tb';

const Navbar = ({ blackHeader }) => {
  return (
    <k.Container blackHeader={blackHeader}>
      <k.NavLogo>JLINS</k.NavLogo>

      <k.LinkHome to="/">Home</k.LinkHome>

      <k.SocialMediaContainer>
        <k.SocialMedia href="#">
          <FiLinkedin />
        </k.SocialMedia>

        <k.SocialMedia href="#">
          <TbBrandGithub />
        </k.SocialMedia>
      </k.SocialMediaContainer>
    </k.Container>
  );
};

export default Navbar;
