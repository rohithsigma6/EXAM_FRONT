// src/Exam.js
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [cardsData, setCardsData] = useState([])
    const [ID,setID]=useState("")

    const getAllTests = async () => {
        const response = await axios.get("http://localhost:1234/v1/getalltests")
        console.log(response)
        setCardsData(response.data)
    }
    useEffect(() => {
        getAllTests()
    }, [])
    const handleExam = (e,cardID) => {
        e.preventDefault()
        console.log(cardID)
        localStorage.setItem("examId", cardID)
        navigate("/quizinterface")

    }
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Exam Cards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cardsData.map((card, index) => (
                    <div>
                        <Card key={index} title={card.testName} description={card.testAbout} />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded"
                            onClick={(e)=>{                             
                                handleExam(e,card._id)
                            }}
                           
                            >
                            Take Exam
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
