import React from 'react'
import { eventBusService } from '../../services/event-bus.service.js'
export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    if (this.removeEvent) this.removeEvent()
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
      setTimeout(() => {
        this.setState({ msg: null })
      }, 8000)
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        <button onClick={() => {
          this.setState({ msg: null })
        }}>x</button>
        <span>{this.state.msg.txt}</span>
      </section>
    )
  }
}
