import React from "react";
import { Card, Button } from "semantic-ui-react";
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(33, 33, 33, 0.6);
    padding: 1% 2%;
    margin: 10px;
    border-radius: 5px;
    width: 14%;
`;

 export default function EpisodeCard({ name, air_date, episode, characters }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{air_date}</Card.Meta>
        <Card.Description>{episode}</Card.Description>
        <Card.Content extra>
          <div className="ui one buttons">
            <Button>
              {characters.length} characters
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}