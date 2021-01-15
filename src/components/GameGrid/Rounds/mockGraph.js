
/**
 * Mock graph data for testing
 */
export const mockGraph = {
  /** Set to the midnight unix epoch of the day of the poll */
  scheduledStartDay: 0,

  votingStatus: "IN_PROGRESS",


  /** Actual votes for each. Index 0 is the first option, Index 1 the other, etc */
  votesInfo: [{
    /** Two letter ToC report mark, i.e. name */
    tocReportingMark: "cr",
    votes: 100,
    /** Votes hisotory */
    votingHistory: [
      {
        timestamp: 0,
        votes: 1,
      },
      {
        timestamp: 0.5 * 60 * 60 * 1000,
        votes: 10,
      },
      {
        timestamp: 1 * 60 * 60 * 1000,
        votes: 20,
      },
      {
        timestamp: 1.5 * 60 * 60 * 1000,
        votes: 30,
      },
      {
        timestamp: 2 * 60 * 60 * 1000,
        votes: 50,
      },
    ],
  },
  {
    /** Two letter ToC report mark, i.e. name */
    tocReportingMark: "em",
    votes: 100,
    /** Votes hisotory */
    votingHistory: [
      {
        timestamp: 0,
        votes: 1,
      },
      {
        timestamp: 0.5 * 60 * 60 * 1000,
        votes: 20,
      },
      {
        timestamp: 1 * 60 * 60 * 1000,
        votes: 50,
      },
      {
        timestamp: 1.5 * 60 * 60 * 1000,
        votes: 100,
      },
      {
        timestamp: 2 * 60 * 60 * 1000,
        votes: 30,
      },
    ],
  }] // As long as options
};
