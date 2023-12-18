This is a simple greetings card generator app by leveraging OpenAI's chatGPT API.

The app takes some metadata inputs such as recipient name, occasion and the character traits of the person the greeting is aimed to and send all these including a list of famous quotes to chatGPT API to generate a short text for the greetings card.

If the chatGPT API fails for some reason the app gracefully fallbacks to a very basic greeting created locally.

<!-- Ideally the OpenAI api key should come from the env variable but this is a demo task and an api key is added in the code. However, this will only be a fallback if an api key is not provided in the `.env.local` file. -->


## Getting Started

First create a `.env.local` file similar to `.env.example` and add an OpenAI api key there.

then, run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to to use the app


Here is a video demo


https://github.com/ishrak-imam/onepager_task/assets/16683923/56e3db55-e019-4ea1-866f-173c22e871f5

