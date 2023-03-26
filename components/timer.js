import React, { useState, useEffect } from 'react';
import {TimerContainer, TimerItem, TimerLabel} from "./bio";
import {useColorModeValue} from "@chakra-ui/react";

const Timer = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const timeSince2020 = new Date() - new Date('2021-10-14');
            setTimeElapsed(timeSince2020);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getYearLabel = (num) => {
        if (num >= 11 && num <= 14) {
            return 'лет';
        } else if (num % 10 === 1 && num !== 11) {
            return 'год';
        } else if (num % 10 >= 2 && num % 10 <= 4) {
            return 'года';
        } else {
            return 'лет';
        }
    };


    const getDayLabel = (num) => {
        if (num >= 11 && num <= 14) {
            return 'дней';
        } else if (num % 10 === 1  && num !== 11) {
            return 'день';
        } else if (num % 10 >= 2 && num % 10 <= 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    };

    const getHourLabel = (num) => {
        if (num >= 11 && num <= 14) {
            return 'часов';
        } else if (num % 10 === 1 && num !== 11) {
            return 'час';
        } else if (num % 10 >= 2 && num % 10 <= 4) {
            return 'часа';
        } else {
            return 'часов';
        }
    };

    const getMinuteLabel = (num) => {
        if (num >= 11 && num <= 14) {
            return 'минут';
        } else if (num % 10 === 1) {
            return 'минута';
        } else if (num % 10 >= 2 && num % 10 <= 4) {
            return 'минуты';
        } else {
            return 'минут';
        }
    };

    const getSecondLabel = (num) => {
        if (num >= 11 && num <= 14) {
            return 'секунд';
        } else if (num % 10 === 1 && num !== 11) {
            return 'секунда';
        } else if (num % 10 >= 2 && num % 10 <= 4) {
            return 'секунды';
        } else {
            return 'секунд';
        }
    };

    const seconds = Math.floor(timeElapsed / 1000) % 60;
    const minutes = Math.floor(timeElapsed / (1000 * 60)) % 60;
    const hours = Math.floor(timeElapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24)) % 365;
    const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

    return (
        <TimerContainer>
            <TimerItem>
                {years}
                <TimerLabel style={{color: useColorModeValue('#ec5051', '#bababd')}}>{getYearLabel(years)}</TimerLabel>
            </TimerItem>
            <TimerItem>
                {days}
                <TimerLabel style={{color: useColorModeValue('#ec5051', '#bababd')}}>{getDayLabel(days)}</TimerLabel>
            </TimerItem>
            <TimerItem>
                {hours}
                <TimerLabel style={{color: useColorModeValue('#ec5051', '#bababd')}}>{getHourLabel(hours)}</TimerLabel>
            </TimerItem>
            <TimerItem>
                {minutes}
                <TimerLabel style={{color: useColorModeValue('#ec5051', '#bababd')}}>{getMinuteLabel(minutes)}</TimerLabel>
            </TimerItem>
            <TimerItem>
                {seconds}
                <TimerLabel style={{color: useColorModeValue('#ec5051', '#bababd')}}>{getSecondLabel(seconds)}</TimerLabel>
            </TimerItem>
        </TimerContainer>
    );
};

export default Timer;
