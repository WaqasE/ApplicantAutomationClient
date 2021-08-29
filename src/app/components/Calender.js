import React, { useState } from 'react';
import colors from '../config/colors';
import moment from 'moment';

const date = new Date();
var month = [];
month[0] = 'Jan'; month[1] = 'Feb'; month[2] = 'Mar'; month[3] = 'Apr'; month[4] = 'May'; month[5] = 'Jun'; month[6] = 'Jul'; month[7] = 'Aug'; month[8] = 'Sep'; month[9] = 'Oct'; month[10] = 'Nov'; month[11] = 'Dec';
var weekday = [];
weekday[0] = 'Su'; weekday[1] = 'Mo'; weekday[2] = 'Tu'; weekday[3] = 'We'; weekday[4] = 'Th'; weekday[5] = 'Fr'; weekday[6] = 'Sa';
const startWeek = moment().startOf('month').week();
const endWeek = moment().endOf('month').week();

function Calender() {

    const [dates, setDates] = useState([]);

    const clndrStr = () => {
        const chngngDate = new Date();

        // Previous Month
        var arrPrev = [];
        chngngDate.setMonth(date.getMonth() > 0 ? date.getMonth() - 1 : 11);
        chngngDate.setDate(21);
        date.getMonth() > 0 ? chngngDate.setFullYear(date.getFullYear()) : chngngDate.setFullYear(date.getFullYear() - 1);
        for (var i = 0; i < 10; i++) {
            arrPrev = [...arrPrev, {
                month: chngngDate.getMonth(),
                day: weekday[chngngDate.getDay()],
                date: chngngDate.getDate(),
            }]
            chngngDate.setDate(chngngDate.getDate() + 1);
        }

        // Current Month
        var arrCurrent = [];
        chngngDate.setMonth(date.getMonth());
        chngngDate.setFullYear(date.getFullYear());
        chngngDate.setDate(1);
        const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        for (var i = 0; i < lastDate.getDate(); i++) {
            arrCurrent = [...arrCurrent, {
                month: chngngDate.getMonth(),
                day: weekday[chngngDate.getDay()],
                date: chngngDate.getDate(),
            }]
            chngngDate.setDate(chngngDate.getDate() + 1);
        }

        // Next Month
        var arrNext = [];
        chngngDate.setMonth(date.getMonth() > 0 ? date.getMonth() + 1 : 11);
        chngngDate.setDate(1);
        date.getMonth() > 0 ? chngngDate.setFullYear(date.getFullYear()) : chngngDate.setFullYear(date.getFullYear() - 1);
        for (var i = 0; i < 10; i++) {
            arrNext = [...arrNext, {
                month: chngngDate.getMonth(),
                day: weekday[chngngDate.getDay()],
                date: chngngDate.getDate(),
            }]
            chngngDate.setDate(chngngDate.getDate() + 1);
        }

        // Combining Dates
        var combined = [];
        // arrCurrent.length + weekday.indexOf(arrCurrent[0]['day']) + (weekday.length - weekday.indexOf(arrCurrent[arrCurrent.length - 1]['day']))
        combined = [...arrPrev.slice(arrPrev.length - weekday.indexOf(arrCurrent[0]['day']), arrPrev.length)];
        combined = [...combined, ...arrCurrent];
        combined = [...combined, ...arrNext.slice(0, ((weekday.length - 1) - weekday.indexOf(arrCurrent[arrCurrent.length - 1]['day'])))];
        if (dates.length === 0) {
            setDates(combined);
        }
    }

    clndrStr();

    return (
        <div id='calender'>
            <p id='calenderMon'>{month[date.getMonth()]} {date.getFullYear()}</p>
            <div id='calenderWrapper'>
                {weekday.map(
                    (_, i) => (
                        <p key={i} id='calenderItemHeading' style={{ color: i === date.getDay() ? colors.primary : 'black' }}>{weekday[i]}</p>
                    )
                )}
                {
                    dates.map(
                        (item, i) => (
                            <p key={i} className={date.getDate() === item.date && date.getMonth() === item.month ? 'active' : date.getMonth() !== item.month ? 'inactive' : ''} id='calenderItem'>{item.date}</p>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Calender;