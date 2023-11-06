import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 (GPT-3) is an auto-regressive language model that uses deep learning to produce human-like text. It is the third-generation language prediction model in the GPT-n series (and the successor to GPT-2) created by OpenAI, a San Francisco-based artificial intelligence."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Chatbots are software applications that simulate human conversation. You can instantly engage website visitors with specific messages tailored to each visitor."/>
        <Feature title="Knowledgebase" text="Empower your support agents with a smart and AI-powered knowledgebase that learns from historical data and improves over time."/>
        <Feature title="Education" text="It can assist teachers in reviewing and grading student essays by analyzing the content, structure, and coherence of the writing."/>
      </div>
        
    </div>
  )
}

export default WhatGPT3