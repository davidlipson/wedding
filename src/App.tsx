import { useState, useEffect, useRef } from "react";
import {
  TextField,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@mui/material";
import { weddingGuests, trivia } from "./constants";
import { theme } from "./theme";
import { ResultBox, TriviaBox, AnswerResultBox } from "./styles";
import { analytics } from "./analytics";

// Convert the object to an array for the autocomplete
const guestOptions = Object.keys(weddingGuests);

function App() {
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Trivia game state
  const [triviaStarted, setTriviaStarted] = useState(false);
  const [triviaCompleted, setTriviaCompleted] = useState(false);
  const [triviaOver, setTriviaOver] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  // Refs for focus management
  const nameInputRef = useRef<HTMLInputElement>(null);
  const triviaInputRef = useRef<HTMLInputElement>(null);

  const handleNameInput = (inputName: string) => {
    setInputValue(inputName);

    if (inputName.trim() === "") {
      setSuggestions([]);
      setSelectedGuest(null);
      setTableNumber(null);
      return;
    }

    // Find names that contain the input letters (case insensitive)
    const matchingNames = guestOptions.filter((guest) =>
      guest.toLowerCase().includes(inputName.toLowerCase())
    );

    // Sort by similarity (exact matches first, then by length)
    const sortedMatches = matchingNames.sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      const inputLower = inputName.toLowerCase();

      // Exact match comes first
      if (aLower === inputLower) return -1;
      if (bLower === inputLower) return 1;

      // Starts with input comes next
      if (aLower.startsWith(inputLower) && !bLower.startsWith(inputLower))
        return -1;
      if (bLower.startsWith(inputLower) && !aLower.startsWith(inputLower))
        return 1;

      // Then by length (shorter names first)
      return a.length - b.length;
    });

    // Show top 3 suggestions
    setSuggestions(sortedMatches.slice(0, 3));

    // Check for exact match
    const exactMatch = sortedMatches.find(
      (guest) => guest.toLowerCase() === inputName.toLowerCase()
    );

    if (exactMatch) {
      const tableNum = weddingGuests[exactMatch].seat.number;
      setSelectedGuest(exactMatch);
      setTableNumber(tableNum);

      // Track guest lookup
      analytics.trackGuestLookup(exactMatch, tableNum);
      analytics.identify(exactMatch);
    } else {
      setSelectedGuest(null);
      setTableNumber(null);
    }
  };

  const selectSuggestion = (guestName: string) => {
    const tableNum = weddingGuests[guestName].seat.number;
    setInputValue(guestName);
    setSelectedGuest(guestName);
    setTableNumber(tableNum);
    setSuggestions([]);

    // Track guest lookup
    analytics.trackGuestLookup(guestName, tableNum);
    analytics.identify(guestName);
  };

  const startTrivia = () => {
    // Track trivia start
    if (selectedGuest) {
      analytics.trackTriviaStart(selectedGuest);
    }

    setTriviaStarted(true);
    setTriviaCompleted(false);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setShowResult(false);
    setScore(0);
  };

  const checkAnswer = () => {
    const currentQuestion = trivia[currentQuestionIndex];
    let correct = false;

    if (currentQuestion.openEnded) {
      correct = true; // For open-ended, we'll show "Thanks for playing!"
    } else if (currentQuestion.keywords) {
      const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, "");
      correct = currentQuestion.keywords.some((keyword) =>
        normalizedUserAnswer.includes(keyword.toLowerCase().replace(/\s+/g, ""))
      );
    }

    setIsCorrect(correct);
    if (correct && !currentQuestion.openEnded) {
      setScore(score + 1);
    }

    // If this is the last question, go directly to completion screen
    if (currentQuestionIndex === trivia.length - 1) {
      setTriviaCompleted(true);
      setTriviaStarted(false);
    } else {
      setShowResult(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < trivia.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setShowResult(false);
    } else {
      // End of trivia - show completion screen
      setTriviaCompleted(true);
      setTriviaStarted(false);
    }
  };

  const submitScore = () => {
    // Track the score submission
    if (selectedGuest) {
      analytics.trackScoreSubmission(selectedGuest, score, correctAnswers);
    }

    // Reset everything for a new game
    setTriviaCompleted(false);
    setTriviaOver(true);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setShowResult(false);
    setScore(0);
  };

  const currentQuestion = trivia[currentQuestionIndex];
  const showNotFoundError =
    inputValue.trim() !== "" && suggestions.length === 0 && !selectedGuest;

  const correctAnswers = trivia.filter((q) => !q.openEnded).length;

  // Focus on name input when page loads
  useEffect(() => {
    // Longer delay for mobile to ensure page is fully loaded
    const timer = setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
        // For mobile, also trigger click to ensure virtual keyboard shows
        nameInputRef.current.click();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Focus on trivia input when trivia starts or question changes
  useEffect(() => {
    if (triviaStarted && triviaInputRef.current) {
      // Longer delay for mobile to ensure the input is rendered and ready
      const timer = setTimeout(() => {
        if (triviaInputRef.current) {
          triviaInputRef.current.focus();
          // For mobile, also trigger click to ensure virtual keyboard shows
          triviaInputRef.current.click();
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [triviaStarted, currentQuestionIndex]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 2,
          paddingTop: 4,
          background: "linear-gradient(145deg, #f5f1f8 0%, #ede4f0 100%)",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              textAlign: "center",
              color: theme.palette.primary.main,
              fontWeight: "bold",
              marginBottom: 1,
              background: "linear-gradient(45deg, #8b5a9f 30%, #f8bbd9 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              marginBottom: 3,
            }}
          >
            Find your table assignment
          </Typography>

          <Box sx={{ width: "100%", marginBottom: 1 }}>
            <TextField
              inputRef={nameInputRef}
              value={inputValue}
              onChange={(e) => handleNameInput(e.target.value)}
              label="Enter your full name"
              variant="outlined"
              fullWidth
              autoFocus
              inputProps={{
                autoComplete: "name",
                inputMode: "text",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  fontSize: "1.1rem",
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />

            {showNotFoundError && (
              <Box
                sx={{
                  marginTop: 1,
                  padding: 2,
                  backgroundColor: "error.light",
                  color: "error.contrastText",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">
                  Guest not found... check your spelling?
                </Typography>
              </Box>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {suggestions.map((suggestion, index) => (
                  <Box
                    key={index}
                    onClick={() => selectSuggestion(suggestion)}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 2,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      padding: 2,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.light + "20",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "medium",
                      }}
                    >
                      {suggestion}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {tableNumber && (
            <ResultBox>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Table {tableNumber}
              </Typography>
            </ResultBox>
          )}

          {/* Trivia Section */}
          {!triviaStarted &&
            !triviaCompleted &&
            !triviaOver &&
            selectedGuest && (
              <Box sx={{ textAlign: "center", marginTop: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={startTrivia}
                  sx={{
                    borderRadius: 3,
                    padding: "14px 40px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    width: "100%",
                    backgroundColor: "#4caf50",
                  }}
                >
                  Play Trivia
                </Button>
              </Box>
            )}

          {/* Trivia Completion Screen */}
          {triviaCompleted && (
            <TriviaBox>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  textAlign: "center",
                  color: "text.primary",
                }}
              >
                You got {score} / {correctAnswers} question
                {score > 1 ? "s" : ""} correct!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  marginBottom: 3,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                {score > 3
                  ? "Thanks for knowing us so well :)"
                  : score > 1
                  ? "Not bad!"
                  : "That's a bummer..."}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                {selectedGuest
                  ? `Are you ${selectedGuest}?`
                  : "Select your name to submit!"}
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={submitScore}
                  disabled={!selectedGuest}
                  sx={{
                    borderRadius: 2,
                    padding: "12px 30px",
                    fontWeight: "bold",
                  }}
                >
                  Submit Your Score
                </Button>
              </Box>
            </TriviaBox>
          )}

          {triviaStarted && currentQuestion && (
            <TriviaBox>
              {/* Progress Bar */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  marginBottom: 2,
                }}
              >
                {Array.from({ length: trivia.length }, (_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: 6,
                      borderRadius: 2,
                      backgroundColor:
                        index <= currentQuestionIndex
                          ? theme.palette.primary.main
                          : "rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                ))}
              </Box>

              <Typography variant="body1" sx={{ marginBottom: 3 }}>
                {currentQuestion.question}
              </Typography>

              {!showResult && (
                <Box>
                  <TextField
                    inputRef={triviaInputRef}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    label="Your answer"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    multiline={currentQuestion.openEnded}
                    rows={currentQuestion.openEnded ? 3 : undefined}
                    inputProps={{
                      maxLength: currentQuestion.openEnded ? undefined : 50,
                      inputMode: currentQuestion.openEnded ? "text" : "text",
                      autoComplete: "off",
                    }}
                    sx={{
                      marginBottom: 2,
                      "& .MuiInputBase-input": {
                        wordWrap: "break-word",
                        whiteSpace: currentQuestion.openEnded
                          ? "pre-wrap"
                          : "normal",
                      },
                    }}
                    onKeyPress={(e) => {
                      if (
                        e.key === "Enter" &&
                        (!currentQuestion.openEnded || !e.shiftKey)
                      ) {
                        e.preventDefault();
                        checkAnswer();
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={checkAnswer}
                    disabled={!userAnswer.trim()}
                    sx={{ borderRadius: 2, width: "100%", boxShadow: 0 }}
                  >
                    Submit Answer
                  </Button>
                </Box>
              )}

              {showResult && (
                <Box>
                  {currentQuestion.openEnded ? (
                    <AnswerResultBox isCorrect={true}>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Thanks for playing!
                      </Typography>
                    </AnswerResultBox>
                  ) : (
                    <AnswerResultBox isCorrect={isCorrect}>
                      <Typography variant="body1" fontWeight="bold">
                        {isCorrect ? "Yup," : "Nope,"} {currentQuestion.answer}!
                      </Typography>
                    </AnswerResultBox>
                  )}

                  <Box sx={{ textAlign: "center", marginTop: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={nextQuestion}
                      sx={{ borderRadius: 2, width: "100%" }}
                    >
                      {currentQuestionIndex < trivia.length - 1
                        ? "Next Question"
                        : "Finish Trivia"}
                    </Button>
                  </Box>
                </Box>
              )}
            </TriviaBox>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
