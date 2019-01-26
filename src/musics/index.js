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
  Icon,
  FABButton,
  Cell
} from 'react-mdl';
import db from 'localforage';
import QButton from '../../components/QButton';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import ReactAudioPlayer from 'react-audio-player';
import Timer from '../../components/Timer';
import TFButton from '../../components/TFButton';
import Divider from 'material-ui/Divider';


class AboutPage extends React.Component {

  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Երաժշտական';
    db.getItem('musics').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
  }
  gotoCategories() {
    history.push({ pathname: '/categories'});
  }

  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('musics', this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  gotoCategories() {
    history.push({pathname: '/categories'}); // go to page function
  }
  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '20px'
        }}><Grid className="demo-grid-1" style={{
        }}>
          <Cell col={1}>
            <IconButton style={{color: '#310035'}} name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={1} style={{color: '#310035'}}>Երաժշտութիւն</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '150%',
          marginLeft: '130px',
          fontSize: '30px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '10px'
        }}>
          <Cell col={1}>
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/music/0" seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/music/1" seen={this.state.seen[2]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="3" onClick={() => this.makeSeen(3)} goto="/music/2" seen={this.state.seen[3]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="4" onClick={() => this.makeSeen(4)} goto="/music/3" seen={this.state.seen[4]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="5" onClick={() => this.makeSeen(5)} goto="/music/4" seen={this.state.seen[5]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="6" onClick={() => this.makeSeen(6)} goto="/music/5" seen={this.state.seen[6]}/>
          </Cell>
        </Grid>
        <div style={{backgroundColor: '#424242' , height: '1px',width: '49%',marginTop: '20px'}}/>

        <Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
        <Cell col={1}>
          <QButton text="7" onClick={() => this.makeSeen(7)} goto="/music/6" seen={this.state.seen[7]}/>
        </Cell>
          <Cell col={1}>
            <QButton text="8" onClick={() => this.makeSeen(8)} goto="/music/7" seen={this.state.seen[8]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="9" onClick={() => this.makeSeen(9)} goto="/music/8" seen={this.state.seen[9]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="10" onClick={() => this.makeSeen(10)} goto="/music/9" seen={this.state.seen[10]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="11" onClick={() => this.makeSeen(11)} goto="/music/10" seen={this.state.seen[11]}/>
          </Cell>
          <Cell col={1}>
            <QButton text="12" onClick={() => this.makeSeen(12)} goto="/music/11" seen={this.state.seen[12]}/>
          </Cell>

            </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
