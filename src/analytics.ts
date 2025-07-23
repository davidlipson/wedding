import mixpanel from "mixpanel-browser";

// Initialize Mixpanel with your project token
const MIXPANEL_TOKEN = "9e070bc030b18c7d5fd26c86b42e0e6d";

mixpanel.init(MIXPANEL_TOKEN, {
  debug: false, // Set to true for development
  track_pageview: true,
  persistence: "localStorage",
});

export const analytics = {
  // Track score submission
  trackScoreSubmission: (
    guestName: string,
    score: number,
    totalQuestions: number
  ) => {
    mixpanel.track("Score Submitted", {
      guest_name: guestName,
      score: score,
      total_questions: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      timestamp: new Date().toISOString(),
    });
  },

  // Track trivia start
  trackTriviaStart: (guestName: string) => {
    mixpanel.track("Trivia Started", {
      guest_name: guestName,
      timestamp: new Date().toISOString(),
    });
  },

  // Track guest lookup
  trackGuestLookup: (guestName: string, tableNumber: number) => {
    mixpanel.track("Guest Found", {
      guest_name: guestName,
      table_number: tableNumber,
      timestamp: new Date().toISOString(),
    });
  },

  // Identify user
  identify: (guestName: string) => {
    mixpanel.identify(guestName);
    mixpanel.people.set({
      $name: guestName,
      $last_seen: new Date(),
    });
  },
};

export default analytics;
