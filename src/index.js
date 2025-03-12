import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import DashBoardElements from "./components/DashBoardElements";
import QueueVisualizer from "./components/QueueVisualizer";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fix: use react-router-dom
import StackVisualizer from "./components/StackVisualizer";
import LinkedListVisualizer from "./components/LinkedListVisualizer";
import InfixToPostfixVisualizer from "./components/InfixToPostfixVisualizer";
import LinearSearchVisualizer from "./components/LinearSearchVisualizer";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* ✅ Correct placement of Analytics */}
                <Analytics />  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<DashBoard />}>
                        <Route index element={<DashBoardElements />} />
                        <Route path="stacks" element={<StackVisualizer />} />
                        <Route path="queues" element={<QueueVisualizer />} />
                        <Route path="linkedlists" element={<LinkedListVisualizer />} />
                        <Route path="infix-to-postfix" element={<InfixToPostfixVisualizer />} />
                        <Route path="linearsearch" element={<LinearSearchVisualizer />} />
                        {/* <Route path="bfs-traversal" element={<BfsTraversal />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
