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

export  const formatTime = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
  return `${formattedHour}:${
    minute < 10 ? "0" + minute : minute
  } ${period}`;
};

export const handlePriceFilter =(type)=>{
  
}

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
    description:"Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!city Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!3 Reasons to attend the event:1. The FIRST Christmas concert of Mumbai! 2. A special Christmas Choir! 3. Special Dance performances and many more surprises!",
    location: "Delhi, NCR, India",
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
