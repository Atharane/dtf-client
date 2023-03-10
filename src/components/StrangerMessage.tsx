import { createStyles, Text, Avatar, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "80%",
    marginTop: theme.spacing.sm,
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: "#f4f5fa",
  },

  author: {
    fontWeight: 700,
  },
}));

interface CommentSimpleProps {
  body: string;
  author: {
    name: string;
  };
}

export default function CommentSimple({ body, author}: CommentSimpleProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Text size="sm" className={classes.author}>
        {author.name}
      </Text>
      <Text color="#363938" size="sm">
        {body}
      </Text>
    </div>
  );
}
