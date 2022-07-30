import React, {useState} from 'react'
import styles from './applybutton.module.css'

function ApplyButton(props) {
  const [clicked, setClicked] = useState(false)
  return (
    <button className={clicked? styles.button_clicked: styles.button} {...props} onClick={()=>{setClicked(true)}}> {clicked ? "Applied" : "Apply"}</button>
  )
}

export default ApplyButton
