import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
import Education from './Education'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={3} className="resume-left-col">
                        <div style={{textAlign:"center"}}>
                            <img 
                                src="assets/avatar.jpg"
                                alt="resumeavatar"
                                style={{borderRadius:"50%", height:"200px"}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Kevin Roy</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>
                            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Adress</h5>
                        <p>1 rue code ville </p>
                    </Cell>
                    <Cell col={9} className="resume-right-col">
                        <h2>Education</h2>
                        <Education 
                            startYear="20XX"
                            endYear="20XX"
                            school="XXXXXXXXXXXX"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Education 
                            startYear="20XX"
                            endYear="20XX"
                            school="XXXXXXXXXXXX"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        />
                        <Education 
                            startYear="20XX"
                            endYear="20XX"
                            school="XXXXXXXXXXXX"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="Eating Bananas"
                            progress={75}
                        />
                        <Skills
                            skill="Playing Cymbal"
                            progress={100}
                        />
                        <Skills
                            skill="Actually programming"
                            progress={15}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;