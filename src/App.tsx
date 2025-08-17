import { useState, useEffect, useRef } from "react";
import { TextField, Typography, Box, ThemeProvider } from "@mui/material";
import { weddingGuests } from "./constants";
import { theme } from "./theme";
import { ResultBox } from "./styles";
import { analytics } from "./analytics";
import TableLayout from "./components/TableLayout";

// Create merged guest options that combine partners
const createGuestOptions = () => {
  const options: string[] = [];
  const processedPartners = new Set<string>();

  Object.entries(weddingGuests).forEach(([name, guest]) => {
    // Skip if this guest is already processed as someone's partner
    if (processedPartners.has(name)) {
      return;
    }

    // Check if this guest has a partner
    let partnerName = null;
    if (guest.partner && weddingGuests[guest.partner]) {
      partnerName = guest.partner;
    } else {
      // Check for reverse partner relationship
      const reversePartner = Object.entries(weddingGuests).find(
        ([, otherGuest]) => otherGuest.partner === name
      );
      if (reversePartner) {
        partnerName = reversePartner[0];
      }
    }

    if (partnerName) {
      // Create combined option for partners using actual names
      const combinedName = `${guest.name} & ${weddingGuests[partnerName].name}`;
      options.push(combinedName);
      processedPartners.add(name);
      processedPartners.add(partnerName);
    } else {
      // Single guest option using actual name
      options.push(guest.name);
    }
  });

  return options;
};

const guestOptions = createGuestOptions();

function App() {
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  const [partnerTableNumber, setPartnerTableNumber] = useState<number | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Refs for focus management
  const nameInputRef = useRef<HTMLInputElement>(null);

  const sortedTables = [tableNumber, partnerTableNumber]
    .filter(Boolean)
    .sort((a, b) => (a || 0) - (b || 0));

  const handleNameInput = (inputName: string) => {
    setInputValue(inputName);

    if (inputName.trim() === "") {
      setSuggestions([]);
      setSelectedGuest(null);
      setTableNumber(null);
      return;
    }

    // Find names that contain the input letters (case insensitive)
    const matchingNames = guestOptions.filter((option) =>
      option.toLowerCase().includes(inputName.toLowerCase())
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

    // Show top 5 suggestions
    setSuggestions(sortedMatches.slice(0, 5));

    // Check for exact match
    const exactMatch = sortedMatches.find(
      (option) => option.toLowerCase() === inputName.toLowerCase()
    );

    if (exactMatch) {
      // Handle combined partner names
      if (exactMatch.includes(" & ")) {
        const [name1, name2] = exactMatch.split(" & ");
        // Find guests by their actual names
        const guest1 = Object.values(weddingGuests).find(
          (g) => g.name === name1
        );
        const guest2 = Object.values(weddingGuests).find(
          (g) => g.name === name2
        );

        if (guest1 && guest2) {
          setSelectedGuest(exactMatch);
          setTableNumber(guest1.seat.number);
          setPartnerTableNumber(guest2.seat.number);

          // Track guest lookup
          analytics.trackGuestLookup(exactMatch, guest1.seat.number);
          analytics.identify(exactMatch);
        }
      } else {
        // Single guest - find by actual name
        const guest = Object.values(weddingGuests).find(
          (g) => g.name === exactMatch
        );
        if (guest) {
          const tableNum = guest.seat.number;
          setSelectedGuest(exactMatch);
          setTableNumber(tableNum);

          // Check if guest has a partner (bidirectional)
          let partnerTableNum = null;
          if (guest.partner) {
            // Direct partner relationship - find partner by name
            const partnerGuest = Object.values(weddingGuests).find(
              (g) => g.name === guest.partner
            );
            if (partnerGuest) {
              partnerTableNum = partnerGuest.seat.number;
            }
          } else {
            // Check for reverse partner relationship
            const reversePartner = Object.values(weddingGuests).find(
              (otherGuest) => otherGuest.partner === guest.name
            );
            if (reversePartner) {
              partnerTableNum = reversePartner.seat.number;
            }
          }
          setPartnerTableNumber(partnerTableNum);

          // Track guest lookup
          analytics.trackGuestLookup(exactMatch, tableNum);
          analytics.identify(exactMatch);
        }
      }
    } else {
      setSelectedGuest(null);
      setTableNumber(null);
      setPartnerTableNumber(null);
    }
  };

  const selectSuggestion = (option: string) => {
    // Handle combined partner names
    if (option.includes(" & ")) {
      const [name1, name2] = option.split(" & ");
      // Find guests by their actual names
      const guest1 = Object.values(weddingGuests).find((g) => g.name === name1);
      const guest2 = Object.values(weddingGuests).find((g) => g.name === name2);

      if (guest1 && guest2) {
        // For couples, show first names only in the input field
        const displayName =
          guest1.name.split(" ")[0] + " & " + guest2.name.split(" ")[0];
        setInputValue(displayName);
        setSelectedGuest(option); // Keep full name for functionality
        setTableNumber(guest1.seat.number);
        setPartnerTableNumber(guest2.seat.number);
        setSuggestions([]);

        // Track guest lookup
        analytics.trackGuestLookup(option, guest1.seat.number);
        analytics.identify(option);
      }
    } else {
      // Single guest - find by actual name
      const guest = Object.values(weddingGuests).find((g) => g.name === option);
      if (guest) {
        const tableNum = guest.seat.number;
        setInputValue(option);
        setSelectedGuest(option);
        setTableNumber(tableNum);

        // Check if guest has a partner (bidirectional)
        let partnerTableNum = null;
        if (guest.partner && weddingGuests[guest.partner]) {
          // Direct partner relationship
          partnerTableNum = weddingGuests[guest.partner].seat.number;
        } else {
          // Check for reverse partner relationship
          const reversePartner = Object.entries(weddingGuests).find(
            ([, otherGuest]) => otherGuest.partner === guest.name
          );
          if (reversePartner) {
            partnerTableNum = reversePartner[1].seat.number;
          }
        }
        setPartnerTableNumber(partnerTableNum);

        setSuggestions([]);

        // Track guest lookup
        analytics.trackGuestLookup(option, tableNum);
        analytics.identify(option);
      }
    }
  };

  const showNotFoundError =
    inputValue.trim() !== "" && suggestions.length === 0 && !selectedGuest;

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

  const simplifiedCoupleName = (name: string) => {
    if (name.includes(" & ")) {
      // For couples, show first names only
      const [name1, name2] = name.split(" & ");
      return name1.split(" ")[0] + " & " + name2.split(" ")[0];
    }
    // For single names, show full name
    return name;
  };

  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (suggestionRef.current) {
      suggestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [tableNumber, partnerTableNumber]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 2,
          paddingTop: 4,
          background: theme.palette.background.default,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              textAlign: "center",
              color: theme.palette.primary.main,
              fontSize: "2.5rem",
            }}
          >
            Welcome!
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              color: theme.palette.primary.main,
              marginBottom: 3,
              fontSize: "1.2rem",
            }}
          >
            Find your seat
          </Typography>

          <Box sx={{ width: "100%", marginBottom: 1 }}>
            <TextField
              inputRef={nameInputRef}
              value={inputValue}
              onChange={(e) => handleNameInput(e.target.value)}
              label={selectedGuest ? undefined : "Enter your name"}
              variant="standard"
              fullWidth
              autoFocus
              inputProps={{
                autoComplete: "name",
                inputMode: "text",
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: theme.palette.primary.main,
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.primary.light,
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: theme.palette.primary.light,
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: theme.palette.primary.main,
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: theme.palette.primary.main,
                },
              }}
            />

            {showNotFoundError && (
              <Box
                sx={{
                  marginTop: 1,
                  padding: 2,
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
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
                      padding: 2,
                      border: `1px solid ${theme.palette.primary.light}`,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={theme.palette.primary.main}
                    >
                      {simplifiedCoupleName(suggestion)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {tableNumber && selectedGuest && (
            <Box ref={suggestionRef} paddingTop={0.5}>
              <ResultBox>
                <Typography variant="h4" component="div">
                  {partnerTableNumber && partnerTableNumber !== tableNumber
                    ? `Tables ${sortedTables.join(" and ")}`
                    : `Table ${tableNumber}`}
                </Typography>

                {/* Show table mates */}
                <Box sx={{ marginTop: 1, paddingX: 2 }}>
                  {/* Get all guests at the selected table(s) */}
                  {(() => {
                    const tableMates = new Set<string>();

                    // Add guests from primary table
                    Object.values(weddingGuests).forEach((guest) => {
                      if (guest.seat.number === tableNumber) {
                        tableMates.add(guest.name.split(" ")[0]);
                      }
                    });

                    // Add guests from partner table if different
                    if (
                      partnerTableNumber &&
                      partnerTableNumber !== tableNumber
                    ) {
                      Object.values(weddingGuests).forEach((guest) => {
                        if (guest.seat.number === partnerTableNumber) {
                          tableMates.add(guest.name.split(" ")[0]);
                        }
                      });
                    }

                    // Remove the selected guest and their partner from the list
                    if (selectedGuest) {
                      if (selectedGuest.includes(" & ")) {
                        // For couples, remove both names
                        const [name1, name2] = selectedGuest.split(" & ");
                        tableMates.delete(name1.split(" ")[0]);
                        tableMates.delete(name2.split(" ")[0]);
                      } else {
                        // For single guests, remove their name and their partner's name
                        const guest = Object.values(weddingGuests).find(
                          (g) => g.name === selectedGuest
                        );
                        if (guest) {
                          tableMates.delete(guest.name.split(" ")[0]);

                          // Remove partner's name if they have one
                          if (guest.partner) {
                            const partnerGuest = Object.values(
                              weddingGuests
                            ).find((g) => g.name === guest.partner);
                            if (partnerGuest) {
                              tableMates.delete(
                                partnerGuest.name.split(" ")[0]
                              );
                            }
                          } else {
                            // Check for reverse partner relationship
                            const reversePartner = Object.values(
                              weddingGuests
                            ).find((g) => g.partner === guest.name);
                            if (reversePartner) {
                              tableMates.delete(
                                reversePartner.name.split(" ")[0]
                              );
                            }
                          }
                        }
                      }
                    }

                    // Convert to array and merge couples
                    const tableMatesArray = Array.from(tableMates);
                    const mergedTableMates = new Set<string>();
                    const processedPartners = new Set<string>();

                    // Create a map of first names to full names for partner lookup
                    const nameToFullName = new Map();
                    Object.values(weddingGuests).forEach((guest) => {
                      const firstName = guest.name.split(" ")[0];
                      nameToFullName.set(firstName, guest.name);
                    });

                    // First, identify all couples at this table
                    const couples = new Map<string, string>(); // firstName -> partnerFirstName
                    const singlePeople = new Set<string>();

                    tableMatesArray.forEach((firstName) => {
                      const fullName = nameToFullName.get(firstName);
                      const guest = Object.values(weddingGuests).find(
                        (g) => g.name === fullName
                      );

                      if (guest && guest.partner) {
                        const partnerGuest = Object.values(weddingGuests).find(
                          (g) => g.name === guest.partner
                        );
                        if (
                          partnerGuest &&
                          tableMates.has(partnerGuest.name.split(" ")[0])
                        ) {
                          // Both partners are at this table
                          const partnerFirstName =
                            partnerGuest.name.split(" ")[0];
                          couples.set(firstName, partnerFirstName);
                        } else {
                          // Partner not at this table
                          singlePeople.add(firstName);
                        }
                      } else {
                        // No partner, check if someone else's partner
                        const isSomeonesPartner = Object.values(
                          weddingGuests
                        ).some((g) => g.partner === fullName);
                        if (!isSomeonesPartner) {
                          singlePeople.add(firstName);
                        }
                      }
                    });

                    // Create merged list
                    couples.forEach((partnerFirstName, firstName) => {
                      if (
                        !processedPartners.has(firstName) &&
                        !processedPartners.has(partnerFirstName)
                      ) {
                        mergedTableMates.add(
                          `${firstName} & ${partnerFirstName}`
                        );
                        processedPartners.add(firstName);
                        processedPartners.add(partnerFirstName);
                      }
                    });

                    // Add single people
                    singlePeople.forEach((firstName) => {
                      if (!processedPartners.has(firstName)) {
                        mergedTableMates.add(firstName);
                      }
                    });

                    // Sort alphabetically
                    const sortedTableMates =
                      Array.from(mergedTableMates).sort();

                    // Format the list with "and" before the last name
                    let formattedList = "";
                    if (sortedTableMates.length === 1) {
                      formattedList = sortedTableMates[0];
                    } else if (sortedTableMates.length === 2) {
                      formattedList = `${sortedTableMates[0]} and ${sortedTableMates[1]}`;
                    } else {
                      const allButLast = sortedTableMates.slice(0, -1);
                      const last =
                        sortedTableMates[sortedTableMates.length - 1];
                      formattedList = `${allButLast.join(", ")}, and ${last}`;
                    }

                    return (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          lineHeight: 1.6,
                        }}
                      >
                        with {formattedList}
                      </Typography>
                    );
                  })()}
                </Box>
              </ResultBox>

              {/* Table Layout - always visible */}
              <TableLayout
                tableNumber={tableNumber}
                partnerTableNumber={partnerTableNumber || undefined}
              />
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
