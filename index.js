import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

async function main() {
    console.log(colors.bold.magenta("Welcome to the Chatbot Program utilizing ChatGPT!"));
    console.log(colors.bold.blue("Type 'exit' in order to leave this chat."));
    console.log(colors.bold.blue("You can start chatting with the bot."));

    // Array to store chat history to send to ChatGPI API
    const history = [];

    while(true) {
        const input = readlineSync.question(colors.green('You: '));

        // Check if user wants to exit
        if(input.toLowerCase() === 'exit') {
            console.log(colors.grey("Chatbot: ") + colors.bold.blue("Goodbye! If you have any more questions, feel free to ask."));
            return;
        }

        try {
            // Iterate over the history to construct messages and send context to ChatGPT
            const messages = history.map(([role, content]) => ({ role, content }))
            messages.push({ "role": "user", "content": input});

            // Call API with input as the user input
            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
            })
            
            // Get response content from API
            const responseContent = chatCompletion.choices[0].message.content;

            console.log(colors.grey("Chatbot: ") + responseContent);

            // Update chat history with user input and assistant response
            history.push(["user", input]);
            history.push(["assistant", responseContent]);
        } catch (error) {
            console.error(colors.red(error));
        }
    }

    // ----------testing openai api-------------
    // const chatCompletion = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //         { "role": "user", "content": "What is the capital of California?" },
    //     ],
    // });
    // console.log(chatCompletion.choices[0].message.content);
}

main();