import React from 'react'

import { Paragraph, Shout } from '../../typography'
import TextContainer from '../TextContainer'

import KnownGameData from '../../data/GameData'

export default function GameBoard({}) {
  return (
    <>
      <TextContainer>
        <Shout>Knockout rounds</Shout>
        <Paragraph>Knockout rounds begin on Friday 15 January and end on Saturday 30 January.</Paragraph>
      </TextContainer>

      <KnockoutRounds knockoutRoundData={KnownGameData.KnockoutRounds} />
    </>
  )
}
