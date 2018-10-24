import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title=" " scroll > 
                    <Navigation>
                        <Link to="." style={{fontWeight:'bolder'}}>Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer>
                    <Navigation>
                        <Link to="." style={{fontWeight:'bolder'}}>Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                    <p style={{color:'black', marginLeft:'20px', marginRight:'20px', marginTop:'20px'}}>This site is used as a discovery React Project. It uses ReactMDL and is hosted on GitHub Pages</p>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
