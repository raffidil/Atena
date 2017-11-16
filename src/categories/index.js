import React from 'react';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Cell,
  Icon
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import sciPic from './sci.png';
import sportPic from './sport.jpg';
import contactPic from './contact.png';
import musicPic from './music.jpeg';
import physicalPic from './physical.jpeg';
import Link from '../../components/Link';
import history from '../history';


class AboutPage extends React.Component {

  componentDidMount() {
    document.title = 'Մրցոյթներ';
  }

  gotoHome() {
    history.push({pathname: '/'}); // go to page function
  }
  gotoScience() {
    history.push({pathname: '/science'}); // go to page function
  }
  gotoSport() {
    history.push({pathname: '/sport'}); // go to page function
  }
  gotoImages() {
    history.push({pathname: '/images'}); // go to page function
  }
  gotoMusics() {
    history.push({pathname: '/musics'}); // go to page function
  }
  gotoPhysical() {
    history.push({pathname: '/physical'}); // go to page function
  }

  render() {
    const CardWidth = '400px';
    const CardHeight = '140px';
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
        marginTop: '20px'
      }}>
          <Grid className="demo-grid-1" >
          <Cell col={1}>
            <IconButton style={{color: '#310035'}} name="arrow_back" colored onClick={this.gotoHome}/>
          </Cell>
          <Cell col={1} style={{color: '#310035'}}>Մրցոյթներ</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          margin: 'auto'
        }}>
          <Grid className="demo-grid-1">
            <Cell col={6}>
              <Card shadow={5} style={{
                width: CardWidth,
                height: '120px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#000',
                  height: '176px',
                  background: `url(${sciPic}) center / cover`,
                }}></CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 30,
                    color: '#310035'
                  }} onClick={this.gotoScience}>Փուլ 1</Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={6}>
              <Card shadow={5} style={{
                width: CardWidth,
                height: '120px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${musicPic}) center / cover`
                }}></CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 30,
                    color: '#310035'
                  }} onClick={this.gotoMusics}>Փուլ 2</Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={6}>
              <Card shadow={5} style={{
                width: CardWidth,
                height: '120px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${contactPic}) center / cover`
                }}></CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 30,
                    color: '#310035'
                  }} onClick={this.gotoImages}>Փուլ 3</Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={6}>
              <Card shadow={5} style={{
                width: CardWidth,
                height: '120px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${physicalPic}) center / cover`
                }}></CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 30,
                    color: '#310035'
                  }} onClick={this.gotoPhysical}>Փուլ 4</Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
