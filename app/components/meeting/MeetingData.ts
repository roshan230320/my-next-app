export interface MeetingLocation {
  id: number;
  name: string;
}

export const meetingLocations: MeetingLocation[] = [
  {
    id: 1,
    name: "Marine Drive",
  },
  {
    id: 2,
    name: "Long Drive",
  },
  {
    id: 3,
    name: "Coffee Shop",
  },
  {
    id: 4,
    name: "Your Choice ❤️",
  },
];

export interface MeetingQuestion {
  title: string;
  subtitle: string;
  yesButton: string;
}

export const meetingQuestion: MeetingQuestion = {
  title: "One Last Question...",
  subtitle:
    "Would you like to go on a date with me? ❤️",
  yesButton: "Yes ❤️",
};

export interface MeetingFormData {
  date: string;
  time: string;
  location: string;
  message: string;
}

export const initialMeetingForm: MeetingFormData = {
  date: "",
  time: "",
  location: "",
  message: "",
};

export const successContent = {
  title: "Yay! ❤️",
  subtitle:
    "I'm already looking forward to meeting you. Thank you for saying yes. 🌻",
};