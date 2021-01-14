import React from "react";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis, VictoryLine, VictoryTooltip, VictoryContainer, createContainer } from "victory";
//import { colours, ResultHistories, StateInfo } from "./constants";
import { GetTocColor, GetTocName } from '../../../data/TocData'


const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

const LONG_PROP_SCALE_FACTOR = 1.35;

/*interface GraphProps {
  results: StateInfo[],
  history: Record<string, ResultHistories>,
  isToday?: boolean,
  close?: boolean,
  long?: boolean,
}*/

/**
 * 
 * @param {*} voteHistory A
 */
export default function Graph({ voteHistory, teamInfo, tweetId, hasStarted, long }) {
  if (!hasStarted) {
    return null;
  }

  // TODO: Calculate!
  const isClose = false;
  // Vote diff
  const differences = [{ x: "x", y: "y" }];
  const oneVotes = [{ x: "x", y: "y" }];
  const twoVotes = [{ x: "x", y: "y" }];
  const result = {
    one: {

    },
    two: {

    }
  }
  // Ok, so we need to line graphs:
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={350 * 1.5 - 50}
      width={long ? 750 * LONG_PROP_SCALE_FACTOR : 750}
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
          axisLabel: { fontSize: 20, padding: 70 },
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
          data: { stroke: GetTocColor(result.one.name), strokeWidth: isClose ? 2.5 : 4 },
          parent: { border: "1px solid #ccc" },
          labels: {
            fill: GetTocColor(result.one.name)
          }
        }}
        data={oneVotes}
      />
      <VictoryLine
        style={{
          data: { stroke: GetTocColor(result.two.name), strokeWidth: isClose ? 2.5 : 4 },
          parent: { border: "1px solid #ccc" },
          labels: {
            fill: GetTocColor(result.two.name)
          }
        }}
        data={twoVotes}
      />
    </VictoryChart>
  )

};

`const Graphs = (props) => {
  return (
    <>
      {
        props.results.filter(result => result.today === (props.isToday ?? true)).map((result) => {

          const historydata = props.history[result.gameName];
          if (typeof historydata === "undefined") {
            return;
          }

          let oneVotes = historydata.results.map((resultHere) => {
            //console.log(resultHere.time - historydata.startTime);
            return {
              x: (resultHere.timestamp - historydata.results[0].timestamp) / 1000 / 60 / 60,
              y: resultHere.votes.one
            }
          });
          let twoVotes = historydata.results.map((resultHere) => {
            //console.log(resultHere.time - historydata.startTime);
            return {
              x: (resultHere.timestamp - historydata.results[1].timestamp) / 1000 / 60 / 60,
              y: resultHere.votes.two
            }
          });

          let difference = historydata.results.map((resultHere) => {
            return {
              x: (resultHere.timestamp - historydata.results[1].timestamp) / 1000 / 60 / 60,
              y: resultHere.votes.one > resultHere.votes.two ? resultHere.votes.one - resultHere.votes.two : resultHere.votes.two - resultHere.votes.one
            }
          })

          /*let oneVotesPercent = historydata.results.map((resultHere) => {
            //console.log(resultHere.time - historydata.startTime);
            return {
              x: (resultHere.timestamp - historydata.results[0].timestamp) / 1000 / 60 / 60,
              y: ((resultHere.votes.one / (resultHere.votes.one + resultHere.votes.two)) * 100) || 0
            }
          });

          let twoVotesPercent = historydata.results.map((resultHere) => {
            //console.log(resultHere.time - historydata.startTime);
            return {
              x: (resultHere.timestamp - historydata.results[1].timestamp) / 1000 / 60 / 60,
              y: ((resultHere.votes.two / (resultHere.votes.one + resultHere.votes.two)) * 100) || 0
            }
          });*/

          //console.log(result.one.name);
          //console.log(result.two.name);

          return (
            <VictoryChart
              theme={VictoryTheme.material}
              height={350 * 1.5 - 50}
              width={props.long ? 750 * LONG_PROP_SCALE_FACTOR : 750}
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
                  labels={({ datum }) => \`\${datum.y}\`}
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
                  axisLabel: { fontSize: 20, padding: 70 },
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
              {/* If Picadilly and DLR, PLOT */}
              {
                result.one.name === "DLR" && result.two.name === "Piccadilly" ?
                  // DLR
                  <VictoryLine
                    name={result.one.name}
                    style={{
                      data: { stroke: colours["DLR"], strokeWidth: props.close ? 2 : 4 },
                      parent: { border: "1px solid #ccc" },
                    }}
                    data={[
                      {
                        x: 0,
                        y: 1711
                      },
                      {
                        x: (twoVotes[twoVotes.length - 1] || { x: 0 }).x,
                        y: 1711
                      }
                    ]}
                  />
                  : null
              }
              {
                result.one.name === "DLR" && result.two.name === "Piccadilly" ?
                  // DLR
                  <VictoryLine
                    style={{
                      data: { stroke: colours["Piccadilly"], strokeWidth: 3 },
                      parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                      {
                        x: 0,
                        y: 1882
                      },
                      {
                        x: (twoVotes[twoVotes.length - 1] || { x: 0 }).x,
                        y: 1882
                      }
                    ]}
                  />
                  : null
              }
              <VictoryLine
                style={{
                  data: { stroke: "rgb(65, 75, 86)", strokeWidth: 2 },
                  parent: { border: "1px solid #ccc" },
                }}
                data={difference}
              />
              <VictoryLine
                style={{
                  data: { stroke: colours[result.one.name], strokeWidth: props.close ? 2.5 : 4 },
                  parent: { border: "1px solid #ccc" },
                  labels: {
                    fill: colours[result.one.name]
                  }
                }}
                data={oneVotes}
              />
              <VictoryLine
                style={{
                  data: { stroke: colours[result.two.name], strokeWidth: props.close ? 2.5 : 4 },
                  parent: { border: "1px solid #ccc" },
                  labels: {
                    fill: colours[result.two.name]
                  }
                }}
                data={twoVotes}
              />
            </VictoryChart>
          )
        })
      }
    </>
  )
}`

//export default Graphs;