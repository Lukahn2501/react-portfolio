import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kevin Roy</h2>
                        <img src="assets/bw.jpg" alt="avtbw" style={{height:'250px', borderRadius:'10%'}}/>
                        <p>This site is used as a discovery React Project. It uses ReactMDL and is hosted on GitHub Pages</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/><br/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            01 23 45 67 89
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-twitter-square" aria-hidden="true"/>
                                            @Lukahn_
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope-square" aria-hidden="true"/>
                                            kevin.roy.ic@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;