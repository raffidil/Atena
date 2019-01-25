import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  Grid,
  Icon,
  FABButton,
  Cell,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from 'react-mdl';
import db from 'localforage';
import text from '../../text';
import Layout from '../../components/Layout';
import s from './styles.css';
import history from '../history';
import teams from '../teams';
import adara from './adara.mp3';
import pollux from './pollux.mp3';


export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.OpenDialog = this.OpenDialog.bind(this);
    this.CloseDialog = this.CloseDialog.bind(this);
  }

  componentDidMount() {
    document.title = text.setting;
    setInterval(this.addCounter, 1000);
  }
  OpenDialog() {
    this.setState({
      openDialog: true,
    });
  }
  CloseDialog() {
    this.setState({
      openDialog: false,
    });
  }
  agreeClearDb = () => {
    this.clearDb();
    this.CloseDialog();
  }

  clearDb = () => {
    const audio = new Audio(adara);
    audio.play();
    db.setItem('science', {}).catch(console.log);
    db.setItem('images', {}).catch(console.log);
    db.setItem('musics', {}).catch(console.log);
    db.setItem('sport', {}).catch(console.log);
    db.setItem('physical', {}).catch(console.log);
  }
  clearAllDb = () => {
    const audio = new Audio(pollux);
    audio.play();
    db.setItem('science', {}).catch(console.log);
    db.setItem('images', {}).catch(console.log);
    db.setItem('musics', {}).catch(console.log);
    db.setItem('sport', {}).catch(console.log);
    db.setItem('physical', {}).catch(console.log);
    db.setItem('scores', {}).catch(console.log);
    this.OpenDialog();
  }

  clearScoreDb = () => {
    const audio = new Audio(adara);
    audio.play();
    db.setItem('scores', {}).catch(console.log);
  }

  inc = (team) => {
    const audio = new Audio(adara);
    audio.play();
    db.getItem('scores').then((scores) => {
      scores[team.id] = (scores[team.id] || 0) + 5;
      db.setItem('scores', scores)
        .then(() => this.forceUpdate());
    }).catch(console.log);
  }

  dec = (team) => {
    const audio = new Audio(adara);
    audio.play();
    db.getItem('scores').then((scores) => {
      scores[team.id] = (scores[team.id] || 0) - 5;
      db.setItem('scores', scores)
        .then(() => this.forceUpdate());
    }).catch(console.log);
  }

  gotoHome = () => {
    history.push({ pathname: '/' });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '10px' }}>
          <Grid className="demo-grid-2">
            <Cell col={1}>
              <IconButton style={{ color: '#310035' }} name="home" colored onClick={this.gotoHome} />
            </Cell>
            <Cell col={1}>{text.setting}</Cell>
          </Grid>
        </h1>
        <Grid className="demo-grid-2" style={{ marginTop: '-60px' }}>
          <Cell style={{ margin: '-5px' }} col={6}>
            <List>
              <ListItem><span style={{ fontSize: '25px' }}>{text.scoreManualSetting}</span></ListItem>
              {teams.map(team => (
                <Card shadow={2} style={{ width: '360px', minHeight: '50px', margin: '-12px', marginLeft: '-5px', marginTop: '15px' }}>
                  <ListItem key={team.id} style={{ marginTop: '-8px' }}>
                    <span style={{ marginRight: '20px' }}>
                      <FABButton onClick={() => this.dec(team)} colored style={{ color: '#eceff1', backgroundColor: '#f44336' }} mini>
                        <Icon name="remove" /> </FABButton>
                      <FABButton onClick={() => this.inc(team)} colored mini style={{ color: '#eceff1', backgroundColor: '#388e3c', marginLeft: '5px' }} >
                        <Icon name="add" /> </FABButton>
                    </span>
                    <span style={{ color: team.backColor, fontSize: '25px' }}>{team.name}</span>
                  </ListItem></Card>
               ))}
            </List>
          </Cell>
          <Cell col={6}>
            <List>
              <ListItem><span style={{ fontSize: '25px' }}>{text.generalSetting}</span></ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearDb} colored style={{ color: '#37474f', backgroundColor: '#eceff1' }} mini>
                    <Icon name="delete_sweep" />
                  </FABButton>
                </span>
                {text.clearQuestionArrangement}
              </ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearScoreDb} colored style={{ color: '#37474f', backgroundColor: '#eceff1' }} mini>
                    <Icon name="delete_sweep" />
                  </FABButton>
                </span>
                {text.clearScoreArrangement}
              </ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearAllDb} colored style={{ color: '#E53935', backgroundColor: '#eceff1' }} mini>
                    <Icon name="restore" />
                  </FABButton>
                </span>
                {text.restartTheGame}
              </ListItem>
            </List>
          </Cell>
        </Grid>
        <div>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>{text.restartDialog.main}</DialogTitle>
            <DialogContent>
              <p>{text.restartDialog.p1}</p>
              <p>{text.restartDialog.p2}</p>
            </DialogContent>
            <DialogActions>
              <Button type="button" onClick={this.agreeClearDb}>{text.agree}</Button>
              <Button type="button" onClick={this.CloseDialog}>{text.cancel}</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Layout>
    );
  }

}
