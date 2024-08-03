// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPrices } from './Components/action';
// import { Button, Modal, Table } from 'react-bootstrap';

// const App = () => {
//     const [symbol, setSymbol] = useState('GOOG');
//     const [showModal, setShowModal] = useState(false);
//     const dispatch = useDispatch();
//     const prices = useSelector(state => state.prices || []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             dispatch(fetchPrices(symbol));
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [symbol, dispatch]);

//     const handleChangeSymbol = (newSymbol) => {
//         setSymbol(newSymbol);
//         setShowModal(false);
//     };

//     return (
//         <div className="App">
//             <Button onClick={() => setShowModal(true)}>Change Symbol</Button>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Price</th>
//                         <th>Timestamp</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {prices.length > 0 ? (
//                         prices.map(price => (
//                             <tr key={price._id}>
//                                 <td>{price.price}</td>
//                                 <td>{new Date(price.timestamp).toLocaleString()}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="2">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Change Symbol</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Button onClick={() => handleChangeSymbol('GOOG')}>GOOG</Button>
//                     <Button onClick={() => handleChangeSymbol('BTC')}>BTC</Button>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPrices } from './Components/action';
// import { Button, Modal, Table } from 'react-bootstrap';

// const App = () => {
//     const [symbol, setSymbol] = useState('GOOG');
//     const [showModal, setShowModal] = useState(false);
//     const dispatch = useDispatch();
//     const prices = useSelector(state => state.prices || []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             dispatch(fetchPrices(symbol));
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [symbol, dispatch]);

//     const handleChangeSymbol = (newSymbol) => {
//         setSymbol(newSymbol);
//         setShowModal(false);
//     };

//     return (
//         <div className="App">
//             <Button onClick={() => setShowModal(true)}>Change Symbol</Button>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Price</th>
//                         <th>Timestamp</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {prices.length > 0 ? (
//                         prices.map((price, index) => (
//                             <tr key={price.currency || index}>
//                                 <td>{price.sort}</td>
//                                 <td>{new Date(price.timestamp).toLocaleString()}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="2">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Change Symbol</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Button onClick={() => handleChangeSymbol('GOOG')}>GOOG</Button>
//                     <Button onClick={() => handleChangeSymbol('BTC')}>BTC</Button>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCoinList } from './Components/action';
// import { Table } from 'react-bootstrap';

// const App = () => {
//     const dispatch = useDispatch();
//     const coinList = useSelector(state => state.coinList || []);
//     const error = useSelector(state => state.error);

//     useEffect(() => {
//         dispatch(fetchCoinList());
//     }, [dispatch]);

//     return (
//         <div className="App">
//             {error && <p>Error: {error}</p>}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Rank</th>
//                         <th>Symbol</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coinList.length > 0 ? (
//                         coinList.map((coin, index) => (
//                             <tr key={index}>
//                                 <td>{coin.rank}</td>
//                                 <td>{coin.code}</td>
//                                 <td>{coin.name}</td>
//                                 <td>{coin.rate.toFixed(2)}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCoinList } from './Components/action';
// import { Table, Form, Button } from 'react-bootstrap';

// const App = () => {
//     const dispatch = useDispatch();
//     const coinList = useSelector(state => state.coinList || []);
//     const error = useSelector(state => state.error);
//     const [selectedSymbol, setSelectedSymbol] = useState('');

//     useEffect(() => {
//         dispatch(fetchCoinList());
//     }, [dispatch]);

//     const handleSymbolChange = (event) => {
//         setSelectedSymbol(event.target.value);
//     };

//     const handleFetchSymbolData = () => {
//         dispatch(fetchCoinList(1));  // Fetch data for the selected symbol only
//     };

//     return (
//         <div className="App">
//             {error && <p>Error: {error}</p>}
//             <Form>
//                 <Form.Group controlId="symbolSelect">
//                     <Form.Label>Select Symbol</Form.Label>
//                     <Form.Control as="select" value={selectedSymbol} onChange={handleSymbolChange}>
//                         {coinList.slice(0, 5).map((coin, index) => (
//                             <option key={index} value={coin.code}>
//                                 {coin.code} - {coin.name}
//                             </option>
//                         ))}
//                     </Form.Control>
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleFetchSymbolData}>
//                     Fetch Data
//                 </Button>
//             </Form>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Rank</th>
//                         <th>Symbol</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coinList.length > 0 ? (
//                         coinList.map((coin, index) => (
//                             <tr key={index}>
//                                 <td>{coin.rank}</td>
//                                 <td>{coin.code}</td>
//                                 <td>{coin.name}</td>
//                                 <td>{coin.rate.toFixed(2)}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCoinList } from './Components/action';
// import { Table } from 'react-bootstrap';

// const App = () => {
//     const dispatch = useDispatch();
//     const coinList = useSelector(state => state.coinList || []);
//     const error = useSelector(state => state.error);

//     useEffect(() => {
//         dispatch(fetchCoinList(5));  // Fetch data for the top 5 symbols
//     }, [dispatch]);

//     return (
//         <div className="App">
//             {error && <p>Error: {error}</p>}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                     <th>Code</th>

//                         <th>Volume</th>
//                         <th>Cap</th>
//                         <th>Rate</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coinList.length > 0 ? (
//                         coinList.map((coin, index) => (
//                             <tr key={index}>
//                                 <td>{coin.code}</td>

//                                 <td>{coin.volume}</td>
//                                 <td>{coin.cap}</td>
//                                 <td>{coin.rate.toFixed(2)}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default App;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCoinList } from './Components/action';
// import { Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App = () => {
//     const dispatch = useDispatch();
//     const coinList = useSelector(state => state.coinList || []);
//     const error = useSelector(state => state.error);

//     useEffect(() => {
//         dispatch(fetchCoinList(5));  // Fetch data for the top 5 symbols
//     }, [dispatch]);

//     return (
//         <div className="App">
//             <h1>Mini-Website to Collect and Display Real-Time Price Data</h1>
//             {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//             <Table striped bordered hover variant="dark" className="table-dark">
//                 <thead>
//                     <tr>
//                         <th>Stocks</th>
//                         <th>Volume</th>
//                         <th>Cap</th>
//                         <th>Rate</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coinList.length > 0 ? (
//                         coinList.map((coin, index) => (
//                             <tr key={index}>
//                                 <td>{coin.code}</td>
//                                 <td>{coin.volume}</td>
//                                 <td>{coin.cap}</td>
//                                 <td>{coin.rate.toFixed(2)}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCoinList } from './Components/action';
// import { Table, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App = () => {
//     const dispatch = useDispatch();
//     const coinList = useSelector(state => state.coinList || []);
//     const error = useSelector(state => state.error);

//     useEffect(() => {
//         dispatch(fetchCoinList(5));  // Fetch data for the top 5 symbols
//     }, [dispatch]);

//     const reloadPage = () => {
//         window.location.reload();
//     };

//     return (
//         <div className="App">
            
//             <h1>Mini-Website to Collect and Display Real-Time Price Data</h1>
           
//             {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//             <Table striped bordered hover variant="dark" className="table-dark">
//                 <thead>
//                     <tr>
//                         <th>Code</th>
//                         <th>Volume</th>
//                         <th>Cap</th>
//                         <th>Rate</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coinList.length > 0 ? (
//                         coinList.map((coin, index) => (
//                             <tr key={index}>
//                                 <td>{coin.code}</td>
//                                 <td>{coin.volume}</td>
//                                 <td>{coin.cap}</td>
//                                 <td>{coin.rate.toFixed(2)}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>

//             </Table>
//             <Button variant="secondary" onClick={reloadPage} style={{ marginBottom: '20px' }}>
//                 Reload Page
//             </Button>
//         </div>
//     );
// };

// export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinList } from './Components/action';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const coinList = useSelector(state => state.coinList || []);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchCoinList(5));  // Fetch data for the top 5 symbols
    }, [dispatch]);

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className="App">
            <h1>Mini-Website to Collect and Display Real-Time Price Data</h1>
           
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <Table striped bordered hover variant="dark" className="table-dark">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Volume</th>
                        <th>Cap</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {coinList.length > 0 ? (
                        coinList.map((coin, index) => (
                            <tr key={index}>
                                <td>{coin.code}</td>
                                <td>{coin.volume}</td>
                                <td>{coin.cap}</td>
                                <td>{coin.rate.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>

            </Table>
            <Button variant="secondary" onClick={reloadPage} className="Button">
                Reload Page
            </Button>
        </div>
    );
};

export default App;

