import lakeside from "./lakeside.png";
import ticket from "./ticket.png";
import Education from "./Education.png";
import Entertainment from "./Entertainment.png";
import Cultural from "./Cultural.png";
import Sports from "./sports.png";
import Technology from "./Technology.png";
import Travel from "./Travel.png";
import Wedding from "./Wedding.png";
import HeroImage from "./Hero.png";
import personalised from "./homebgimage.png";
import homebgplan from "./homebgplan.png";
import SoundOfChristmas from "./SoundOfChristmas.png"
import meetRoyal from "./meetRoyal.png"
import globalengineer from "./globalengineer.png"
import cricketbiz from "./cricketbiz.png"
import valentine from "./valentine.png"
import startup from "./startup.png"
import mindfool from "./mindfool.png"
import khushibaby from "./khushibaby.png"
import ticketicon from "./ticketicon.png"
import eventIllustration from "./eventIllustration.svg"
import ticketevent from "./ticketevent.png"
import freeevent from "./freeevent.png"
import calendar from "./calendar.png"

export const assets = {
  lakeside,
  ticket,
  Wedding,
  Travel,
  Technology,
  Sports,
  Cultural,
  Entertainment,
  Education,
  HeroImage,
  personalised,
  homebgplan,
  ticketicon,
  eventIllustration,
  ticketevent,
  freeevent,calendar
};

export const formatTime = (time) => {
  if (!time) return "Invalid time";
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12; 
  return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${period}`;
};

export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return {
      start: new Date(tomorrow.setHours(0, 0, 0, 0)),
      end: new Date(tomorrow.setHours(23, 59, 59, 999)),
  };
};

export const getThisWeek = () => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
  const lastDayOfWeek = new Date(today.setDate(firstDayOfWeek.getDate() + 6)); // Saturday
  return {
      start: new Date(firstDayOfWeek.setHours(0, 0, 0, 0)),
      end: new Date(lastDayOfWeek.setHours(23, 59, 59, 999)),
  };
};

export const getThisWeekend = () => {
  const today = new Date();
  const firstDayOfWeekend = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // Saturday
  const lastDayOfWeekend = new Date(today.setDate(firstDayOfWeekend.getDate() + 1)); // Sunday
  return {
      start: new Date(firstDayOfWeekend.setHours(0, 0, 0, 0)),
      end: new Date(lastDayOfWeekend.setHours(23, 59, 59, 999)),
  };
};

export const getNextWeek = () => {
  const today = new Date();
  const firstDayOfNextWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7)); // Next Sunday
  const lastDayOfNextWeek = new Date(today.setDate(firstDayOfNextWeek.getDate() + 6)); // Next Saturday
  return {
      start: new Date(firstDayOfNextWeek.setHours(0, 0, 0, 0)),
      end: new Date(lastDayOfNextWeek.setHours(23, 59, 59, 999)),
  };
};

export const getThisMonth = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  return {
      start: new Date(firstDayOfMonth.setHours(0, 0, 0, 0)),
      end: new Date(lastDayOfMonth.setHours(23, 59, 59, 999)),
  };
};

export const getNextMonth = () => {
  const today = new Date();
  const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  return {
      start: new Date(firstDayOfNextMonth.setHours(0, 0, 0, 0)),
      end: new Date(lastDayOfNextMonth.setHours(23, 59, 59, 999)),
  };
};

export const eventDetails = [
  {
    id:0,
    eventName: "Lakeside Camping at Pawna",
    eventOrganiser:"pehchaan",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Adventure Geek - Explore the Unexplored, Mumbai",
    year: "NOV",
    date: "25-26",
    time: "8:30 AM - 7:30 PM",
    ticketPrice: "1400",
    image:lakeside,
    category:"Travel & Adventure",
    contactNumber:7890569872,
  },
  {
    id:1,
    eventName: "Startup Talks -Innovative event for founders & Startup Enthusiasts of Delhi",
    eventOrganiser:"City Youth Movement",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "New Delhi, India",
    year: "DEC",
    date: "17",
    time: "3 pM - 6 PM",
    ticketPrice: "FREE",
    image:startup,
    category:"Educational & Business",
    contactNumber:7890569872,
  },
  {
    id:2,
    eventName: "Sound Of Christmas  2023",
    eventOrganiser:"pehchaan",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Bal Gandharva Rang Mandir, Mumbai",
    year: "DEC",
    date: "02",
    time: "6:30 PM - 9:30 PM",
    ticketPrice: "499",
    image:SoundOfChristmas,
    category:"Cultural & Arts",
    contactNumber:7890569872,
  },
  {
    id:3,
    eventName: "Meet the Royal College of Art in Mumbai 2023",
    eventOrganiser:"City Youth Movement",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Sofitel Mumbai BKC, Mumbai",
    year: "DEC ",
    date: "02",
    time: "10 AM - 5 PM",
    ticketPrice: "FREE",
    image:meetRoyal,
    category:"Educational & Business",
    contactNumber:7890569872,
  },
  {
    id:4,
    eventName: "Global Engineering Education Expo 2023",
    eventOrganiser:"pehchaan",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "The St. Regis, Mumbai",
    year: "DEC ",
    date: "03",
    time: "10 AM - 2 PM",
    ticketPrice: "FREE",
    image:globalengineer,
    category:"Travel & Adventure",
    contactNumber:7890569872,
  },
  {
    id:5,
    eventName: "Cricket Business Meetup",
    eventOrganiser:"City Youth Movement",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Play The Turf, Malad, Mumbai",
    year: "DEC ",
    date: "08",
    time: "6:30 PM - 9:30 PM",
    ticketPrice: "399",
    image:cricketbiz,
    category:"Sports & Fitness",   
    contactNumber:7890569872,
  },
  {
    id:6,
    eventName: "Valentine's Day Sail on a Yacht in Mumbai",
    eventOrganiser:"pehchaan",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Mumbai",
    year: "DEC ",
    date: "08",
    time: "7 aM - 8 PM",
    ticketPrice: "2999",
    image:valentine,
    category:"Travel & Adventure",
    contactNumber:7890569872,
  },
  {
    id:7,
    eventName: "MindFool India Tour - Vir Das",
    eventOrganiser:"pehchaan",
    description:"Event Title: MindFool India Tour with Vir Das Date and Time: [Date], 8:00 PM - 9:30 PM Organizer: Pehchaan Events location: [Venue Name], [City] Description: Get ready to laugh, think, and question everything you thought you knew! 🤯🎤 Vir Das, the master of wit and observational humor, is hitting the stage as part of his MindFool India Tour. Brace yourself for an evening that blends comedy, storytelling, and a dash of irreverence. What’s in Store: Laughs Unlimited: Vir Das, known for his razor-sharp wit, will take you on a rollercoaster ride through life’s absurdities. From politics to pop culture, no topic is safe! Thought-Provoking Insights: Beyond the laughs, Vir dives deep into societal norms, identity, and the human condition. Prepare to question your own assumptions. Interactive Crowd Moments: Vir thrives on audience interaction. Who knows—you might become part of his hilarious anecdotes! Surprises: Expect the unexpected. Vir’s shows are like a box of chocolates—you never know what you’ll get (except laughter, of course).Who Should Attend: Comedy aficionados Deep thinkersAnyone seeking an escape from the mundane Fans of Vir Das (or those about to become fans!) Attire: Casual chic (because laughter looks good on everyone!) Remember, life is too short to take seriously. Grab your tickets, bring your friends, and let’s get mind-fooled together! 🤪🎟️",
    year: "AUG",
    date: "08",
    time: "8 pM - 9:30 PM",
    ticketPrice: "799",
    image:mindfool,
    category:"Entertainment",
    contactNumber:7890569872,
  },
  {
    id:8,
    eventName: "MindFool India Tour - Vir Das",
    eventOrganiser:"pehchaan",
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Delhi, NCR, India",
    year: "AUG",
    date: "08",
    time: "8 pM - 9:30 PM",
    ticketPrice: "799",
    image:khushibaby,
    category:"Educational & Business",
    contactNumber:7890569872,
  },
];
