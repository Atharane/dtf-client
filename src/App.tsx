import {useState} from "react";
import { createStyles, Container, Title } from "@mantine/core";
import JoinBadge from "./components/JoinBadge";
import SelfMessage from "./components/SelfMessage";
import StrangerMessage from "./components/StrangerMessage";

const useStyles = createStyles((theme) => ({
  app: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    height: "86vh",
    width: "80vw",
    display: "grid",
    gap: theme.spacing.md,
    gridTemplateRows: "auto 1fr",
    marginTop: theme.spacing.xl,
    border: "4px solid #020202",
    borderRadius: "18px",
    boxShadow:  "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
  },

  title: {
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  messagesWrapper: {
    gridRow: "2 / -1",
    overflowY: "auto",
    borderRadius: "10px",
    marginTop: theme.spacing.md,
  },

  inputWrapper: {
    marginBottom: theme.spacing.md,
    height: 50,
    backgroundColor: "#f4f5fa",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },

  messageInput: {
    fontSize: 16,
    border: "none",
    width: "96%",

    "&:focus": {
      outline: "none",
    },
  },

  sendButton: {
    height: 24,

    "&:hover": {
      cursor: "pointer",
      // height: 28,
      // transition: "all 0.2s ease-in-out",
    },
  },
}));

const data = {
  body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. The water spouts are very accurate.",
  author: {
    name: "Jacob Warnhalter",
  },
};


function App() {
  const { classes } = useStyles();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(message);
    setMessage("")
  }

  return (
    <div className={classes.app}>
      <Container className={classes.wrapper}>
        <Title className={classes.title}>dtf?</Title>
        <div className={classes.messagesWrapper}>
          <StrangerMessage body={data.body} author={data.author} />
          <JoinBadge />
          <SelfMessage body={data.body} author={data.author} />
          <JoinBadge />
          <StrangerMessage body={data.body} author={data.author} />
          <JoinBadge />
          <SelfMessage body={data.body} author={data.author} />
          <SelfMessage body={data.body} author={data.author} />
        </div>
        <div className={classes.inputWrapper}>
          <input
            className={classes.messageInput}
            placeholder="type something here..."
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <img
            className={classes.sendButton}
            placeholder=""
            src="img/send.png"
            alt="send"
            onClick={sendMessage}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
