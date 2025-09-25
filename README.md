  # 🤖 AI Assistant

A sleek and interactive web-based AI Assistant built with HTML, CSS, and JavaScript. Control the conversation with a user-friendly chat interface, featuring quick prompts, smooth animations, and a responsive design!
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

> ⚠️ **Note:** This project requires an AI API key for real-time interaction. Default implementation uses sample responses for demo purposes. 

## 🎯 Features   

- **Interactive Chat Interface** – Clean and intuitive user experience    
- **Quick Prompts** – Easily ask common questions with a single click  
- **Modern UI** – Smooth animations and modern layout  
- **Responsive Design** – Works perfectly on desktop, tablet, and mobile  
- **API Integration** – Plug in your API key for real AI-powered responses  
- **Touch Support** – Mobile-friendly input and controls

## 🕹️ How to Use

1. Type your message in the input box and hit **Enter** or click the **send** button  
2. Use **Quick Prompts** to auto-fill common queries  
3. User messages appear on the right, AI responses on the left  
4. Responses are simulated unless connected to a live API  

### 📱 Mobile Controls

- Tap to type in the input box  
- Tap quick prompts to fill questions instantly  
- Tap the send button to submit  

## 🏆 Interaction Examples

- **Weather Query:**  
  `What's the weather like today?` → `The weather today is sunny with a high of 28°C.`  
- **Fun Fact:**  
  `Tell me a fun fact` → `Honey never spoils!`  
- **Quantum Explanation:**  
  `Explain quantum computing simply` → `Quantum computing uses qubits for faster processing.`

## 🛠️ Installation

To run this AI Assistant locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/ai-assistant.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-assistant
   ```

3. Open `index.html` in your browser:

   - **Option 1:** Using Python
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

   - **Option 2:** Simply double-click `index.html` to open in your default browser

4. **Configure AI API:**

   - Get an API key from a provider like [xAI](https://x.ai/api)
   - Update `script.js` to replace the sample response logic with real API interaction

## 📁 Project Structure

```
ai-assistant/
├── index.html       # Main HTML file
├── styles.css       # Custom CSS styles
├── script.js        # JavaScript for chat functionality
├── README.md        # Project documentation
```

## 🌐 Browser Compatibility

| Browser         | Supported | Notes                    |
|----------------|-----------|--------------------------|
| Chrome          | ✅        | Full support             |
| Firefox         | ✅        | Full support             |
| Safari          | ✅        | Full support             |
| Edge            | ✅        | Full support             |
| Mobile Browsers | ✅        | Touch controls supported |

## 🔧 Technologies Used

- **HTML5** – Structure and markup  
- **CSS3** – Styling with Tailwind and animations  
- **JavaScript** – Chat logic and user interaction  
- **AI API** – Real-time responses (with key integration)

## 🎨 Customization

You can easily customize the assistant by editing:

- **Chat Responses:** Modify `script.js` to use your preferred AI API  
- **Visual Style:** Change styles in `styles.css` or Tailwind utility classes  
- **Quick Prompts:** Update prompt buttons in `index.html`

**Example customization:**
```javascript
// In script.js - add a new sample response
sampleResponses["hello"] = "Hi there! How can I assist you today?";
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository  
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request  

**Development Guidelines:**

- Follow JavaScript best practices  
- Test on multiple browsers  
- Ensure mobile responsiveness  
- Use clear and descriptive comments

## 📝 TODO List

- Add support for multiple AI providers  
- Save chat history to local storage  
- Add more quick prompts  
- Include typing animations for AI  
- Support light/dark themes  
- Implement message editing

## 📊 Performance

Optimized for performance:

- Minimal DOM manipulation  
- Efficient input event handling  
- Lightweight Tailwind CDN  
- Smooth chat scroll experience  

## 🐛 Known Issues

- Uses sample responses unless API key is provided  
- Limited default prompt options  
- Input may be obscured by mobile keyboard on small screens  

## 📈 Analytics (Planned)

- Track number of user messages  
- Most used prompts  
- Average response time from API  

## 👨‍💻 Developer

**Your Name**  
📧 Email:navee4147@gmail.com  
💻 GitHub: [Naveenr810953](https://github.com/Naveenr810953)

## 🙏 Acknowledgments

- **Tailwind CSS** for styling  
- **Google Fonts** for font styles  
- Inspired by modern chat UI/UX designs

## 📞 Support

If you have questions or issues, open a GitHub issue or contact me at **navee4147@gmail.com**.

---

⭐️ *If you like this project, please give it a star on GitHub!*
