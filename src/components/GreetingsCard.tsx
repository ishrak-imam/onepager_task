"use client";

import { type FC } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGenerateGreeting } from "@/hooks/useGenerateGreeting";

type Inputs = {
  recipientName: string;
  occasion: string;
  characterTraits: string;
};

const schema = yup
  .object({
    recipientName: yup.string().required("Please enter the recipient's name"),
    occasion: yup
      .string()
      .required('Please enter the occasion, e.g. "Birthday"'),
    characterTraits: yup.string().required("Please enter the character traits"),
  })
  .required();

export const GreetingsCard: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      recipientName: "",
      occasion: "",
      characterTraits: "",
    },
    resolver: yupResolver(schema),
  });

  const { generateGreeting, greeting, isLoading } = useGenerateGreeting();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    generateGreeting(data);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Greetings Card Generator
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="recipientName"
          control={control}
          render={({
            field: { onChange, name, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ width: "100%", marginTop: 5 }}
              label="Recipient Name"
              variant="outlined"
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Controller
          name="occasion"
          control={control}
          render={({
            field: { onChange, name, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ width: "100%", marginTop: 5 }}
              label="Occasion"
              variant="outlined"
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Controller
          name="characterTraits"
          control={control}
          render={({
            field: { onChange, name, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ width: "100%", marginTop: 5 }}
              label="Character Traits"
              variant="outlined"
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Box
          sx={{
            marginTop: 5,
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : "Generate"}
          </Button>
        </Box>
      </form>

      {greeting && (
        <Card sx={{ width: "100%", marginY: 10 }}>
          <CardActionArea>
            <CardContent sx={{ whiteSpace: "pre-line" }}>
              {greeting}
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Container>
  );
};
