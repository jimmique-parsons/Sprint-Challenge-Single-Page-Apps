import React from "react";
import { Card, Button } from 'semantic-ui-react'
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(33, 33, 33, 0.6);
    padding: 1% 2%;
    margin: 10px;
    border-radius: 5px;
    width: 14%;
`;
 	
export default function LocationCard ({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{type} - {dimension}</Card.Description>
        <Card.Content extra>
          <div className="ui one buttons">
            <Button>
              {residents.length} residents
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}