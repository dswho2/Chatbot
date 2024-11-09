# Chatbot
A chatbot utilizing the ChatGPT model via OpenAI's v4 API, implemented in Node.js and operates within the terminal.
This chatbot utilizes the '**readline-sync**' Node.js package to prompt users for input via the command line interface. It then forwards these messages to ChatGPT using OpenAI's v4 API and retreives the response to relay back to the user.

![ChatBot image](https://github.com/dswho2/Chatbot/blob/main/chatbot.png)

# Usage
Obtain an OpenAI API key from https://platform.openai.com/account/api-keys

Next, edit the file named .env and replace KEY with the obtained OpenAI API key:
```
OPENAI_API_KEY=KEY
```

Then, install the required dependencies:
```bash
npm Install
```

Running the Chatbot:
```bash
npm start
```
