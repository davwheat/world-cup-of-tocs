import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { Paragraph, Shout } from '../../typography'
import Loud from '../../typography/loud'
import TextContainer from '../TextContainer'
import ActiveGame from './ActiveGame'

import KnockoutRounds from './Rounds/KnockoutRounds'
import GroupStages from './Rounds/GroupStages'
// import QuarterFinals from './Rounds/QuarterFinals'
// import SemiFinals from './Rounds/SemiFinals'
// import RunnerUp from './Rounds/RunnerUp'
// import Finals from './Rounds/Finals'

const useStyles = makeStyles({
  activeGame: {
    padding: 16,
    border: '2px solid #000',
  },
})

interface Props {
  gameData: IGameData
  gameNotes: IGameNotes
}

const GameBoard: React.FC<Props> = ({ gameData, gameNotes: propsGameNotes }: Props) => {
  const classes = useStyles()

  const gameNotes = propsGameNotes || {
    knockout: {},
    groupStages: {},
    quarterFinal: {},
    semiFinal: {},
    runnerUp: {},
    final: {},
  }

  return (
    <>
      <TextContainer innerClassName={classes.activeGame}>
        <Loud center>Active game</Loud>
        <ActiveGame data={gameData} gameNotes={gameNotes} />
      </TextContainer>

      <TextContainer>
        <Shout>Other games</Shout>

        <Loud>Round of 32</Loud>
        <Paragraph>Knockout rounds began on Friday 15 January and will end on Saturday 30&nbsp;January.</Paragraph>
      </TextContainer>

      <KnockoutRounds gameNotes={gameNotes.knockout} knockoutRoundData={gameData.knockout} />

      {/* NOTE: Move active rounds to the top when they start, but only once they start (so that the current round is always at the top). */}
      <TextContainer>
        <Loud>Round of 16</Loud>
        <Paragraph>The round of 16 will begin on Monday 1&nbsp;February.</Paragraph>
      </TextContainer>

      <GroupStages gameNotes={gameNotes.groupStages} groupStageData={gameData.groupStages} />

      {/**   <TextContainer>
        <Loud>Quarter Finals</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <QuarterFinals gameNotes={gameNotes.quarterFinal} quarterFinalData={gameData.quarterFinal} />

      <TextContainer>
        <Loud>Semi Finals</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <SemiFinals gameNotes={gameNotes.semiFinal} semiFinalData={gameData.semiFinal} />

      <TextContainer>
        <Loud>3rd Place</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <RunnerUp gameNotes={gameNotes.runnerUp[0]} runnerUpData={gameData.runnerUp} />

      <TextContainer>
        <Loud>Final</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <Finals gameNotes={gameNotes.final[0]} finalData={gameData.final} /> */}
    </>
  )
}

export default GameBoard
