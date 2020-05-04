import React from 'react'
import { iframe, box, section } from './style.module.scss'

const ChatForm = () => (
  <section className={section}>
    <div className={box}>
      <iframe
        scrolling="no"
        className={iframe}
        src="https://chat.webuild.community/"
        // src="https://daedstack.herokuapp.com/"
      />
    </div>
  </section>
)

export default ChatForm
