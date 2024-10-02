"use client"
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StatisticsCounter = () => {
    const [totalProjects, setTotalProjects] = useState(0);
    const [ongoingProjects, setOngoingProjects] = useState(0);
    const [moribundProjects, setMoribundProjects] = useState(0);
    const [completedProjects, setCompletedProjects] = useState(0);
    const counterRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        // Set the initial values for the counters
        setTotalProjects(100);
        setOngoingProjects(30);
        setMoribundProjects(15);
        setCompletedProjects(55);
    }, []);



    const animateCounter = (element, targetValue) => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count === targetValue) {
                clearInterval(interval);
            }
        }, 10); // Adjust the interval as needed
    };



    return (
        <div className="statistics-container">
            <StatisticCard ref={counterRefs[0]}>

                <p className='text-primary'>{totalProjects}</p>
                <h2 className='text-xl text-primary'>Total Projects</h2>
            </StatisticCard>

            <StatisticCard ref={counterRefs[1]}>

                <p className='text-primary'>{ongoingProjects}</p>
                <h2 className='text-xl text-primary'>Ongoing Projects</h2>
            </StatisticCard>

            <StatisticCard ref={counterRefs[2]}>

                <p className='text-primary'>{moribundProjects}</p>
                <h2 className='text-xl text-primary'>Moribund Projects</h2>
            </StatisticCard>
            <StatisticCard ref={counterRefs[3]}>
                <p className='text-primary'>{completedProjects}</p>
                <h2 className='text-xl text-primary'>Completed Projects</h2>
            </StatisticCard>
        </div>
    );
};

const StatisticCard = styled.div`
 border-right: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  width: 25%;
  height: 100%;
  font-size: 50px;
  
  
`;


export default StatisticsCounter;



