import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { Paragraph, Shout } from '../../typography'
import Loud from '../../typography/loud'
import TextContainer from '../TextContainer'
import ActiveGame from './ActiveGame'

import KnockoutRounds from './Rounds/KnockoutRounds'
import GroupStages from './Rounds/GroupStages'
import QuarterFinals from './Rounds/QuarterFinals'
import SemiFinals from './Rounds/SemiFinals'
import RunnerUp from './Rounds/RunnerUp'
import Finals from './Rounds/Finals'

const useStyles = makeStyles({
  activeGame: {
    padding: 16,
    border: '2px solid #000',
  },
})

interface Props {
  gameData: IGameData
}

const GameBoard: React.FC<Props> = ({ gameData }: Props) => {
  const classes = useStyles()

  return (
    <>
      <TextContainer innerClassName={classes.activeGame}>
        <Loud center>Active game</Loud>
        <ActiveGame data={gameData} />
      </TextContainer>

      <TextContainer>
        <Shout>Other games</Shout>

        <Loud>Round of 32</Loud>
        <Paragraph>Knockout rounds begin on Friday 15 January and end on Saturday 30&nbsp;January.</Paragraph>
      </TextContainer>

      <KnockoutRounds knockoutRoundData={gameData.knockout} />

      <TextContainer>
        <Loud>Round of 16</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <GroupStages groupStageData={gameData.groupStages} />

/**   <TextContainer>
        <Loud>Quarter Finals</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <QuarterFinals quarterFinalData={gameData.quarterFinal} />

      <TextContainer>
        <Loud>Semi Finals</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <SemiFinals semiFinalData={gameData.semiFinal} />

      <TextContainer>
        <Loud>3rd Place</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <RunnerUp RunnerUpData={gameData.runnerUp} />

      <TextContainer>
        <Loud>Final</Loud>
        <Paragraph></Paragraph>
      </TextContainer>

      <Finals FinalData={gameData.final} /> */
    </>
  )
}

export default GameBoard
