import OpenAI from "openai";

export type ChatCompletionCreateParams = OpenAI.Chat.ChatCompletionCreateParams;
export type ChatChoice = OpenAI.Chat.ChatCompletion.Choice;

export type ChatGPTResponse = OpenAI.Chat.ChatCompletion.Choice | { error: string };
