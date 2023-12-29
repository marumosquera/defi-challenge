//import libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components and views
import Error from "./views/Error";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";

//redux
import store from "./redux/store";
import { Provider } from "react-redux";

//web3modal
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const projectId = "363721610931329f6838442ad6fc982a";

// 2. Set chains
const goerli = {
  chainId: 5,
  name: "Goerli",
  currency: "ETH",
  explorerUrl: "https://goerli.etherscan.io",
  rpcUrl: "https://goerli.infura.io/v3/cf9d86fad8bb4748b45d0e27023c1e50",
};

// 3. Create modal
const metadata = {
  name: "DeFi Challenge",
  description: "DeFi transfer challenge",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [goerli],
  projectId,
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
