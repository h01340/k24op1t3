import './App.css'
import { Routes, Route } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


export default function App() {

    return <div className="App" >

        <AppBar position='static' sx={{ backgroundColor: 'orange' }}>

            return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </>
            );

        </AppBar>

    </div >
}

/*
function App() {

    return (
        <div className="App">
            <AppBar position="static" color=''>
                <Toolbar>
                    <Typography variant="h6">
                        Dog Shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <ProductList/>
        </div>
    )
}
*/