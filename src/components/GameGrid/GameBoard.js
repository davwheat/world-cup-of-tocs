import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { Paragraph, Shout } from '../../typography'
import Loud from '../../typography/loud'
import TextContainer from '../TextContainer'
import ActiveGame from './ActiveGame'

import KnockoutRounds from './Rounds/KnockoutRounds'

const useStyles = makeStyles({
  activeGame: {
    padding: 16,
    border: '2px solid #000',
  },
})

/**
 *
 * @param {object} props
 * @param {import('./Graph').GameData} props.gameData
 */
export default function GameBoard({ gameData }) {
  const classes = useStyles()

  return (
    <>
      <TextContainer innerClassName={classes.activeGame}>
        <Loud center>Active game</Loud>
        <ActiveGame data={gameData} />
      </TextContainer>

      <TextContainer>
        <Shout>Other games</Shout>

        <Loud>Knockout rounds</Loud>
        <Paragraph>Knockout rounds begin on Friday 15 January and end on Saturday 30&nbsp;January.</Paragraph>
      </TextContainer>

      <KnockoutRounds knockoutRoundData={gameData.knockout} />
    </>
  )
}
