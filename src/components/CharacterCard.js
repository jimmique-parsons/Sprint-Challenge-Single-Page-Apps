import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(33, 33, 33, 0.6);
    padding: 1% 2%;
    margin: 10px;
    border-radius: 5px;
    width: 14%;
`;

export default function CharacterCard({ character }) {
  console.log(character)
  return (
    <Card>
      <Image src={character.image} alt={character.name} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{character.status}</Card.Meta>
        <Card.Description>Location: {character.location.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/episodes">
          <Icon name="user">
            Episodes
          </Icon>
        </Link>
      </Card.Content>
    </Card>
  );
}