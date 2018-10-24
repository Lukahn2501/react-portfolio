import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', maring: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src="assets/avatar.jpg" 
                    alt="avataralt" 
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full-Stack Web Developper</h1>
                        <hr/>
                        <p>HTML/CSS | React | NodeJS | SharePoint | .NET </p>
                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/kevin-roy-71329aa9/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/Lukahn2501" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/Lukahn_" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;