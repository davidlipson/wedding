type Seat = {
  number: number;
  position: "A" | "B" | "C" | "D" | "E" | "F";
};

type Guest = {
  name: string;
  seat: Seat;
};

export const weddingGuests: Record<string, Guest> = {
  "Alice Johnson": {
    name: "Alice Johnson",
    seat: { number: 1, position: "A" },
  },
  "Bob Smith": {
    name: "Bob Smith",
    seat: { number: 3, position: "C" },
  },
  "Carol Williams": {
    name: "Carol Williams",
    seat: { number: 2, position: "B" },
  },
  "Frank Miller": {
    name: "Frank Miller",
    seat: { number: 2, position: "B" },
  },
  "Grace Wilson": {
    name: "Grace Wilson",
    seat: { number: 3, position: "C" },
  },
  "Henry Moore": {
    name: "Henry Moore",
    seat: { number: 1, position: "A" },
  },
  "Jack Anderson": {
    name: "Jack Anderson",
    seat: { number: 4, position: "D" },
  },
  "Karen Thomas": {
    name: "Karen Thomas",
    seat: { number: 2, position: "B" },
  },
  "Lucas Jackson": {
    name: "Lucas Jackson",
    seat: { number: 3, position: "C" },
  },
  "Maria Garcia": {
    name: "Maria Garcia",
    seat: { number: 5, position: "E" },
  },
  "Rachel Lewis": {
    name: "Rachel Lewis",
    seat: { number: 5, position: "E" },
  },
  "Samuel Walker": {
    name: "Samuel Walker",
    seat: { number: 1, position: "A" },
  },
  "Tina Hall": {
    name: "Tina Hall",
    seat: { number: 4, position: "D" },
  },
  "Victor Allen": {
    name: "Victor Allen",
    seat: { number: 2, position: "B" },
  },
  "Wendy Young": {
    name: "Wendy Young",
    seat: { number: 3, position: "C" },
  },
  "Xavier King": {
    name: "Xavier King",
    seat: { number: 5, position: "E" },
  },
  "Yvonne Wright": {
    name: "Yvonne Wright",
    seat: { number: 1, position: "A" },
  },
};
