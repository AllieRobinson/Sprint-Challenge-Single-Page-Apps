import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
import CharacterList from './CharacterList';
import EpisodeList from "./EpisodeList";
import LocationsList from "./LocationsList";
import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return (
        <StyledFlex>
            <div>
                <NavLink to="/CharacterList"><Button>Characters</Button></NavLink>
                <NavLink to="/EpisodeList"><Button>Episodes</Button></NavLink>
                <NavLink to="/LocationsList"><Button>Locations</Button></NavLink>
            </div>
            <Route exact path="/CharacterList" component={CharacterList} />
            <Route exact path="/EpisodeList" component={EpisodeList} />
            <Route exact path="/LocationsList" component={LocationsList} />
        </StyledFlex>
    )
};
