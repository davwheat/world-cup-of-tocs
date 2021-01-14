import React, { useRef } from 'react'

import GameBoard from './GameBoard'
import { Whisper } from '../../typography'

// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles({
//   refreshPara: {
//     textAlign: 'center',
//   },
// })

export default function Game() {
  const countdownElRef = useRef(null)

  return (
    <article>
      <Whisper center bold>
        Refreshing in <span ref={countdownElRef}>60</span> seconds.
      </Whisper>

      <section id="game-board">
        <GameBoard />
      </section>
    </article>
  )
}
