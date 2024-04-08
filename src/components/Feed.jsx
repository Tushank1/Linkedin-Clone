import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Posts from "./Posts";
import { db } from "../firebase";

function Feed() {
  const [posts, setposts] = useState([]); // Array of posts to be displayed on the page

  useEffect(() => {
    // Function that gets all the data from the database and sets it as a state variable 'posts'
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault(); // Prevent form submission which refreshes the page
  };
  return (
    <div className="feed">
      <div className="feed_inputConatiner">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="What's on your mind?" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Posts />
      ))}
      <Posts
        name="Tushank Bhardwaj"
        description="Here is me test"
        message="Learning"
      />
    </div>
  );
}

export default Feed;
