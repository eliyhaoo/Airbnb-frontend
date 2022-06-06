import React from 'react'

import { eventBusService } from '../services/event-bus.service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    if(this.removeEvent) this.removeEvent()
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      console.log('GETTING MSG', msg);
      this.setState({ msg })
      // setTimeout(() => {
      //   this.setState({ msg: null })
      // }, 2500)
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    console.log('MSG CLASS',msgClass);
    return (
      <section className={'user-msg ' + msgClass}>
        <button onClick={() => {
          this.setState({ msg: null })
        }}>x</button>
        {this.state.msg.txt}
      </section>
    )
  }
}
