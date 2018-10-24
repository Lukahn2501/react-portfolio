import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', maring: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src="/assets/avatar.jpg" 
                    alt="avataralt" 
                    className="avatar-img"
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;