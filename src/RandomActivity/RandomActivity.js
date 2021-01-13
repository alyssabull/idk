import { useState, useEffect } from 'react'
import './RandomActivity.scss'

const RandomActivity = (props) => {
  // const [link, setLink] = useState('')

  // useEffect(() => {
  //   console.log('hello')
  //   if(props.randomActivity.link !== '') {
  //     setLink(props.randomActivity.link)
  //   }
  // }, [props])

  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button>+ Save Activity</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
      {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
    </section>
  )
}

export default RandomActivity;