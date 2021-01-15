import React from 'react'

import { Paragraph, Shout, Whisper } from '../../typography'
import TextContainer from '../TextContainer'

import KnockoutRounds from './Rounds/KnockoutRounds'

/**
 *
 * @param {object} props
 * @param {import('./Graph').GameData} props.gameData
 */
export default function GameBoard(props) {
  const { gameData } = props

  return (
    <>
      <TextContainer>
        <Shout>Knockout rounds</Shout>
        <Paragraph>Knockout rounds begin on Friday 15 January and end on Saturday 30&nbsp;January.</Paragraph>
        <Whisper>
          The graphs aren't representative of the true time period between each data point, and we're working on fixing that at the moment. Take rapid increases
          and decreases with a grain of&nbsp;salt.
        </Whisper>
      </TextContainer>

      <KnockoutRounds knockoutRoundData={gameData.knockout} />
    </>
  )
}
