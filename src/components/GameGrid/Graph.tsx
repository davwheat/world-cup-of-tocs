import { makeStyles } from "@material-ui/styles";
import React from "react";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis, VictoryLine, VictoryTooltip, VictoryContainer, createContainer } from "victory";
//import { colours, ResultHistories, StateInfo } from "./constants";
import { GetTocColor, GetTocName } from '../../data/TocData'


const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

const LONG_PROP_SCALE_FACTOR = 1.35;

export enum VoteStates {
  UPCOMING = "UPCOMING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}



/**
 * Defines how a **single** poll should look
 */
export interface SinglePoll {
  /** Set to the midnight unix epoch of the day of the poll */
  scheduledStartDay: number,

  votingStatus: VoteStates /*"UPCOMING" | "IN_PROGRESS" | "DONE";*/

  twitterInfo ?: {
    /** Tweet ID (not URL) */
    tweetId: string;
    /** Actual UNIX epoch of poll start */
    startTime: number;
    /** Actual UNIX epoch of poll end */
    endTime: number,
    /** Time duration of poll */
    durationMinutes: number;
  };

  /** Actual votes for each. Index 0 is the first option, Index 1 the other, etc */
  votesInfo: {
    /** Two letter ToC report mark, i.e. name */
    tocReportingMark: string;
    votes: number;
    /** Votes hisotory */
    votingHistory: {
      /* UNIX epoch number of time when votes taken. Will be subtracted from startTime. */
      timestamp: number;
      votes: number;
    }[]
  }[] // As long as options
}


/** What is receiveds by server */
export interface NewAPI {
  apiVersion: string,
  knockout: SinglePoll[],
  quarterfinal: SinglePoll[],
  semifinal: SinglePoll[],
  playoff: SinglePoll,
  final: SinglePoll,
}

interface NewGraphProps {
  /** Poll for this graph */
  poll: SinglePoll;
  isClose?: boolean;
  /** Explicitly use a longer graph */
  useLongGraph?: boolean;
}


const useStyles = makeStyles({
  graphContainer: {
    paddingTop: "30px",
  }
})


/**
 * Create a single graph for one poll
 * @param props Props
 */
const Graph: React.FunctionComponent<NewGraphProps> =  function Graph (props) {
  if (props.poll.votingStatus === VoteStates.UPCOMING) {
    return null; // As the vote is not yet open
  }

  const classes = useStyles()

  // Get votes
  let oneVotes = props.poll.votesInfo[0].votingHistory.map((thisResult) => {
    //console.log(resultHere.time - historydata.startTime);
    return {
      x: (thisResult.timestamp - props.poll.votesInfo[0].votingHistory[0].timestamp) / 1000 / 60 / 60,
      y: thisResult.votes
    }
  });
  let twoVotes = props.poll.votesInfo[1].votingHistory.map((thisResult) => {
    //console.log(resultHere.time - historydata.startTime);
    return {
      x: (thisResult.timestamp - props.poll.votesInfo[1].votingHistory[0].timestamp) / 1000 / 60 / 60,
      y: thisResult.votes
    }
  });

  let differences = props.poll.votesInfo[0].votingHistory.reduce(function (currentArray, resultHere, index) {
    
    const voteResult1 = resultHere;
    const voteResult2 = props.poll.votesInfo[1].votingHistory[index];

    if (typeof voteResult2 === "undefined") {
      // We can;t map this to one in the other array
      return;
    }

    // Add new diff
    currentArray.push({
      x: (resultHere.timestamp - props.poll.votesInfo[0].votingHistory[0].timestamp) / 1000 / 60 / 60,
      y: voteResult1.votes > voteResult2.votes ? voteResult1.votes - voteResult2.votes : voteResult2.votes - voteResult1.votes
    })
    return currentArray;

  }, []);
  
  // Ok, so we need to line graphs:
  return (
    <div className={classes.graphContainer}>
    <VictoryChart
      theme={VictoryTheme.material}
      height={300}
      width={props.useLongGraph ? 500 * LONG_PROP_SCALE_FACTOR : 500 }
      domainPadding={{ y: 100 }}
      padding={{
        top: 0,
        bottom: 80,
        left: 100
      }}
      containerComponent={
        // @ts-ignore
        <VictoryZoomVoronoiContainer voronoiDimension="x"
          radius={100000}
          // @ts-ignore
          labels={({ datum }) => `${datum.y}`}
          labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white", fontSize: 20 }} />}
        />
      }
    >
      <VictoryAxis
        dependentAxis
        key={0}
        label="Votes"
        fixLabelOverlap
        style={{
          axis: { stroke: "#756f6a" },
          axisLabel: { fontSize: 20, padding: 55 },
          tickLabels: { fontSize: 20, padding: 5 },
          grid: { stroke: "grey" },
          ticks: { stroke: "grey" },
        }}
      />
      <VictoryAxis
        label="Time (hrs)"
        fixLabelOverlap
        style={{
          axis: { stroke: "#756f6a" },
          axisLabel: { fontSize: 20, padding: 40 },
          tickLabels: { fontSize: 20, padding: 5 },
          grid: { stroke: "grey" },
          ticks: { stroke: "grey" },
        }}
      />
      <VictoryLine
        style={{
          data: { stroke: "rgb(65, 75, 86)", strokeWidth: 2 },
          parent: { border: "1px solid #ccc" },
        }}
        data={differences}
      />
      <VictoryLine
        style={{
          data: { stroke: GetTocColor(props.poll.votesInfo[0].tocReportingMark), strokeWidth: props.isClose ? 2.5 : 4 },
          parent: { border: "1px solid #ccc" },
          labels: {
            fill: GetTocColor(props.poll.votesInfo[0].tocReportingMark)
          }
        }}
        data={oneVotes}
      />
      <VictoryLine
        style={{
          data: { stroke: GetTocColor(props.poll.votesInfo[1].tocReportingMark), strokeWidth: props.isClose ? 2.5 : 4 },
          parent: { border: "1px solid #ccc" },
          labels: {
            fill: GetTocColor(props.poll.votesInfo[1].tocReportingMark)
          }
        }}
        data={twoVotes}
      />
    </VictoryChart>
    </div>
  )

};

export default Graph;
