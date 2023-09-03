import React, { useState, useEffect } from 'react';
import {TimerContainer, TimerItem, TimerLabel} from "./bio";
import {useColorModeValue} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";

const Timer = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const languageState = useSelector((state) => state.language)

    const [isRus, setIsRus] = useState(languageState.locale === 'ru');

    useEffect(() => {
        if (languageState.locale === 'ru') {
            setIsRus(true);
        } else {
            setIsRus(false);
        }
    }, [languageState.locale])


    useEffect(() => {
        const timer = setInterval(() => {
            const timeSince = new Date() - new Date('2020-09-01');
            setTimeElapsed(timeSince);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getYearLabel = (num) => {
        if (isRus) {
            if (num >= 11 && num <= 14) {
                return 'лет';
            } else if (num % 10 === 1 && num !== 11) {
                return 'год';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return 'года';
            } else {
                return 'лет';
            }
        } else if (!isRus) {
            if (num !== 1) {
                return 'years'
            } else {
                return 'year'
            }
        }

    };



    const getDayLabel = (num) => {
        if (isRus) {
            if (num >= 11 && num <= 14) {
                return 'дней';
            } else if (num % 10 === 1 && num !== 11) {
                return 'день';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return 'дня';
            } else {
                return 'дней';
            }
        } else if (!isRus) {
            if (num !== 1) {
                return 'days'
            } else {
                return 'day'
            }
        }

    };


    const getHourLabel = (num) => {
        if (isRus) {
            if (num >= 11 && num <= 14) {
                return 'часов';
            } else if (num % 10 === 1 && num !== 11) {
                return 'час';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return 'часа';
            } else {
                return 'часов';
            }
        } else if (!isRus) {
            if (num !== 1) {
                return 'hours'
            } else {
                return 'hour'
            }
        }
    };


    const getMinuteLabel = (num) => {
        if (isRus) {
            if (num >= 11 && num <= 14) {
                return 'минут';
            } else if (num % 10 === 1) {
                return 'минута';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return 'минуты';
            } else {
                return 'минут';
            }
        } else if (!isRus) {
            if (num !== 1) {
                return 'minutes'
            } else {
                return 'minute'
            }
        }

    };


    const getSecondLabel = (num) => {
        if (isRus) {
            if (num >= 11 && num <= 14) {
                return 'секунд';
            } else if (num % 10 === 1 && num !== 11) {
                return 'секунда';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return 'секунды';
            } else {
                return 'секунд';
            }
        } else if (!isRus) {
            if (num !== 1) {
                return 'seconds'
            } else {
                return 'second'
            }
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
