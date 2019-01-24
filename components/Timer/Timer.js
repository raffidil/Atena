/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import {
  IconButton,
  Button,
  Grid,
  Cell,
  Tooltip,
  Card,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  ProgressBar,
} from 'react-mdl';
import timeout from './timeout.jpg';
import tick from './tick.mp3';
import finish from './finish.mp3';
import text from '../../text';

class Timer extends React.Component {
  static propTypes = {
    timeout: PropTypes.number.isRequired,
    pause: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { counter: 60 };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount = () => {
    this.setState({ counter: this.props.timeout });
    this.startCounter();
  }

  componentWillUnmount() {
    this.pauseTime();
  }

  addCounter = () => {
    if (this.props.pause) {
      this.pauseTime();
    } else if (this.state.counter !== 0) {
      const x = this.state.counter - 1;
      const audio = new Audio(tick);
      this.setState({ counter: x });
      audio.play();
    } else if (!this.state.onceOpened) {
      this.handleOpenDialog();
    }
  }

  startCounter = () => {
    this.pauseInterval = setInterval(this.addCounter, 1000);
  }

  pauseTime = () => {
    clearInterval(this.pauseInterval);
  }

  replayTime = () => {
    this.state.counter = this.props.timeout;
    this.setState({ onceOpened: false });
  }

  handleOpenDialog() {
    const audio = new Audio(finish);
    audio.play();
    this.setState({
      openDialog: true,
      onceOpened: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false,
    });
  }

  render() {
    return (
      <div>
        <Dialog style={{ background: `url(${timeout}) center / cover` }} open={this.state.openDialog}>
          <DialogTitle style={{ color: '#b71c1c', fontSize: '45px' }} >Time Out</DialogTitle>
          <DialogContent>
            <p style={{ color: '#e57373', fontSize: '20px' }}>{text.timeout}</p>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={this.handleCloseDialog}>{text.close}</Button>
          </DialogActions>
        </Dialog>

        <Card shadow={3} style={{ minWidth: '400px', minHeight: '50px', background: '#fff' }}>
          <Grid className="demo-grid-2" style={{ marginLeft: '2px', marginRight: '2px', marginTop: '10px' }}>
            <Cell col={4} style={{ fontSize: '60px' }}>
              {this.state.counter}
            </Cell>
            <Cell col={3}>
              <Tooltip label="Play" position="right">
                <IconButton onClick={this.startCounter} name="play_arrow" colored style={{ color: '#388e3c' }} />
              </Tooltip>
            </Cell>
            <Cell col={3}>
              <Tooltip label="Pause" position="right">
                <IconButton onClick={this.pauseTime} name="pause" />
              </Tooltip>
            </Cell>
            <Cell col={2}>
              <Tooltip label="Replay" position="right">
                <IconButton onClick={this.replayTime} name="replay" colored style={{ color: '#dd2c00' }} />
              </Tooltip>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={9}>
              <ProgressBar progress={this.state.counter * (100 / this.props.timeout)} />
            </Cell>
          </Grid>
        </Card>
        <br />
      </div>
    );
  }

}

export default Timer;
