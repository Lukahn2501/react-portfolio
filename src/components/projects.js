import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};

    }

    toogleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'white', fontWeight: 'bold', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            This Website !
                        </CardTitle>
                        <CardText>
                            This is a discovery project with React / ReactMDL
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/Lukahn2501/react-portfolio" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                    GitHub
                                </a>
                            </Button>
                            <Button colored><a href="." style={{textDecoration:'none', color:'inherit'}}>Link</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', fontWeight: 'bolder', height: '176px', background: 'url(https://www.titanium.fr/wp-content/uploads/2016/08/Logo_SharePoint-450x450.png) center / cover'}}>
                            SharePoint Scripts
                        </CardTitle>
                        <CardText>
                            A collection of SharePoint PowerShell scripts to get you started
                        </CardText>
                        <CardActions border style={{textAlign:'center'}}>
                            <Button colored>
                                <a href="https://github.com/Lukahn2501/sharepoint-scripts" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', fontWeight: 'bolder', height: '176px', background: 'url(https://www.titanium.fr/wp-content/uploads/2016/08/Logo_SharePoint-450x450.png) center / cover'}}>
                            SharePoint Scripts
                        </CardTitle>
                        <CardText>
                            A collection of SharePoint PowerShell scripts to get you started
                        </CardText>
                        <CardActions border style={{textAlign:'center'}}>
                            <Button colored>
                                <a href="https://github.com/Lukahn2501/sharepoint-scripts" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', fontWeight: 'bold', height: '176px', background: 'url(https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png) center / cover'}}>
                            Angular Tutorial
                        </CardTitle>
                        <CardText>
                            Discovery Angular project with CircleCI and Firebase deployment
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/Lukahn2501/angular-tour-of-heroes" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                    GitHub
                                </a>
                            </Button>
                            <Button colored>
                                <a href="https://angular-tour-of-heroes-fe2d9.firebaseapp.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                    Link
                                </a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>SharePoint</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toogleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;